document.addEventListener("DOMContentLoaded",()=>{

  let table = document.getElementById('ping-pong-table')
  let ball = document.getElementById('ball')
  let paddle = document.getElementById('paddle')
  let ballx = 50;
  let bally = 50;

  let dx = 2;
  let dy = 2;

  ball.style.left = `${ballx}px`
  ball.style.top = `${bally}px`
  setInterval(function exec(){
    ballx += dx;
    bally += dy;

    ball.style.left = `${ballx}px`;
    ball.style.top = `${bally}px`;

    // if(ballx > 700-20 || ballx <= 0) dx *= -1;
    // if(ballx > 400-20 || ballx <= 0) dx *= -1;
      if(ballx < paddle.offsetLeft + paddle.offsetWidth && bally > paddle.offsetTop && bally - ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight){
        dx*=-1
      };
    // collision of ball and paddle
// Top & Bottom bounce
if (bally <= 0 || bally >= table.offsetHeight - ball.offsetHeight) {
  dy *= -1;
}

// Right wall bounce
if (ballx >= table.offsetWidth - ball.offsetWidth) {
  dx *= -1;
}

// LEFT SIDE → paddle check
if (ballx <= 0) {

  if (
    bally + ball.offsetHeight >= paddle.offsetTop &&
    bally <= paddle.offsetTop + paddle.offsetHeight
  ) {
    dx = Math.abs(dx); // bounce back
  } else {
    alert("Game Over!");
    clearInterval(this); // stop game
  }
}

  

  },10)

  let paddleY = 0;
  let dPy = 15;
  document.addEventListener("keydown",(event)=>{
    event.preventDefault()
    if(event.key == "ArrowUp" && paddleY > 0){
      // console.log("up");
      paddleY += (-1)*dPy;
    }else if(event.key == "ArrowDown" && paddleY < table.offsetHeight - paddle.offsetHeight){
      // console.log("down");
      paddleY += dPy;
      
    }
    paddle.style.top = `${paddleY}px`;

  })
})