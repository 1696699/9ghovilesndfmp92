img = ''
Status = "";
objects = [];

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', moddelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}
function moddelLoaded(){
    console.log("moddel has been loaded successfully!");
    Status = true;
    //objectDetective.detect(video, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        objects = results;
        console.log(results);
    }
}
function preload(){
    //img = loadImage("dog_cat.jpg");
}

function draw(){
    image(video, 0, 0, 380, 380);
    if(Status == true){
        objectDetector.detect(video, gotResults);
        r = random(255);
        b = random(255);
        g = random(255);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "status: object detected";
            if(objects[i].label == "person"){
                document.getElementById("ifBabyFound").innerHTML = "baby found!"
            }
            fill(r, g, b);
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    /*fill('orange');
    text("dog", 45, 55);
    noFill();
    stroke('orange')
    rect(50, 60, 450, 350);
    fill('blue');
    noStroke();
    text("cat", 300, 75);
    noFill();
    stroke("blue")
    rect(300, 80, 250, 305)*/


}
function start(){
    objectDetective = ml5.objectDetector('cocossd').moddelLoaded;
    document.getElementById("status").innerHTML = "status: detecting objects";
}