body = document.getElementsByTagName("body")[0];

w = Number(window.innerWidth);

document.addEventListener("click", function(){
    alert(w)
    window.body.style.backgroundColor = "red";
});