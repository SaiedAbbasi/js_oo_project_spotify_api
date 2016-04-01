app.song = {
    all: [],
    new: (function() {
      var counter = 0;
      var song = function song(title, mood){
        this.title = title;
        this.mood = mood;

        var that = this;
        function initialize() {
          counter++
          that.id = counter;
          app.song.all.push(that);
        };
      initialize();
    }
      return song
    }()),

    findBy: function findBy(attributeHash){
      // attributeHash = {name: ''}
      var key = Object.keys(attributeHash)[0]
      var value = attributeHash[key]
      return $.grep( app.song.all, function(song) {
        return song[key] == value;
      });
    }



}
