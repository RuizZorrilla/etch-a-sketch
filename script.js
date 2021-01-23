let elements;
document.addEventListener("DOMContentLoaded", loaded)

 function loaded(){
    loadCanvas(25)

    document.getElementById("gridSize").addEventListener("change", 
    function(){
        let gridSize = document.getElementById("gridSize").valueAsNumber;loadCanvas(gridSize)
    ;})

 }

 function loadCanvas(gridSize){
    document.getElementById("currentGridSize").innerHTML= gridSize;
    drawCanvas(gridSize);
    elements = document.getElementsByClassName("pixel");

 }

 function drawCanvas(gridSize){
    let innHTML="";

    document.getElementById("canvas").innerHTML= innHTML;

    for(let i=0; i<gridSize; i++){
        innHTML = innHTML + "<div class='row'>"

        for(let j=0; j<gridSize; j++){

            innHTML = innHTML + "<div class='pixels'></div>"
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

