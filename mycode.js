simulateAction("init");

var pointsCount = getVariable("pointsCount");
document.write(pointsCount);

setInterval(() => {
    setVariable("pointsCount", getVariable("pointsCount") + 1);
}, 1000)

setTimeout(() => simulateAction("errorHappened"), 3500);

function handleClick() {
    updateVariable("pointsCount", v => v + 1);
}

subscribeVariable("pointsCount", (newValue) => pointsCount = newValue);

function setup() {
    createCanvas(720, 400);
}

function draw() {
    background(102);

    push();
    translate(width * 0.2, height * 0.5);
    rotate(frameCount / 200.0);
    star(0, 0, 5, 70, 3);
    pop();

    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 100, 40);
    pop();

    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, pointsCount);
    pop();
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}