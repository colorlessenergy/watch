let eventBox = document.querySelector("body");
let animate = document.querySelector('.animate');

eventBox.addEventListener("tiltChange", function (event) {
  eventBox.style.transform = '';
  console.log(event);
  animate.style.transform = 'perspective(500px) rotateX(' +event.detail.tiltY + 'deg) rotateY('+  event.detail.tiltX +'deg) scale3d(1, 1, 1)'
});
