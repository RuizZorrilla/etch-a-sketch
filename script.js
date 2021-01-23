let elements;
let currentColor = 'black';
document.addEventListener("DOMContentLoaded", loaded)

 function loaded(){
    loadCanvas(25)

    document.getElementById("gridSize").addEventListener("change", 
    function(){
        let gridSize = document.getElementById("gridSize").valueAsNumber;loadCanvas(gridSize)
    ;})

    document.getElementById("eraser").addEventListener("click",function(){ currentColor='white'});
    document.getElementById("pencil").addEventListener("click", function(){ currentColor='black'});
    document.getElementById("color").addEventListener("change", function(){ currentColor=document.getElementById("color").value});

 }

 function loadCanvas(gridSize){

    document.getElementById("currentGridSize").innerHTML= gridSize;

    drawCanvas(gridSize);
    
    elements = document.getElementsByClassName("pixels");

    console.log(elements.length)
    Array.from(elements).forEach(function(element) {
        element.addEventListener('pointerover', increaseColor);
      });

 }

 function increaseColor(){
    let attribute = this.getAttribute("id")
    document.getElementById(attribute).style.backgroundColor=currentColor;
}

 function drawCanvas(gridSize){
    let innHTML="";

    document.getElementById("canvas").innerHTML= innHTML;
    let id= 0;
    for(let i=0; i<gridSize; i++){
        innHTML = innHTML + "<div class='row'>"

        for(let j=0; j<gridSize; j++){

            innHTML = innHTML + "<div class='pixels' id='"+id+"'></div>"
            id++;
        }

        innHTML=innHTML+"</div>"
    }
    
    document.getElementById("canvas").innerHTML= innHTML;


    let style = document.createElement('style');
    let heightWidth = (600 - (gridSize*2))/gridSize;
    style.innerHTML = '.pixels {' +
        'height: '+heightWidth+'px;' +
        'width : '+heightWidth+'px' +
    '}';
    let ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);


 }

