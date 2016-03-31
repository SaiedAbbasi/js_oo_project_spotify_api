app.mood = {
    all: [],
    new: (function() {
      var counter = 0;
      var mood = function mood(name, mood_array, mood){
        this.name = name;
        this.mood_array = mood_array;
        this.mood = mood

        var that = this;
        function initialize() {
          counter++
          that.id = counter;
          app.mood.all.push(that);
        };
      initialize();
    }           
      return mood
    }())
}