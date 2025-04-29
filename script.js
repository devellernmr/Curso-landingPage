const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
const dpr = window.devicePixelRatio || 1;
let W, H;

function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  ctx.scale(dpr, dpr);
}
window.addEventListener('resize', resize);
resize();

// Camadas de ondas: amplitude, comprimento, velocidade, fase, cor
const waves = [
  {amp:30, len:0.009, speed:0.025, phase:0, color:'#5fcfff'},
  {amp:60, len:0.006, speed:0.018, phase:100, color:'#3bb0ff'},
  {amp:90, len:0.005, speed:0.012, phase:200, color:'#2090ff'},
  {amp:120,len:0.004, speed:0.008, phase:300, color:'#0070ff'},
  {amp:150,len:0.003, speed:0.005, phase:400, color:'#0050bb'},
  {amp:180,len:0.0025,speed:0.003, phase:500, color:'#003077'}
];

let t = 0;
function draw() {
  // background radial gradient
  const bg = ctx.createRadialGradient(-W*0.3, -H*0.3, 50, W/2, H/2, Math.max(W,H));
  bg.addColorStop(0,'#00000a');
  bg.addColorStop(0.6,'#00122e');
  bg.addColorStop(1,'#010b17');
  ctx.fillStyle = bg;
  ctx.fillRect(0,0,W,H);

  // desenhar ondas
  waves.forEach(w=>{
    ctx.save();
    // caminho preenchido
    ctx.beginPath(); ctx.moveTo(0,H);
    for(let x=0;x<=W;x++){
      const y = H*0.7 + Math.sin(x*w.len + t*w.speed + w.phase)*w.amp;
      ctx.lineTo(x,y);
    }
    ctx.lineTo(W,H); ctx.closePath();
    // gradiente preenchimento
    const g = ctx.createLinearGradient(0,H*0.7-w.amp,0,H);
    g.addColorStop(0, w.color+'00');
    g.addColorStop(0.3, w.color+'30');
    g.addColorStop(0.6, w.color+'90');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g; ctx.fill();
    // traço neon
    ctx.strokeStyle = w.color; ctx.lineWidth=3;
    ctx.shadowColor = w.color; ctx.shadowBlur = 60;
    ctx.beginPath();
    for(let x=0;x<=W;x++){
      const y = H*0.7 + Math.sin(x*w.len + t*w.speed + w.phase)*w.amp;
      x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.stroke(); ctx.restore();
  });

  t++;
  requestAnimationFrame(draw);
}
draw();