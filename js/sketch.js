function setup() {
    createCanvas(screen.width, 200);
}

function draw() {
    var xPositions = [20, screen.width/2, screen.width/3, screen.width/4, screen.width/5, screen.width/6, screen.width-10, screen.width-30, screen.width-50];
    var yPositions = [random(0, 200), random(0, 200), random(0, 200), random(0, 200), random(0, 200), random(0, 200), random(0, 200), random(0, 200), random(0, 200)];
    var r = [random(0, 255), random(0, 255), random(0, 255)];
    var g = [random(0, 255), random(0, 255), random(0, 255)];
    var b = [random(0, 255), random(0, 255), random(0, 255)];
    var ellipseSize = [10, 20, 15, 10, 20, 15, 30, 40, 45];

    draw = function() {
        
        background(255, 255, 255);
        fill(0, 0, 0);
        textSize(26);
        textStyle(ITALIC)
        textFont("Playfair Display");
        text("written in sublime text", 35, 120);
        text("hosted by github pages", 35, 150);

        for (var i = 0; i < xPositions.length; i++) {
            noStroke();
            fill(r[i], g[i], b[i], 100);
            ellipse(xPositions[i], yPositions[i], ellipseSize[i], ellipseSize[i]);
            yPositions[i] ++;

            if (yPositions[i] >= 202) {
                yPositions[i] = 0;
                r[i] = random(0, 255);
                g[i] = random(0, 255);
                b[i] = random(0, 255);
                ellipseSize[i] = random(0, 1) * 65;
            }
        }

    };
}

