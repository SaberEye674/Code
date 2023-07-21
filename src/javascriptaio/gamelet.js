const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
let topPosition = 0;
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 100;
  }
  if (e.code === "ArrowRight") {
    position = position + 100;
  }
  if (e.code === "ArrowUp") {
    topPosition = topPosition - 100;
  }
  if (e.code === "ArrowDown") {
    topPosition = topPosition + 100;
  }
  if (position < 0 || topPosition < 0) {
    position = 0;
    topPosition = 0;
  }

  refresh();
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = topPosition + "px";
}
