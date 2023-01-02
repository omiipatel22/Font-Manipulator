function setup() {
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.posenet(video, modelLoaded);
}

function modelLoaded() {
    console.log('PoseNet Is Initizalied!');
}

function draw() {
    background('#969A97');
}

function textSize() {
   fill();
}

