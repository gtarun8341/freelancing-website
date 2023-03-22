// JavaScript
const input1 = document.getElementById('input-1');
const eyes = document.getElementById('eyes');

input1.addEventListener('input', () => {
  const inputRect = input1.getBoundingClientRect();
  const eyesRect = eyes.getBoundingClientRect();
  const eyesCenterX = eyesRect.left + eyesRect.width / 2;
  const eyesCenterY = eyesRect.top + eyesRect.height / 2;
  const inputCenterX = inputRect.left + inputRect.width / 2;
  const inputCenterY = inputRect.top + inputRect.height / 2;
  const deltaX = inputCenterX - eyesCenterX;
  const deltaY = inputCenterY - eyesCenterY;
  const angle = Math.atan2(deltaY, deltaX);
  const angleDegrees = angle * 180 / Math.PI;
  eyes.style.transform = `rotate(${angleDegrees}deg)`;
});
