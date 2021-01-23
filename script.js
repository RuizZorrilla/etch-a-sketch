document.addEventListener("DOMContentLoaded", loaded)

 function loaded(){
    loadCanvas(50)
 }

 function loadCanvas(gridSize){
    drawCanvas(gridSize)
 }

 function drawCanvas(gridSize){
    let innHTML="";



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

