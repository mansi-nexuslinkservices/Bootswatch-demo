const link = document.querySelector(".link");

function onMouseMove(event) {
  // get cursor coordinates to container (the link itself).
  const { x, y } = link.getBoundingClientRect();

  // get relative coordinates.
  const relativeX = event.clientX - x;
  const relativeY = event.clientY - y;

  // apply coordinates values to CSS variables.
  link.style.setProperty("--x-cursor-position", relativeX);
  link.style.setProperty("--y-cursor-position", relativeY);
}

link.addEventListener("mousemove", onMouseMove);
