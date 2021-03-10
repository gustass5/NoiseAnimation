let _balls: Ball[] = [];
const ballCount = 25;

let myFont: any;
function preload() {
	myFont = loadFont('assets/inconsolata.ttf');
}

function setup() {
	const colorPallete: p5.Color[] = [
		color(102, 255, 0),
		color(25, 116, 210),
		color(8, 232, 222),
		color(255, 240, 0),
		color(255, 170, 29),
		color(255, 0, 127)
	];
	createCanvas(windowWidth - 25, windowHeight - 25);
	textFont(myFont);
	noStroke();
	for (let i = 0; i < ballCount; i++) {
		const colorIndex = Math.floor(random(0, colorPallete.length));
		const ball = new Ball(colorPallete[colorIndex], Math.floor(random(70, 90)));
		_balls = [..._balls, ball];
	}
}

function draw() {
	_balls.forEach(ball => {
		ball.update();
		ball.draw();
	});
	drawText();
}

function drawText() {
	textSize(180);
	fill(255);
	textStyle(BOLD);
	textAlign(CENTER, CENTER);
	text('Innovation Lab', width / 2, height / 2);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
