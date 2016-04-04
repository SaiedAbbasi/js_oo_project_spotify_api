app.song = {
    all: [],
    new: (function() {
      var counter = 0;
      var song = function song(title, mood, code, albumArtEmbed, albumName, artistName, artistId, trackPopularity){
        this.title = title;
        this.mood = mood;
        this.code = code;
        this.albumArtEmbed = albumArtEmbed;
        this.albumName = albumName;
        this.artistName = artistName;
        this.artistId = artistId
        this.trackPopularity = trackPopularity;

        var that = this;
        function initialize() {
          counter++
          that.id = counter;
          app.song.all.push(that);
        };
      initialize();
    }
      return song;
    }()),

    findBy: function findBy(attributeHash){
      var key = Object.keys(attributeHash);
      var value = attributeHash[key];
      return $.grep( app.song.all, function(song) {
        return song[key] == value;
      });
    },

    findByMood: function findByMood(mood) {
      return $.grep( app.song.all, function(song) {
        return song.mood == mood;
      })
    },

    randomSong: function randomSong(mood){
      var index
      var songs = mood.songArray
      var selectedSongTitle = songs[Math.floor(Math.random()*songs.length)]
      index = mood.songArray.indexOf(selectedSongTitle)
      mood.songArray.splice(index, 1)
      return selectedSongTitle;
    },
    
    adapter: {
      getBy: function(selectedSongTitle, moodInstance){ 
        return $.ajax({
          method: "GET",
          url: "https://api.spotify.com/v1/search?query=" + selectedSongTitle + "&offset=0&limit=1&type=track"
        }).then(function(data){
          var trackId
          var albumArtUrl
          var albumArtEmbed
          var albumName
          var artistName
          var artistId
          var trackPopularity

          var trackId = data.tracks.items[0].id
          var albumArtUrl = data.tracks.items[0].album.images[0].url
          var albumArtEmbed = '<img src="' + albumArtUrl + '" width="400px">'
          var albumName = data.tracks.items[0].album.name
          var artistName = data.tracks.items[0].artists[0].name
          var artistId = data.tracks.items[0].artists[0].id
          var trackPopularity = data.tracks.items[0].popularity

          var songForReal = new app.song.new(selectedSongTitle,  moodInstance, trackId, albumArtEmbed, albumName, artistName, artistId, trackPopularity)

          return songForReal
        })
        //new app.song.new
      }
    }
}  

// "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/4TMHGUX5WI7OOm53PqSDAT"
//         },
//         "href" : "https://api.spotify.com/v1/artists/4TMHGUX5WI7OOm53PqSDAT",
//         "id" : "4TMHGUX5WI7OOm53PqSDAT",
//         "name" : "Grateful Dead",
//         "type" : "artist",
//         "uri" : "spotify:artist:4TMHGUX5WI7OOm53PqSDAT"
//       } ],





 // randomSong: function randomSong(mood){
 //      var songs = app.song.findByMood(mood);
 //      var selectedSong = songs[Math.floor(Math.random()*songs.length)]
 //      return selectedSong;
 //    }