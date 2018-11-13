//Variables
var isHard = true;
var colors = [];
var num;
var pickedColor;
var clickedColor;
var squares = document.querySelectorAll(".square");
var response = document.querySelector("#response");
var h1 = document.querySelector("h1");
var displayColor = document.querySelector("#displayColor");
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
//Functions
function randbw (a,b) {
	value = Math.floor(Math.random() * (b - a + 1) + a );
	return value ;
};
function numGen () {
	if(isHard) {num=6;}
	else {num=3;}
};
function genRandColor () {
	r = randbw(0,255);
	g = randbw(0,255);
	b = randbw(0,255);
	var color = "rgb("+r+", "+g+", "+b+")";
	return color;
};
function genColorsArr () {
	for(var i=0 ; i<num ; i++) {
		colors.push(genRandColor());
	}
};
function assignColors () {
	for(var i=0 ; i<num ; i++) {
		squares[i].style.backgroundColor = colors[i]; 
	}
	for (var i=3; i<6; i++) {
		if(isHard) {
			squares[i].style.display = "block";		
		}
		else {
			squares[i].style.display = "none";
		}
	}
};
function pickColor () {
	pickedColor = colors[randbw(0,num-1)];	
};
function newGame () {
	colors = [];
	numGen();
	genColorsArr();
	assignColors();
	pickColor();
	displayColor.textContent = pickedColor;
	if(isHard) {
		hardButton.classList.add("selected");
	}
	else {
		easyButton.classList.add("selected");
	}
};
function reset () {
	newGame();
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	response.textContent = "" ;
};
function gameWon () {
	response.textContent = "Well Done";
	h1.style.backgroundColor = pickedColor;
	resetButton.textContent = "Another Game";	
	for (var j=0; j< num; j++) {
		squares[j].style.backgroundColor = pickedColor;
	}
};
function gameLost (thisbox) {
	response.textContent = "Try Again";
	thisbox.style.backgroundColor = "#232323";
};
function toggleButton () {
	isHard = !isHard;
	easyButton.classList.toggle("selected");
	hardButton.classList.toggle("selected");
	reset();
};
//Game Starts
newGame();
// Clicking The Boxes

for(var k=0; k<num; k++){
	squares[k].addEventListener("click",function (){
		clickedColor = this.style.backgroundColor;
		if (clickedColor===pickedColor){		
			gameWon();
		}
		else {
			gameLost(this);
		};		
	});
}
//Buttons
easyButton.addEventListener("click",function () {
	if(isHard) {
		toggleButton();
	}
});
hardButton.addEventListener("click",function () {
	if(!isHard) {
		toggleButton();		
	}
});
resetButton.addEventListener("click",reset);
