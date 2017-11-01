body = document.getElementsByTagName("body")[0];

w = Number(window.innerWidth);

document.addEventListener("click", function(){
    if(event.screenX > w/2){
        body.style.backgroundColor = "peachpuff";
    }else{
        body.style.backgroundColor = "mediumaquamarine";
    }
});