$(function(){
  $('.mood').click(app.mood.controller.show.init)
  app.mood.controller.show.tini();
  app.mood.controller.show.nextSong();
 })

app.mood.controller = {
  show: {
    init: function (){   
        var $that = $(this)
        var selectedMood = $that.text();
        var moodInstanceArray = app.mood.findBy({name: selectedMood});
        var moodInstance = moodInstanceArray[0]
        var selectedSongTitle = app.song.randomSong(moodInstance);
        app.song.adapter.getBy(selectedSongTitle, moodInstance).then(function(songForReal){
          app.artist.adapter.getBy(songForReal).then(function(artistForReal){
            app.mood.controller.show.render(artistForReal, $that);
          })
        })
      },
    render: function (artistForReal, $that){
        $.fx.speeds.xslow = 1700;
        var $moodContainer = $('.mood_container')
        var $trackDisplay = $('.track_display')
        $moodContainer.hide( "slow", function() {
        });
        $trackDisplay.empty()
        $trackDisplay.append('<div class="song col-md-8" style="padding: 0 30px;"><iframe style="float:left; padding-right:30px;" src="https://embed.spotify.com/?uri=spotify%3Atrack%3A' + artistForReal.song.code + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe></div>');
        $('.song').append('<h2 style="margin-top: 8px;">Track: ' + artistForReal.song.title + '</h2>')
        $('.song').append('<h2>By: ' + artistForReal.name + '</h2>');
        $('.song').append('<p>From the album: ' + artistForReal.song.albumName + '</p>');
        $('.song').append('<p>Popularity Rating: ' + artistForReal.song.trackPopularity + '</p>');
        $('.song').append('<p style="margin: 0 0 40px;">Mood: ' + artistForReal.song.mood.name + '</p>');
        $('.song').append('<span class="next" id="' + artistForReal.song.mood.name +'">Next Song</span><br><br>');
        $('.song').append('<span class="back">Change Your Mood</span>');
        $trackDisplay.append('<div class="relatedArtist col-md-4">Related Artists (Sorted by Popularity): </div>')
        artistForReal.relatedArtists.forEach(function(relatedArtist){
          $('.relatedArtist').append('<li>' + relatedArtist + '</li>')
        })

        $trackDisplay.show('xslow')
      },
      tini: function (){
        $('body').on('click', '.back', function() {
          var $trackDisplay = $('.track_display')
          var $moodContainer = $('.mood_container')
          $trackDisplay.hide( "slow", function() {
          });
          $moodContainer.show()
          $trackDisplay.empty()
        });
      },
      nextSong: function(){
        $('body').on('click', '.next', function() {
          var $that = $(this)
          var selectedMood = $that[0].id;
          var moodInstanceArray = app.mood.findBy({name: selectedMood});
          var moodInstance = moodInstanceArray[0]
            if (moodInstance.songArray.length === 0) {
              (function() {
                var $trackDisplay = $('.track_display')
                var $moodContainer = $('.mood_container')
                $trackDisplay.hide( "slow", function() {
                });
                $moodContainer.show()
                $trackDisplay.empty()
              }());
            } else {
              var selectedSongTitle = app.song.randomSong(moodInstance);
              app.song.adapter.getBy(selectedSongTitle, moodInstance).then(function(songForReal){
                app.artist.adapter.getBy(songForReal).then(function(artistForReal){
                  app.mood.controller.show.render(artistForReal, $that);
                })
              }) 
            }
        })
      }
  }
}