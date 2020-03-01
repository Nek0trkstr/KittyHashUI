const Parser = {
  parseMetadata(jsonMetadata) {
    // Song data on the server is of the form 'Artist - Songname' and should be parsed
    const songInfo = jsonMetadata.icestats.source.title.split('-');
    const songArtist = songInfo[0].trim();
    const songTitle = songInfo[1].trim();
    return (
      {
        songTitle,
        songArtist,
        currentlyListening: jsonMetadata.icestats.source.listeners,
      }
    );
  },
};

export default Parser;
