app.artist = {
    all: [],
    new: (function() {
      var counter = 0;
      var artist = function Artist(name, song_array, mood){
        this.name = name;
        this.song_array = song_array;
        this.mood = mood

        var that = this;
        function initialize() {
          counter++
          that.id = counter;
          app.artist.all.push(that);
        };
      initialize();
    }           
      return artist
    }())
}


  // artist.prototype.students = function(){
  //   return app.song.findBy({artist: this})
  // };

  // findBy: function findBy(attributeHash){
  //   // attributeHash = {name: ''}
  //   var key = Object.keys(attributeHash)[0]
  //   var value = attributeHash[key]
  //   return $.grep( app.artist.all, function(artist) {
  //     return artist[key] == value;
  //   });
  // }