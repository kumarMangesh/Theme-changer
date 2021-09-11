let darkbutton=document.getElementById('Dark-button');
let lightbutton=document.getElementById('Light-button');

document.body.style.backgroundColor=localStorage.getItem("backgroundColor");
document.body.style.color=localStorage.getItem("Color");

//--------------DARK BUTTON--------------------//
darkbutton.addEventListener('click',()=>{
    
//    var body=document.getElementById('body');
//    var color=body.classList;
//    color.toggle('changecolor');
localStorage.removeItem('backgroundColor')
   var bgcolordark = document.styleSheets[0].cssRules[4].style;
   var bgvaluedark = bgcolordark.getPropertyValue('background-color');
   document.body.style.backgroundColor=bgvaluedark;
console.log("the background color is "+bgvaluedark)

var fontcolor = document.styleSheets[0].cssRules[4].style;
var fvalue = fontcolor.getPropertyValue('color');
document.body.style.color=fvalue;
console.log("the fontcolor is "+fvalue)
   
//    var jsoncolor=JSON.stringify(color)
//    console.log(jsoncolor)
// var attribute=document.getElementById('body').getAttributeNode('background-color').value;
// console.log(attribute);
localStorage.setItem("backgroundColor", bgvaluedark);
localStorage.setItem("Color",fvalue)
})


//-----------------LIGHT BUTTON---------------------//
lightbutton.addEventListener('click',()=>{
   localStorage.removeItem('backgroundColor')

    var bgcolorlight = document.styleSheets[0].cssRules[5].style;
    var bgvaluelight = bgcolorlight.getPropertyValue('background-color');
    document.body.style.backgroundColor=bgvaluelight;
 console.log("the background color is "+bgvaluelight)
 
 var fontcolor = document.styleSheets[0].cssRules[5].style;
 var fvalue = fontcolor.getPropertyValue('color');
 document.body.style.color=fvalue;
 console.log("the fontcolor is "+fvalue)

 localStorage.setItem("backgroundColor", bgvaluelight);
localStorage.setItem("Color",fvalue)
})


