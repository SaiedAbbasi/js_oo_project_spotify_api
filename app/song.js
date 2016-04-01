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
      var songs = app.song.findByMood(mood);
      var selectedSong = songs[Math.floor(Math.random()*songs.length)]
      return selectedSong;
    }
}