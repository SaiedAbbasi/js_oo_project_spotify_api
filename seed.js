
var chill = new app.mood.new("Chill")
var simonCode = "21HtJyUMzWmYW1tBG2pZ5g"
var simonSong = new app.song.new("Born At The Right Time", chill, simonCode)
var paulSimon = new app.artist.new("Paul Simon", simonSong)

var deadSong = new app.song.new("Althea", chill)
var deadCode = "7M7AwtGvWdMYudqx5Iuh1m"
var gratefulDead = new app.artist.new("Grateful Dead", deadSong, deadCode)

var happy = new app.mood.new("Happy")
var jacSong = new app.song.new("I'm Amazed", happy)
var myMorningJacket = new app.artist.new("My Morning Jacket", jacSong)


// var salvated = new app.mood.new("Salvated")
// var crSong = new app.song.new("With Arms Wide Open", salvated)
// var crd = new app.artist.new("Creed", crSong)
