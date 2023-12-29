function preload()
{
    
}

function setup()
{
    canvas = createCanvas(400, 400); 
    canvas.center(); 
    video = createCapture(VIDEO); 
    video.size(400, 400); 
    video.hide(); 

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses); 

}

function modelLoaded()
{
    console.log("Posenet is initalized");  
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results); 
        noseX = results[0].pose.nose.x; 
        noseY = results[0].pose.nose.y; 
        console.log("nose x = " + results[0].pose.nose.x); 
        console.log("nose y = " + results[0].pose.nose.y); 
    }

function draw()
{

}

function onclick()
{
    
}