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
           app.mood.controller.show.render(songForReal, $that);
        })
      }, 
    render: function (songForReal, $that){
        $.fx.speeds.xslow = 1700;
        var $moodContainer = $('.mood_container')
        var $trackDisplay = $('.track_display')
        // var $back = $('.back')
        $moodContainer.hide( "slow", function() {
        });
        $trackDisplay.append('<div style="float:left; padding: 0 30px;"><iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A' + songForReal.code + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe></div>');
        $trackDisplay.append('<h2>Track: ' + songForReal.title + '</h2>');
        $trackDisplay.append('<h2>By: ' + songForReal.artistName + '</h2>');
        $trackDisplay.append('<p>From the album: ' + songForReal.albumName + '</p>');
        $trackDisplay.append('<p>Popularity Rating: ' + songForReal.trackPopularity + '</p>');
        $trackDisplay.append('<p style="margin: 0 0 40px;">Mood: ' + songForReal.mood.name + '</p>');
        $trackDisplay.append('<span class="back">Change Your Mood</span>');
        // $trackDisplay.append(songForReal.albumArtEmbed);

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



