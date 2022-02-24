const container = document.querySelector(".container");

window.onmousemove = (e) => {
  console.log(e);
  let x = e.clientX / 5;
  let y = e.clientY / 5;
  container.style.backgroundPositionX = x + "px";
  container.style.backgroundPositionY = y + "px";
};
