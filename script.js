document.addEventListener("mousemove", function(event) {
  const x = event.pageX;
  const y = event.pageY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const deltaX = centerX - x;
  const deltaY = centerY - y;
  const percentX = deltaX / centerX;
  const percentY = deltaY / centerY;
  const moveX = percentX * 20;
  const moveY = percentY * 20;
  document.body.style.backgroundPosition = moveX + "px " + moveY + "px";
});
