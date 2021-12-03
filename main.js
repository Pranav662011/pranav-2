function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,500);
    canvas.position(500,150);


    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }

      
    
}

function modelLoaded(){
    console.log("Model is Loaded");

}


function draw(){
    background("#DB6769");
}