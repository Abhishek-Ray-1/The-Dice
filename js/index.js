let randomNumber1 = Math.floor(Math.random()*6) + 1;
let newsrc1 = "img/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src" , newsrc1);

let randomNumber2 = Math.floor(Math.random()*6) + 1;
let newsrc2 = "img/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src" , newsrc2);

let newHead = document.getElementById("header");

if(randomNumber1 > randomNumber2)
{
    newHead.innerHTML = "Player 1 wins 🚩";
}
else if(randomNumber2 > randomNumber1)
{
    newHead.innerHTML = "Player 2 wins 🚩";
}
else
{
    newHead.innerHTML = "Draw!";
}

//console.log(document.querySelector(".img1"));