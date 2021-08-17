noseX=0;
noseY=0;
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotResults);
}
function preload(){
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);
}
function gotResults(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}
function take_snapshot(){
    save("My clown nose.png");
}