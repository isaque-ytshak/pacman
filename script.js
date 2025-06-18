const pacman = document.getElementById("pacman");
let x = 0;
let y = 0;
const speed = 10;
const gameSize = 460;

document.addEventListener("keydown", (e) => {
switch (e.key) {
case "ArrowUp":
if (y > 0) y -= speed;
pacman.style.transform = "rotate(-90deg)";
break;
case "ArrowDown":
if (y < gameSize) y += speed;
pacman.style.transform = "rotate(90deg)";
break;
case "ArrowLeft":
if (x > 0) x -= speed;
pacman.style.transform = "rotate(180deg)";
break;
case "ArrowRight":
if (x < gameSize) x += speed;
pacman.style.transform = "rotate(0deg)";
break;
}
pacman.style.left = x + "px";
pacman.style.top = y + "px";
});