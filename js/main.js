// animation event
let eventBox = document.querySelector("body");
let animate = document.querySelector('.animate');

// follow cursor event listener
eventBox.addEventListener("tiltChange", function (event) {
  eventBox.style.transform = '';
  // console.log(event);
  animate.style.transform = 'perspective(500px) rotateX(' + event.detail.tiltY + 'deg) rotateY('+  event.detail.tiltX +'deg) scale3d(1, 1, 1)';
});

// music event
let trackDiv = document.querySelector('.track');
let playButton = trackDiv.querySelector('.track__play');

// array of songs
let songs = [
  {
    'artist': 'Travis Scott - <span class="block">(feat. Lil Uzi Vert &amp; Kanye West)</span>',
    'title': 'Watch',
    'image': 'img/img-sm.jpg',
    'imageAlt': 'Picture of watch album cover',
    'src': 'music/Travis_Scott-Watch_ft_Kanye_West_Lil_Uzi_Vert.mp3'
  }
]

// playlist
let tracks = [];
let activeTrack = 0;

// create audo object for each song and push it into tracks
songs.forEach(function (song) {
  let newTrack = new Audio();
  newTrack.src = song.src;
  newTrack.load();

  // check if track ended to play next song
  newTrack.addEventListener('ended', function () {
    console.log(activeTrack, songs.length - 1);
    if (activeTrack < songs.length - 1) {
      activeTrack++;
    } else {
      activeTrack = 0;
    }
    // switch title and img (if there where more than 1 track)
    // trackDiv.querySelector('.title__title').textContent = songs[activeTrack].title;
    // trackDiv.querySelector('.title__artist').innerHTML = songs[activeTrack].artist;
    // trackDiv.querySelector('.cover__img').src = songs[activeTrack].image;
    // trackDiv.querySelector('.cover__img').alt = songs[activeTrack].imageAlt;
    tracks[activeTrack].play();
  });
  tracks.push(newTrack);
});

// pause and play event listener
playButton.addEventListener('click', function () {
  if (tracks[activeTrack].paused) {
    playButton.textContent = '||';
    tracks[activeTrack].play();
  } else {
    playButton.textContent = '>';
    tracks[activeTrack].pause();
  }
});
