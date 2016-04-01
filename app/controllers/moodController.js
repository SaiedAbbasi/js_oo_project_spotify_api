$(function(){
  $('.mood').click(app.mood.controller.show.init)
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
        $that.hide()
        var replace = $that.parent()
        var link = replace.append('<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A' + songForReal.code + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
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



