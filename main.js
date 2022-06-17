status1 = ""

function preload(){
    img = loadImage("j.jfif")
}

function setup(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    canvas = createCanvas(350,350)
    canvas.center()

}

function draw(){
    image(img, 0,0, 350,350)
    fill("#ff00e6")
    text("Monitor", 90,50)
    noFill()
    stroke("white")
    rect(90,50,150,100)

    fill("#0059ff")
    text("Mouse", 200,180)
    noFill()
    stroke("white")
    rect(200,180,40,40)

    fill("#000000")
    text("Keyboard", 150,180)
    noFill()
    stroke("white")
    rect(150,180,70,50)
}


function modelLoaded(){
    console.log("Model Loaded!")
    status1 = true
    objectDetector.detect(img, gotResults)
}

function gotResults(error, results){
    if(error){
        console.error(error)

    }
    else{
        console.log(results)
    }

}
