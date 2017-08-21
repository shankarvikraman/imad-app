console.log('Loaded!');
//to move the madi
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft =marginLeft +"px";
    
};
img.onload = function(){
    var interval=setinterval(moveRight,10);
};