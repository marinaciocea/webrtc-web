'use strict';

// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
  video: true,
};

// Video element where stream will be placed.
const video = document.querySelector('video');
var photo = document.getElementById('photo');
var photoContext = photo.getContext('2d');
var snapBtn = document.getElementById('snap');

var videoFilter;

// Attach event handlers
document.getElementById('blue').addEventListener('click', setBlueFilter);
document.getElementById('clear').addEventListener('click', setClearFilter);

// snapBtn.addEventListener('click', snapPhoto);

function setVideoFilter(filter) {
    videoFilter = filter;
    document.getElementById('camera').style.filter = filter;
}

function setBlueFilter() {
    setVideoFilter('hue-rotate(180deg)  saturate(200%)');
}

function setClearFilter() {
    setVideoFilter('');
}

/*
// Capture current snapshot of video stream and display into photo
function snapPhoto() {
    photoContext.drawImage(video, 0, 0, photo.width, photo.height);
    document.getElementById('photo').style.filter = videoFilter;
}
*/

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  video.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
