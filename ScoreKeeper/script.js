var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameLength = document.querySelector("#gameLength");
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var game = true;
var maxScore = 5;

function reset () {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	game=true;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
};

gameLength.addEventListener("change",function(){
	reset();
	maxScore=Number(gameLength.value);
	console.log(maxScore);
});

p1Button.addEventListener("click",function(){
	if(game) {
		p1Score++;
		p1Display.textContent = p1Score;
		if(p1Score===maxScore){
			p1Display.classList.add("winner");
			game = false;
		}
	}
});

p2Button.addEventListener("click",function(){
	if(game) {
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score===maxScore){
			p2Display.classList.add("winner");
			game = false;
		}
	}
});

resetButton.addEventListener("click",reset);