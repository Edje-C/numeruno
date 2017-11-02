squares = document.querySelectorAll("div");

for(var i=0; i<squares.length; i++){
    squares[i].addEventListener("click", function(e){
        document.getElementById(this.id).classList.toggle("black")
    })
}