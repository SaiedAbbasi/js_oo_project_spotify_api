app.song = {
    all: [],
    new: (function() {
      var counter = 0;
      var song = function song(title, mood, code){
        this.title = title;
        this.mood = mood;
        this.code = code;

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
      var songs = mood.songArray
      var selectedSongTitle = songs[Math.floor(Math.random()*songs.length)]
      return selectedSongTitle;
    },
    
    adapter: {
      getBy: function(selectedSongTitle, moodInstance){ 
        return $.ajax({
          method: "GET",
          url: "https://api.spotify.com/v1/search?query=" + selectedSongTitle + "&offset=0&limit=1&type=track"
        }).then(function(data){
          var songForReal = new app.song.new(selectedSongTitle,  moodInstance, data.tracks.items[0].id)
          return songForReal
        })
        //new app.song.new
      }
    }
}  







 // randomSong: function randomSong(mood){
 //      var songs = app.song.findByMood(mood);
 //      var selectedSong = songs[Math.floor(Math.random()*songs.length)]
 //      return selectedSong;
 //    }