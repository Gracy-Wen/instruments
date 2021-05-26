// 7 + 7 (upper layer), 14 (lower layer) a big rectangle with two layers

document.addEventListener("keydown", playSounds)

function playSounds(event) {

    // show what key was pressed
    console.log(event.key)
                         // console log = write something for that console
    // if a is pressed, play sound

    //paino buttons
    if (event.key==="~"){
        console.log ("the user pressed ~");
        p1.play()
        
    }
    if (event.key==="1"){
        console.log ("the user pressed 1");
        p2.play()
    }
    if (event.key==="2"){
        console.log ("the user pressed 2");
        p3.play()
    }
    if (event.key==="3"){
        console.log ("the user pressed 3");
        p4.play()
    }
    if (event.key ==="4") {
        console.log("the user pressed 4");
        p5.play()
    }
    if (event.key==="5"){
        console.log ("the user pressed 5");
        p6.play()
    }
    if (event.key==="6"){
        console.log ("the user pressed 6");
        p7.play()
    }
    if (event.key==="7"){
        console.log ("the user pressed 7");
        p8.play()
    }
    if (event.key==="8"){
        console.log ("the user pressed 8");
        p9.play()
    }
    if (event.key === '9') {
        console.log("the user pressed 9");
        p10.play()
    }
    if (event.key==="0"){
        console.log ("the user pressed 0");
        p11.play()
    }
    if (event.key==="-"){
        console.log ("the user pressed -");
        p12.play()
    }
    if (event.key==="="){
        console.log ("the user pressed =");
        p13.play()
    }

    // guitar buttons
    if (event.key==="q"){
        console.log ("the user pressed q");
        g1.play()
    }
    if (event.key==="w"){
        console.log ("the user pressed w");
        g2.play()
    }
    if (event.key==="e"){
        console.log ("the user pressed e");
        g3.play()
    }
    if (event.key==="r"){
        console.log ("the user pressed r");
        g4.play()
    }
    if (event.key ==="t") {
        console.log("the user pressed t");
        g5.play()
    }
    if (event.key==="y"){
        console.log ("the user pressed y");
        g6.play()
    }

    // drum buttons
    if (event.key==="a"){
        console.log ("the user pressed a");
        d1.play()
    }
    if (event.key==="s"){
        console.log ("the user pressed s");
        d2.play()
    }
    if (event.key==="d"){
        console.log ("the user pressed d");
        d3.play()
    }
    if (event.key==="f"){
        console.log ("the user pressed f");
        d4.play()
    }
    if (event.key ==="g") {
        console.log("the user pressed g");
        d5.play()
    }
    if (event.key==="h"){
        console.log ("the user pressed h");
        d6.play()
    }
    if (event.key==="j"){
        console.log ("the user pressed j");
        d7.play()
    }

}
//there's seven
   var d1 = new Audio ("drums/drum1.mp3")
   var d2 = new Audio ("drums/drum2.mp3")
   var d3 = new Audio ("drums/drum3.mp3")
   var d4 = new Audio ("drums/drum4.mp3")
   var d5 = new Audio ("drums/drum5.mp3")
   var d6 = new Audio ("drums/drum6.mp3")
   var d7 = new Audio ("drums/drum7.mp3")


//there;s six
   var g1 = new Audio ("guitar/guitar1.mp3")
   var g2 = new Audio ("guitar/guitar2.wav")
   var g3 = new Audio ("guitar/guitar3.wav")
   var g4 = new Audio ("guitar/guitar4.wav")
   var g5 = new Audio ("guitar/guitar5.mp3")
   var g6 = new Audio ("guitar/guitar6.wav")
  

//there's' thirteen
var p1 = new Audio ("piano/p1.mp3")
var p2 = new Audio ("piano/p2.mp3")
var p3 = new Audio ("piano/p3/mp3")
var p4 = new Audio ("piano/p4.mp3")
var p5 = new Audio ("piano/p5/mp3")
var p6 = new Audio ("piano/p6.mp3")
var p7 = new Audio ("piano/p7.mp3")
var p8 = new Audio ("piano/p8.mp3")
var p9 = new Audio ("piano/p9.mp3")
var p10 = new Audio ("piano/p10.mp3")
var p11 = new Audio ("piano/p11.mp3")
var p12 = new Audio ("piano/p12.mp3")
var p13 = new Audio ("piano/p13.mp3")

