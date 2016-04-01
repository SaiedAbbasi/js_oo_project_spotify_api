Event listener - find which box user clicks
  Find the instance of the mood the user picks
    Controller => app.mood.findBy

  Query song to see what matches the mood
    app.song.findBy(mood)

  Select a song at random
    Method in song - app.song.random
      var random = app.mood.songs[Math.floor(Math.random()*items.length)]

  Turn that into an API call
  Return the song and artist in the associated panel on index
