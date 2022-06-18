
img = "";
status = "";


function preload()
{
    img = loadImage('animalsjpg.jpg');
}

function setup() 
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function draw()
{
    image(img, 0, 0, 640, 420);
    
}

function modelLoaded()
{
    console.log("Model Loaded!");
    satus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}

function back()
{
    window.location = "index.html"
}