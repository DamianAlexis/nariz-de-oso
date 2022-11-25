noseX=0;
noseY=0;

function preload() {
 clown_nose =  loadImage('https://i.postimg.cc/RCLwvPPB/nariz-oso.webp')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNET = ml5.poseNet(video, modelLoaded);
    poseNET.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 50, 50);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet está inicializando');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -25;
        noseY = results[0].pose.nose.y -15;
        console.log("nariz x = " + noseX);
        console.log("nariz y = " + noseY);

    }
}