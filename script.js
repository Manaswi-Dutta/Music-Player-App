const songs = [
  {
    name: "Levitating",
    album: "Future Nostalgia",
    artist: "Dua Lipa",
    duration: "3:23",
    genre: "Pop",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    name: "Shape of You",
    album: "Divide",
    artist: "Ed Sheeran",
    duration: "3:53",
    genre: "Pop",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    name: "As It Was",
    album: "Harry's House",
    artist: "Harry Styles",
    duration: "2:47",
    genre: "Pop",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    name: "Blinding Lights",
    album: "After Hours",
    artist: "The Weeknd",
    duration: "3:20",
    genre: "Synthwave",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    name: "Nightcall",
    album: "OutRun",
    artist: "Kavinsky",
    duration: "4:18",
    genre: "Synthwave",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    name: "Real Hero",
    album: "Drive OST",
    artist: "College & Electric Youth",
    duration: "4:27",
    genre: "Synthwave",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  {
    name: "Señorita",
    album: "Romance",
    artist: "Shawn Mendes & Camila Cabello",
    duration: "3:10",
    genre: "Latin Pop",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
  },
  {
    name: "Despacito",
    album: "Vida",
    artist: "Luis Fonsi",
    duration: "3:47",
    genre: "Latin Pop",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },
  {
    name: "Bailando",
    album: "Sex and Love",
    artist: "Enrique Iglesias",
    duration: "4:03",
    genre: "Latin Pop",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
  },
  {
    name: "Numb",
    album: "Meteora",
    artist: "Linkin Park",
    duration: "3:06",
    genre: "Alternative Rock",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  },
  {
    name: "Smells Like Teen Spirit",
    album: "Nevermind",
    artist: "Nirvana",
    duration: "5:01",
    genre: "Alternative Rock",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
  },
  {
    name: "Boulevard of Broken Dreams",
    album: "American Idiot",
    artist: "Green Day",
    duration: "4:20",
    genre: "Alternative Rock",
    image: "https://picsum.photos/150",
    audio: "https://www.soundhelix.com/examples/mp3"
  }
]

const genreFilter = document.getElementById('genreFilter');
const songList = document.getElementById('songsList');
const songCard = document.getElementById('song-card');
let currentIndex = 0;
let currentSongArray = songs;
renderSongs(songs);
renderSongCard(songs[0]);
function renderSongs(songArray) {
  songList.innerHTML = '';
  songArray.forEach(song => {
    const li = document.createElement('li');
    li.classList.add('dm-li');
    li.textContent = `${song.name} - ${song.artist}`;
    
    li.addEventListener('click', () => {
      currentIndex = songArray.indexOf(song);
renderSongCard(song)});
    
    songList.appendChild(li);
  });
}

genreFilter.addEventListener('change', () => {
  const selectedGenre = genreFilter.value;
  const filteredSongs = selectedGenre === 'All'
    ? songs
    : songs.filter(song => song.genre === selectedGenre);
  renderSongs(filteredSongs);
  currentSongArray = filteredSongs;
  currentIndex = 0;
  renderSongCard(currentSongArray[currentIndex]);
});

// Initial render
renderSongs(songs);
function renderSongCard(song) {
  songCard.innerHTML = ''; // Clear previous song details
 
     const img = document.createElement('img');
  img.src = song.image;
  img.style.width = '100%';

  const audio = new Audio();
  audio.src = song.audio;
  audio.controls = true; // Add playback controls
  audio.loop = false; // Prevent looping
  // audio.autoplay = true; // Prevent autoplay

  const title = document.createElement('h5');
  title.textContent = song.name;

  const artist = document.createElement('h6');
  artist.textContent = `By ${song.artist}`;

  songCard.append(img,title, artist, audio);
}

function showCurrentSong(){
   renderSongCard(currentSongArray[currentIndex]);
}
document.getElementById('prevBtn').addEventListener('click',() => {
  currentIndex = (currentIndex - 1 + currentSongArray.length)% currentSongArray.length;
  showCurrentSong();
})
document.getElementById('nextBtn').addEventListener('click',() => {
  currentIndex = (currentIndex + 1 + currentSongArray.length)% currentSongArray.length;
  showCurrentSong();
})

//Addplaylist function
const createPlaylist = document.getElementById("createPlaylist");
const allPlaylists = document.getElementById('allPlaylists');
const currentPlaylist = document.getElementById('currentPlaylist');
const createBtn = document.getElementById("createBtn");
const playlistBtn = document.getElementById("playListBtn"); 
const playlists = {};
let selectedPlaylist = null;
function addPlaylist(){
 createBtn.addEventListener('click',() => {
  const name = createPlaylist.value.trim();
  if(name && !playlists[name]){
    playlists[name] = [];
     const newPlaylist = document.createElement('li');
     newPlaylist.textContent= name;
      newPlaylist.classList.add('dm-li');
      allPlaylists.appendChild(newPlaylist);
      // createPlaylist.value = '';
      newPlaylist.addEventListener('click', () =>{
        selectedPlaylist = name;
        document.querySelectorAll('#allPlaylists .dm-li').forEach(li => li.classList.remove('active'));
        newPlaylist.classList.add('active');
        renderCurrentPlaylist();
      })
  }
})
}
addPlaylist();
function renderCurrentPlaylist() {
  currentPlaylist.innerHTML = '';
  if (selectedPlaylist) {
    playlists[selectedPlaylist].forEach(song => {
      const li = document.createElement('li');
      li.textContent = `${song.name} - ${song.artist}`;
      li.classList.add('dm-li');
      currentPlaylist.appendChild(li);
      li.addEventListener('click',() => {
        renderSongCard(song);
      })
    });
  }
}
function addSongsToPlaylist() {
  playlistBtn.addEventListener('click', () => {
    if (!selectedPlaylist) {
      alert("Please select a playlist first.");
      return;
    }
    const currentSong = currentSongArray[currentIndex];

    const playlist = playlists[selectedPlaylist];
    const alreadyExists = playlist.some(song => song.name === currentSong.name && song.artist === currentSong.artist);

    if (!alreadyExists) {
      playlist.push(currentSong);
      renderCurrentPlaylist();
    } else {
      alert("Song already in playlist!");
    }
  });
}
addSongsToPlaylist();


const themeToggle = document.getElementById('themeToggle');
const toggleText = document.querySelector('.toggle-text');


themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  toggleText.textContent = themeToggle.checked ? 'Dark Mode' : 'Light Mode';
});
