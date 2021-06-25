var  backgroundImg;
var bg;
var time = 0;

function preload() {
getBackground();
}

function setup() {
  createCanvas(1534, 705);
}

function draw() {
  if(backgroundImg){
    background(backgroundImg)
}
   function time(){
        if(this.time<0 && this.time>-1005){
          score ++ 
          fill("blue")
          textSize(20);
          text ("time : " + time, 990,40)
        
        }
}
}
async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJson = await response.json()
  var dateTime = responseJson.datetime;
  var hour = dateTime.slice(11,13);
  if (hour>00 && hour<08){
      bg = "snow2.jpg"
  } else if (hour>08 && hour<16) {
      bg  = "snow1.jpg"
  }else if (hour>16 && hour<24) {
      bg = "snow3.jpg"
  } 


  backgroundImg= loadImage(bg);
            

}
