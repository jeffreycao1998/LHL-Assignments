const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  const playlists = library.playlists
  for (let playlist in playlists) {
    console.log(`${playlists[playlist].id}: ${playlists[playlist].name} - ${playlists[playlist].tracks.length} tracks`)
  }
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  const tracks = library.tracks
  for (let track in tracks) {
    console.log(`${tracks[track].id}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
  }
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const playlist = library.playlists[playlistId];
  console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  playlist.tracks.forEach( track => {
    const trackObj = library.tracks[track];
    console.log(`${track}: ${trackObj.name} by ${trackObj.artist} (${trackObj.album})`);
  });
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId] = {
    ...library.playlists[playlistId],
    tracks: [...library.playlists[playlistId].tracks, trackId]
  };
};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  const Id = `t${generateUid()}`;
  if (!library.tracks.hasOwnProperty(Id)) {
    library.tracks[Id] = {
      id: Id,
      name,
      artist,
      album
    }
  }
}


// adds a playlist to the library
const addPlaylist = function(name) {
  const Id = `p${generateUid()}`;
  if (!library.playlists.hasOwnProperty(Id)) {
    library.playlists[Id] = {
      id: Id,
      name,
      tracks: []
    }
  }
};


// STRETCH:
// given a query string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  const lowerCaseQuery = query.toLowerCase();
  const results = [];
  for (let curTrack in library.tracks) {
    let track = library.tracks[curTrack];
    if (track.name.toLowerCase().includes(lowerCaseQuery) || 
        track.artist.toLowerCase().includes(lowerCaseQuery) || 
        track.album.toLowerCase().includes(lowerCaseQuery)) {
      results.push(track);
    }
  }
  console.log(results);
};