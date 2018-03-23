var playlist={
  type:"rick",
  coolest:"roll"
}

function updatePlaylist(playlist, artistName, songTitle){
 playlist[artistName] = songTitle
 return playlist
}