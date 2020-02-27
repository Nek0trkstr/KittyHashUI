
myplaylist = playlist("/music/playlist.pls")
# If something goes wrong, we'll play this
security = single("/fallback/Better_Days.mp3")

# Start building the feed with music
radio = myplaylist
# And finally the security
radio = fallback(track_sensitive = false, [radio, security])

# Stream it out
output.icecast(%mp3,
  host = "icecast", port = 8000,
  password = getenv("ICECAST_SOURCE_PASSWORD"), mount = getenv("ICECAST_MOUNT_NAME"),
  radio)