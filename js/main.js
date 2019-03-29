'use strict';

const video = document.querySelector('video');
var videoFilter;

// Add button click actions.
document.getElementById('blue').addEventListener('click', setBlueFilter);
document.getElementById('clear').addEventListener('click', setClearFilter);

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

// Take a snap of your webcam. Uncomment the lines below for Task 2.
/*
var photo = document.getElementById('photo');
var photoContext = photo.getContext('2d');
document.getElementById('snap').addEventListener('click', snapPhoto);
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
navigator.mediaDevices.getUserMedia({ video: true })
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
