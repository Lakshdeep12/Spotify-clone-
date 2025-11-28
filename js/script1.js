// Music Player State
let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio();

// Song data with audio file paths
const trendingSongs = [
  {
    title: "Sandese Aate Hain",
    artist: "Sonu Nigam, Roop Kumar Rathod",
    image: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?w=300&h=300&fit=crop",
    audio: "assets/songs/Sandese Aate Hain Border 128 Kbps.mp3"
  },
  {
    title: "Tere Liye",
    artist: "Atif Aslam, Shreya Ghoshal",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    audio: "assets/songs/song1.mp3"
  },
  {
    title: "Tum Se",
    artist: "Sachin-Jigar, Varun Jain, Indraneel",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    audio: "assets/songs/Tum Se Teri Baaton Mein Aisa Uljha Jiya 128 Kbps.mp3"
  }
];

const popularArtists = [
  { name: "Arijit Singh", type: "Artist", image: "assets/img/img1.jpg" },
  { name: "Ed Sheeran", type: "Artist", image: "assets/img/img2.jpg" },
  { name: "Shreya Ghoshal", type: "Artist", image: "assets/img/img3.jpg" },
  { name: "Kishore Kumar", type: "Artist", image: "assets/img/img4.jpg" },
  { name: "Sonu Nigam", type: "Artist", image: "assets/img/img5.jpg" },
  { name: "A.R. Rahman", type: "Artist", image: "assets/img/img8.jpg" }
];

// Render trending songs
function renderTrendingSongs() {
  const container = document.getElementById("trendingSongs");
  container.innerHTML = trendingSongs
    .map((song, i) => `
      <div class="card" onclick="togglePlayPause(${i})">
        <img src="${song.image}" alt="${song.title}" class="card-image" onerror="this.onerror=null;this.src='https://via.placeholder.com/300?text=No+Image'">
        <div class="play-button">▶</div>
        <div class="card-title">${song.title}</div>
        <div class="card-artist">${song.artist}</div>
      </div>
    `)
    .join("");
}

// Toggle play/pause
function togglePlayPause(index) {
  if (currentSongIndex === index && isPlaying) {
    pauseSong();
  } else if (currentSongIndex === index && !isPlaying && audio.src) {
    resumeSong();
  } else {
    playSong(index);
  }
}

// Render popular artists
function renderPopularArtists() {
  const container = document.getElementById("popularArtists");
  container.innerHTML = popularArtists
    .map((artist, i) => `
      <div class="artist-card" onclick="viewArtist(${i})">
        <img src="${artist.image}" alt="${artist.name}" class="artist-image" onerror="this.onerror=null;this.src='https://via.placeholder.com/300?text=No+Image'">
        <div class="artist-name">${artist.name}</div>
        <div class="artist-type">${artist.type}</div>
      </div>
    `)
    .join("");
}

// Play song function
function playSong(index) {
  // If clicking the same song that's playing, toggle pause
  if (currentSongIndex === index && isPlaying) {
    pauseSong();
    return;
  }
  
  currentSongIndex = index;
  const song = trendingSongs[index];
  
  audio.src = song.audio;
  audio.play().then(() => {
    isPlaying = true;
    updatePlayerUI();
    updatePlayButtons();
    showNotification(`Now playing: ${song.title}`);
  }).catch(error => {
    console.error("Error playing audio:", error);
    showNotification(`Audio file not found. Please add ${song.audio}`);
  });
}

// Pause song function
function pauseSong() {
  audio.pause();
  isPlaying = false;
  updatePlayButtons();
  showNotification('Paused');
}

// Resume song function
function resumeSong() {
  audio.play().then(() => {
    isPlaying = true;
    updatePlayButtons();
    showNotification('Resumed');
  });
}

// Update play/pause buttons
function updatePlayButtons() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    const playButton = card.querySelector('.play-button');
    if (i === currentSongIndex && isPlaying) {
      playButton.textContent = '⏸';
    } else {
      playButton.textContent = '▶';
    }
  });
}

// View artist function
function viewArtist(index) {
  const artist = popularArtists[index];
  showNotification(`Viewing ${artist.name}'s profile`);
}

// Update player UI
function updatePlayerUI() {
  const song = trendingSongs[currentSongIndex];
  console.log(`Playing: ${song.title} by ${song.artist}`);
}

// Show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: #1db954;
    color: white;
    padding: 15px 30px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 500;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideUp 0.3s ease;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideDown 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Audio event listeners
audio.addEventListener('ended', () => {
  // Auto play next song
  if (currentSongIndex < trendingSongs.length - 1) {
    playSong(currentSongIndex + 1);
  } else {
    isPlaying = false;
    updatePlayButtons();
  }
});

audio.addEventListener('error', (e) => {
  console.error('Audio error:', e);
});

// Initialize
renderTrendingSongs();
renderPopularArtists();

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp {
    from { bottom: 50px; opacity: 0; }
    to { bottom: 100px; opacity: 1; }
  }
  @keyframes slideDown {
    from { bottom: 100px; opacity: 1; }
    to { bottom: 50px; opacity: 0; }
  }
`;
document.head.appendChild(style);
