/* cieultah.js */

function openLetter() {
    document.querySelector('.message-box-1').style.webkitAnimationPlayState = 'running';
    document.querySelector('.arrow-down-closed').style.visibility = 'hidden';
    document.querySelector('.arrow-up-open').style.visibility = 'visible';
    document.querySelector('.media-btn').style.visibility = 'visible';
    document.getElementById('audio').play();
}

let isPlaying = true;
function mediaBtn() {
    const audio = document.getElementById('audio');
    const icon = document.getElementById('media-button');

    if (isPlaying) {
        audio.pause();
        icon.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        icon.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

function swap1() {
    document.querySelector('.message-box-1').style.zIndex = "50";
    document.querySelector('.message-box-2').style.zIndex = "10";
}

function swap2() {
    document.querySelector('.message-box-2').style.zIndex = "50";
    document.querySelector('.message-box-1').style.zIndex = "10";
}
