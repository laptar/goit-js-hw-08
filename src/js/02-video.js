import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframePl = document.querySelector('#vimeo-player');

let currentTime;
const player = new Player(iframePl);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
  console.dir(event.seconds);
  currentTime = event.seconds;
  localStorage.setItem('currentTime', currentTime);
}

const sec = localStorage.getItem('currentTime');

player.setCurrentTime(sec);
