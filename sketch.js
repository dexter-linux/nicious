let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    clear();
    for (let p of particles) {
        p.update();
        p.show();
    }
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(2, 6);
        this.speedY = random(0.5, 1.5);
        this.opacity = random(100, 200);
    }

    update() {
        this.y += this.speedY;
        if (this.y > height) {
            this.y = -10;
            this.x = random(width);
        }
    }

    show() {
        noStroke();
        fill(224, 170, 255, this.opacity); // Glow purple color
        ellipse(this.x, this.y, this.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}