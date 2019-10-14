let pi = 4;
let iterations = 0; //Ismetles
let history = [];
let div;

let minY = 2;
let maxY = 4;

function setup() {
    createCanvas(1000, 600);
    div = createDiv('').style('font-size', '64pt');
}

function draw() {
    background(0);
    let den = iterations * 2 + 3;
    if (iterations % 2 == 0) {
        pi -= (4 / den);
    } else {
        pi += (4 / den);
    }
    history.push(pi);

    textSize(18);
    text('Value of Pi', 910, 250);
    stroke(0, 255, 255);
    strokeWeight(2);
    fill(255, 255, 255);
    let piY = map(PI, minY, maxY, height, 0);
    line(0, piY, width, piY);

    stroke(255);
    noFill();
    beginShape();
    let spacing = width / history.length;
    for (let i = 0; i < history.length; i++) {
        let x = i * spacing;
        let y = map(history[i], minY, maxY, height, 0);
        vertex(x, y);
    }
    endShape();
    div.html(pi);
    iterations++;
}