noseX = 0;
noseY = 0;

function preload(){
    bigode = loadImage("https://i.postimg.cc/QtxrcWz4/bigode-png-vector-1.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet está inicializado');
}

function gotPoses(results){
    console.log(results);
    noseX = results[0].pose.nose.x-10;
    noseY = results[0].pose.nose.y;
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(bigode, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('meuFiltro.png');
}