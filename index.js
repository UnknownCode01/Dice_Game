//  Here image source is Dynamic
var r1 = Math.floor(Math.random()*6+1);         //r1->random image 1
var is1 = "images/dice"+r1+".png";              //is1->image source 1
document.querySelectorAll("img")[0].setAttribute("src",is1);

var r2 = Math.floor(Math.random()*6+1);         //r2->random image 2
var is2 = "images/dice"+r2+".png";              //is2->image source 2
document.querySelectorAll("img")[1].setAttribute("src",is2);

if(r1>r2){
    document.querySelector("h1").innerHTML = "🚩Player1 won";
}
else if(r1<r2){
    document.querySelector("h1").innerHTML = "Player 2won🚩";
}
else{
        document.querySelector("h1").innerHTML = "Draw";
}