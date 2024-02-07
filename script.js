let Game = document.getElementById("mgame");
let Score = document.getElementById('score');

let Block = document.getElementById('container-1')
var time = 40;
var x = setInterval(function () {
    document.getElementById("timer").innerHTML = "00:" + time;
    time = time - 1;
    if (document.querySelectorAll('.boxMatch').length != emojis.length) {
        Score.style.display = "none"
    }
    if (document.querySelectorAll('.boxMatch').length == emojis.length) {
        clearInterval(x);
        Block.style.top = "89.5%";
        Score.style.display = "block";
        Score.innerHTML = `Your Score 🤩: ${time * 100 + 100}`;
        Score.style.marginBottom = "12px";
    }
    if (time < 0) {
        alert("You Lose!!")
        Game.style.pointerEvents = "none";
        Block.style.top = "89.5%";
        Score.innerHTML = "Your Score 😩: 0"
        clearInterval(x);
        Score.style.display = "block"
    }
}, 1000);