# Spotify Clone - Music Player

A fully functional Spotify clone with music playback capabilities.

## Features
- Browse trending songs and popular artists
- Click to play music
- Auto-play next song when current song ends
- Visual notifications for playback
- Responsive design

## How to Add Music Files

To enable music playback, add your MP3 files to the `assets/songs/` folder with these names:
- `song1.mp3` - Tere Liye
- `song2.mp3` - NOBODY'S GIRL
- `song3.mp3` - Aawaara Angaara
- `song4.mp3` - Andaaz e Karam
- `song5.mp3` - Jeene Laga Hoon
- `song6.mp3` - Financer

Or you can edit `js/script1.js` to change the song names and audio file paths.

## How to Run

Open `index.html` in your browser, or run a local server:

```powershell
python -m http.server 8000
# Then open http://localhost:8000/index.html
```

## Usage
1. Open `index.html` in your browser
2. Click on any song card to play music
3. Music will auto-play to the next song when finished

## Files Structure
- `index.html` - Main page with song cards
- `js/script1.js` - Music player backend with audio controls
- `assets/songs/` - Place your MP3 files here
- `css/style1.css` - Styling

## Note
Make sure your audio files are in MP3 format for best browser compatibility.
