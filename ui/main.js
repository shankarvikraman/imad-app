console.log('Loaded!');
//to move the madi
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft =marginLeft +"px";
     if (marginLeft == 100)
       marginLeft = 0;
};
img.onload = function(){
    var interval=setInterval(moveRight,50);
};