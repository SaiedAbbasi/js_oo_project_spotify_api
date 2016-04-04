app.artist = {
    all: [],
    new: (function() {
      var counter = 0;
      var artist = function Artist(songForReal, relatedArtists){
        this.name = songForReal.artistName;
        this.song = songForReal;
        this.id = songForReal.artistId;
        this.relatedArtists = relatedArtists

        var that = this;
        function initialize() {
          counter++
          that.id = counter;
          app.artist.all.push(that);
        };
      initialize();
    }
      return artist
    }()),

    findBy: function findBy(attributeHash){
      // attributeHash = {name: ''}
      var key = Object.keys(attributeHash)[0]
      var value = attributeHash[key]
      return $.grep( app.artist.all, function(artist) {
        return artist[key] == value;
      });
    },

   adapter: {
      getBy: function(songForReal){
        return $.ajax({
          method: "GET",
          url: "https://api.spotify.com/v1/artists/" + songForReal.artistId + "/related-artists"
        }).then(function(data){
          var limit
          var i
          var relatedArtistSet = []

          var relatedArtistToSort = {}

          limit = data.artists.length


          for (i = 0; i < limit; i++) {
            relatedArtistToSort[data.artists[i].popularity] = data.artists[i].name
            // + ", " + data.artists[i].popularity
          }
          var relatedArtistKeys = Object.keys(relatedArtistToSort)
          var relatedArtistSortedPopularity = relatedArtistKeys.sort().reverse()
          var relatedArtistNameSorted = []
          relatedArtistSortedPopularity.forEach(function(popularity){
            relatedArtistNameSorted.push(relatedArtistToSort[popularity])
          })

          var artistForReal = new app.artist.new(songForReal, relatedArtistNameSorted)
          return artistForReal


          // for (i = 0; i < limit; i++) {
          //   relatedArtistSet[i] = data.artists[i].name
          //   // + ", " + data.artists[i].popularity
          // }
          // var artistForReal = new app.artist.new(songForReal, relatedArtistSet)
          //
          // return artistForReal
        })
        //new app.song.new
      }
    }


}


  // artist.prototype.students = function(){
  //   return app.song.findBy({artist: this})
  // };



// app.artist.prototype.findBy(function(attributeHash){
//   // attributeHash = {name: ''}
//     var key = Object.keys(attributeHash)[0]
//     var value = attributeHash[key]
//     return $.grep( app.artist.all, function(artist) {
//       return artist[key] == value;
//     });
//   })
