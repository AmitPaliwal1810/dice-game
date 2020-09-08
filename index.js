
var randomNumber1 = Math.floor (Math.random()*6 ) + 1 ; // 1-6 random number

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png to dic6.png

var randomImageSource = "images/"+ randomDiceImage;// image/dice1.png - image/dice2.png

var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src",randomImageSource);   

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1]. setAttribute("src",randomImageSource2);

if ( randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "🏆Player_1 WINS!🚩";
    document.querySelector("h1").style.fontSize="5rem";
}

else if(randomNumber1 == randomNumber2){

    document.querySelector("h1").innerHTML="DRAW!";
    document.querySelector("h1").style.fontSize="7rem";
    document.querySelector("h1").style.color="red";
    document.querySelector("body").style.backgroundColor="#2f2519";
}
else{

    document.querySelector("h1").innerHTML="🏆Player_2 WINS!🚩";
    document.querySelector("h1").style.fontSize="5rem";
}