$(function(){
  $('.mood').click(app.mood.controller.show.init)
  app.mood.controller.show.tini();
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
        // var $back = $('.back')
        $moodContainer.hide( "slow", function() {
        });
        $trackDisplay.append('<div class="song col-md-8" style="padding: 0 30px;"><iframe style="float:left; padding-right:30px;" src="https://embed.spotify.com/?uri=spotify%3Atrack%3A' + artistForReal.song.code + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe></div>');
        $('.song').append('<h2 style="margin-top: 8px;">Track: ' + artistForReal.song.title + '</h2>');
        $('.song').append('<h2>By: ' + artistForReal.name + '</h2>');
        $('.song').append('<p>From the album: ' + artistForReal.song.albumName + '</p>');
        $('.song').append('<p>Popularity Rating: ' + artistForReal.song.trackPopularity + '</p>');
        $('.song').append('<p style="margin: 0 0 40px;">Mood: ' + artistForReal.song.mood.name + '</p>');
        $('.song').append('<span class="back">Change Your Mood</span>');
        // $trackDisplay.append(songForReal.albumArtEmbed);
        $trackDisplay.append('<div class="relatedArtist col-md-4">Related Artists: </div>')
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
      }
  } //show
} //controller




// 1. starting with mood object.
// mood will have array of song titles
// random to 1 song title
// call api with song title query
//https://api.spotify.com/v1/search?query=althea&offset=0&limit=1&type=track
// get back data object
// parse data into variables
// save song object (data, mood object)
//     *this is the mood association



// $('#new_div').appendTo('#original_div').show('slow');
// $trackDisplay.appendTo($moodContainer).show('slow');
// $('#original_div').append($new);
// $new.show('slow');





// adapter: {
//  +    getBy: function(name){
//  +      return $.ajax({
//  +      method: "GET",
//  +      url: "https://api.spotify.com/v1/search?query=" + name + "&type=artist",
//  +      }).then(function(data){
//  +        var artist_data;
//  +        var artist;
//  +        artist_data= data.artists.items[0];
//  +        artist = new app.artist.model.new(artist_data.name, artist_data.popularity, artist_data.images[0])
//  +
//  +        return artist;
//  +      })
//  +      // new app.artist.model.new()
//  +    }
//  +  }
