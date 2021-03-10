interface ICoordinates {
	x: number;
	y: number;
}

class Ball {
	private _radius: number;
	private _position: ICoordinates;
	private _velocity: ICoordinates;
	private _color: p5.Color;

	public constructor(
		shapeColor = color(
			Math.floor(random(90, 255)),
			Math.floor(random(90, 255)),
			Math.floor(random(90, 255))
		),
		radius = Math.floor(random(50, 80)),
		velocity = { x: Math.floor(random(3, 6)), y: Math.floor(random(3, 6)) },
		position = {
			x: Math.floor(random(40, width)),
			y: Math.floor(random(0, height))
		}
	) {
		this._radius = radius;
		this._position = position;
		this._velocity = velocity;
		this._color = shapeColor;
	}

	public draw(): void {
		noStroke();
		fill(this._color);
		ellipse(this._position.x, this._position.y, this._radius, this._radius);
	}

	public update(): void {
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
	}
}
