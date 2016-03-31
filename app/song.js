app.song = {
    all: [],
    new: (function() {
      var counter = 0;
      var song = function song(title, mood){
        this.name = name;
        this.song_array = song_array;
        this.mood = mood

        var that = this;
        function initialize() {
          counter++
          that.id = counter;
          app.song.all.push(that);
        };
      initialize();
    }           
      return song
    }())
}