/* global document, window */

export default function (container) {
  const canvas = document.createElement('CANVAS');
  canvas.style = 'position: fixed; z-index: 1;';
  document.querySelector(container).prepend(canvas);

  let canW = parseInt(canvas.width, 10);
  let canH = parseInt(canvas.height, 10);
  const ctx = canvas.getContext('2d');

  const ballColor = { red: 207, green: 255, blue: 4 };
  const R = 2;
  let balls = [];
  const alphaF = 0.03;
  const linkLineWidth = 0.8;
  const distLimit = 260;
  let reqAnimationFrame;

  function randomNumFrom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomSpeed(pos) {
    const min = -1;
    const max = 1;
    switch (pos) {
      case 'top':
        return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
      case 'right':
        return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
      case 'bottom':
        return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
      case 'left':
        return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
      default:
        return undefined;
    }
  }

  function randomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomSidePos(length) {
    return Math.ceil(Math.random() * length);
  }

  function getRandomBall() {
    const pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
    switch (pos) {
      case 'top':
        return {
          x: randomSidePos(canW),
          y: -R,
          vx: getRandomSpeed('top')[0],
          vy: getRandomSpeed('top')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'right':
        return {
          x: canW + R,
          y: randomSidePos(canH),
          vx: getRandomSpeed('right')[0],
          vy: getRandomSpeed('right')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'bottom':
        return {
          x: randomSidePos(canW),
          y: canH + R,
          vx: getRandomSpeed('bottom')[0],
          vy: getRandomSpeed('bottom')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'left':
        return {
          x: -R,
          y: randomSidePos(canH),
          vx: getRandomSpeed('left')[0],
          vy: getRandomSpeed('left')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      default:
        return undefined;
    }
  }

  function renderBalls() {
    balls.forEach((ball) => {
      if (!Object.prototype.hasOwnProperty.call(ball, 'type')) {
        ctx.fillStyle = `rgba(${ballColor.red},${ballColor.green},${ballColor.blue},${ball.alpha})`;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, R, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }
    });
  }

  function updateBalls() {
    const newBalls = [];
    balls.forEach((ball) => {
      const b = ball;
      b.x += b.vx;
      b.y += b.vy;

      if (b.x > -(50) && b.x < (canW + 50) && b.y > -(50) && b.y < (canH + 50)) {
        newBalls.push(b);
      }

      b.phase += alphaF;
      b.alpha = Math.abs(Math.cos(b.phase));
    });

    balls = newBalls.slice(0);
  }

  function getDisOf(b1, b2) {
    const deltaX = Math.abs(b1.x - b2.x);
    const deltaY = Math.abs(b1.y - b2.y);

    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }

  function renderLines() {
    let fraction;
    let alpha;
    for (let i = 0; i < balls.length; i += 1) {
      for (let j = i + 1; j < balls.length; j += 1) {
        fraction = getDisOf(balls[i], balls[j]) / distLimit;

        if (fraction < 1) {
          alpha = (1 - fraction).toString();

          ctx.strokeStyle = `rgba(150,150,150,${alpha})`;
          ctx.lineWidth = linkLineWidth;

          ctx.beginPath();
          ctx.moveTo(balls[i].x, balls[i].y);
          ctx.lineTo(balls[j].x, balls[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }

  function addBallIfy() {
    if (balls.length < 20) {
      balls.push(getRandomBall());
    }
  }

  function render() {
    ctx.clearRect(0, 0, canW, canH);

    renderBalls();

    renderLines();

    updateBalls();

    addBallIfy();

    reqAnimationFrame = window.requestAnimationFrame(render);
  }

  function initBalls(num) {
    balls = [];

    for (let i = 1; i <= num; i += 1) {
      balls.push({
        x: randomSidePos(canW),
        y: randomSidePos(canH),
        vx: getRandomSpeed('top')[0],
        vy: getRandomSpeed('top')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      });
    }
  }

  function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canW = parseInt(canvas.width, 10);
    canH = parseInt(canvas.height, 10);
  }

  function goMovie() {
    initCanvas();

    initBalls(30);

    window.cancelAnimationFrame(reqAnimationFrame);

    reqAnimationFrame = window.requestAnimationFrame(render);
  }

  goMovie();

  window.addEventListener('resize', () => goMovie());
}
