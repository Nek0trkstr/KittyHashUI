
myplaylist = playlist("playlist.pls")
# If something goes wrong, we'll play this
security = single("./music/Booty Swing.mp3")

# Start building the feed with music
radio = myplaylist
# And finally the security
radio = fallback(track_sensitive = false, [radio, security])

# Stream it out
output.icecast(%mp3,
  host = "icecast", port = 8000,
  password = "hackme", mount = "basic-radio",
  radio)