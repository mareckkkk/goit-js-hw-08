import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';

timeToSet();

function updateTime({ seconds }) {
  localStorage.setItem(TIME_KEY, seconds);
}

function timeToSet() {
  const currentTime = localStorage.getItem(TIME_KEY);

  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}

player.on('timeupdate', throttle(updateTime, 1000));

