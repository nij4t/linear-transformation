const plot: HTMLCanvasElement = document.querySelector("#plot");
const ctx = plot.getContext("2d");

const w = innerWidth;
const h = innerHeight;

plot.width = w;
plot.height = h;

// ctx.fillStyle = 'black'
// ctx.fillRect(0, 0, w, h)

ctx.fillStyle = "red";
ctx.lineWidth = 1;

for (let i = 0; i < w; i += 20)
  for (let j = 0; j < h; j += 20) {
    drawPoint(i, 1.3*j);
  }

// drawVector(-1, 2);

function drawPoint(i: number, j: number) {
  const cx = w / 2;
  const cy = h / 2;
  ctx.beginPath();
  ctx.arc((cx + i), (cy - j), 5, 5, 2 * Math.PI);
  ctx.fill();
}

function drawVector(i: number, j: number, scale?: number) {
  const cx = w / 2;
  const cy = h / 2;
  if (!Number(scale)) scale = 1.25;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo((cx + i) * scale, (cy - j) * scale);
  ctx.stroke();
}
