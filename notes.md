Event listener - find which box user clicks
  Find the instance of the mood the user picks
    Controller => app.mood.findBy

  Query song to see what matches the mood
    app.song.findBy(mood)

  <!-- Select a song at random
    Method in song - app.song.random
      var random = app.mood.songs[Math.floor(Math.random()*items.length)] -->

  Turn that into an API call
  Return the song and artist in the associated panel on index




<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A" + song.code + "" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>


<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3923g6sPJ8b5AIW9Vke1p2" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>

https://api.spotify.com/v1/tracks/3923g6sPJ8b5AIW9Vke1p2
song.code = 3923g6sPJ8b5AIW9Vke1p2