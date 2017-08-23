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

var counter = 0 ;
var button = document.getElementById('Visitor');
button.onclick = function(){
    //cretae the request object
    var request =new XMLHttpRequest();
    //capture the response 
    request.onreadystatechange = function(){
        if (request.readyState == XMLHttpRequest.DONE){
            if (request.status == 200 ){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML =counter.toString();
            }
        }
        //not done yet
    };
    //make the request
    request.open('GET', 'http://shankarvikraman.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit');
submit.onclick = function(){
    //make a request to server and send the name
    //capture name as lsit and render
    var names = ['name1','name2','name3'];
    var list = '';
    for(var i=0; i<names.length ; i++){
        list = '<li>' + names[i]  +'</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
};