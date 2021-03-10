var Ball = /** @class */ (function () {
    function Ball(shapeColor, radius, velocity, position) {
        if (shapeColor === void 0) { shapeColor = color(Math.floor(random(90, 255)), Math.floor(random(90, 255)), Math.floor(random(90, 255))); }
        if (radius === void 0) { radius = Math.floor(random(50, 80)); }
        if (velocity === void 0) { velocity = { x: Math.floor(random(3, 6)), y: Math.floor(random(3, 6)) }; }
        if (position === void 0) { position = {
            x: Math.floor(random(40, width)),
            y: Math.floor(random(0, height))
        }; }
        this._radius = radius;
        this._position = position;
        this._velocity = velocity;
        this._color = shapeColor;
    }
    Ball.prototype.draw = function () {
        noStroke();
        fill(this._color);
        ellipse(this._position.x, this._position.y, this._radius, this._radius);
    };
    Ball.prototype.update = function () {
        this._position = {
            x: this._position.x + this._velocity.x,
            y: this._position.y + this._velocity.y
        };
        if (this._position.x < 0 || this._position.x > width) {
            this._velocity = { x: this._velocity.x * -1, y: this._velocity.y };
        }
        if (this._position.y < 0 || this._position.y > height) {
            this._velocity = { x: this._velocity.x, y: this._velocity.y * -1 };
        }
    };
    return Ball;
}());
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _balls = [];
var ballCount = 25;
var myFont;
function preload() {
    myFont = loadFont('assets/inconsolata.ttf');
}
function setup() {
    var colorPallete = [
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
    for (var i = 0; i < ballCount; i++) {
        var colorIndex = Math.floor(random(0, colorPallete.length));
        var ball = new Ball(colorPallete[colorIndex], Math.floor(random(70, 90)));
        _balls = __spreadArrays(_balls, [ball]);
    }
}
function draw() {
    _balls.forEach(function (ball) {
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
