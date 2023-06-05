// const options = {
//         id: 59777392,
//         width: 640,
//         loop: true
//     };
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const player = new Player(document.getElementById('vimeo-player'));
    const currentTimeKey = 'videoplayer-current-time';
    
    player.setVolume(0);

    player.on('timeupdate', throttle(() => {
  player.getCurrentTime().then(time => {
    localStorage.setItem(currentTimeKey, time);
  });
}, 1000));

const savedTime = localStorage.getItem(currentTimeKey);

if (savedTime) {
  player.setCurrentTime(savedTime);
}

