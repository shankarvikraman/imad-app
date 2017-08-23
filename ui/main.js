console.log('Loaded!');
//to move the madi
var img = document.getElementById('madi1');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft =marginLeft +"px";
     if (marginLeft == 500)
       marginLeft = 0;
};
img.onload = function(){
    var interval=setInterval(moveRight,50);
};

var counter;
var button = document.getElementById('Visitor');
button.onclick = function(){
    //send the request
    //capture the response 
    //rendered the span
    counter = counter +1;
    var span = document.getElementByID('count');
    span.innerHTML =counter.toString();
};