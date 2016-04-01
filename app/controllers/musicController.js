app.musicController = {
  initialize: function moodListener() {
    $('.mood').click(function() {
      var selectedMood = $(this).text();
      var moodInstance = app.mood.findBy({name: selectedMood});
      var displayedSong = app.song.randomSong(moodInstance[0]);
    $(this).hide()
    var replace = $(this).parent()
    debugger;
    var link = replace.append('<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A"' + displayedSong.code + "" + 'width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
    })
  }

}


$(document).ready(function() {
  app.musicController.initialize()
})

