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
             },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  printPlayLists: function() {
    const playlists = this.playlists
    for (let playlist in playlists) {
      console.log(`${playlists[playlist].id}: ${playlists[playlist].name} - ${playlists[playlist].tracks.length} tracks`)
    }
  },
  printTracks: function() {
    const tracks = this.tracks
    for (let track in tracks) {
      console.log(`${tracks[track].id}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
    }
  },
  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    playlist.tracks.forEach( track => {
      const trackObj = this.tracks[track];
      console.log(`${track}: ${trackObj.name} by ${trackObj.artist} (${trackObj.album})`);
    });
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId] = {
      ...this.playlists[playlistId],
      tracks: [...this.playlists[playlistId].tracks, trackId]
    };
  },
  addTrack: function(name, artist, album) {
    const Id = `t${this.generateUid()}`;
    if (!this.tracks.hasOwnProperty(Id)) {
      this.tracks[Id] = {
        id: Id,
        name,
        artist,
        album
      }
    }
  },
  addPlaylist: function(name) {
    const Id = `p${this.generateUid()}`;
    if (!this.playlists.hasOwnProperty(Id)) {
      this.playlists[Id] = {
        id: Id,
        name,
        tracks: []
      }
    }
  },
  printSearchResults: function(query) {
    const lowerCaseQuery = query.toLowerCase();
    const results = [];
    for (let curTrack in thistracks) {
      let track = this.tracks[curTrack];
      if (track.name.toLowerCase().includes(lowerCaseQuery) || 
          track.artist.toLowerCase().includes(lowerCaseQuery) || 
          track.album.toLowerCase().includes(lowerCaseQuery)) {
        results.push(track);
      }
    }
    console.log(results);
  },
};

library.printTracks();