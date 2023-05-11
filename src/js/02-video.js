import { throttle } from 'lodash';

import Player from '@vimeo/player';

// import Player from '@vimeo/player';

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const VIDEO_PLAYER_TIME = 'video-player-time';

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem(VIDEO_PLAYER_TIME, data.seconds);
  }, 1000));
  

const currentTime = localStorage.getItem(VIDEO_PLAYER_TIME);
if (currentTime !== null) {
  player.setCurrentTime(currentTime);
}


// const onPlay = function(data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// // If later on you decide that you don’t need to listen for play anymore.
// player.off('play', onPlay);

// // Alternatively, `off` can be called with just the event name to remove all
// // listeners.
// player.off('play');