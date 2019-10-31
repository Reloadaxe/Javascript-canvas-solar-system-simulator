class Planet {
    constructor(distance, radius, color, speed = null, turnAround = null) {
        this.turnAround = turnAround;
        this.distance = distance;
        this.radius = radius;
        this.color = color;
        this.angle = 0;
        this.speed = (Math.PI * 2) / (ratioDaysSec * speed) * (intervalNb / 1000);

        if (turnAround != null)
            this.pos = {"x": turnAround.pos.x + distance, "y": turnAround.pos.y};
        else
            this.pos = {"x": canvas.width / 2, "y": canvas.height / 2};
    }

    draw = () => {
        context.fillStyle = this.color;
        if (this.turnAround != null) {
            context.strokeStyle = "white";
            context.beginPath();
            context.arc(this.turnAround.pos.x, this.turnAround.pos.y, this.distance, 0, Math.PI * 2);
            context.closePath();
            context.stroke();
        }
        context.beginPath();
        context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }

    update = () => {
        if (this.turnAround != null) {
            this.angle += this.speed;
            this.pos.x = this.turnAround.pos.x + this.distance * Math.cos(this.angle);
            this.pos.y = this.turnAround.pos.y + this.distance * Math.sin(this.angle);
        }
    }
}