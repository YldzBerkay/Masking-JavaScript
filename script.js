const video = document.getElementById('my-video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
video.loop=true;

video.addEventListener('loadedmetadata', function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
});

function draw() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvas.width, 0);
  ctx.lineTo(canvas.width, canvas.height - 100);
  ctx.lineTo(0, canvas.height - 50);
  ctx.closePath();
  ctx.fill();

  requestAnimationFrame(draw);
}

video.play();
draw();
