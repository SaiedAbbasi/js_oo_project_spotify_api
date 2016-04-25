app.mood = {
    all: [],
    new: (function() {
      var counter = 0;
      var mood = function mood(name, songArray){
        this.name = name;
        this.songArray = songArray

        var that = this;
        function initialize() {
          counter++
          that.id = counter;
          app.mood.all.push(that);
        };
      initialize();
    }
      return mood
    }()),

    findBy: function findBy(attributeHash){
      // attributeHash = {name: ''}
      var key = Object.keys(attributeHash)[0]
      var value = attributeHash[key]
      return $.grep( app.mood.all, function(mood) {
        return mood[key] == value;
      });
    }
}
