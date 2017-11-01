input = document.getElementById("text");
document.getElementById("button").addEventListener("click", function(e){
    document.getElementsByTagName("p")[0].innerText = input.value.split("").reverse().join("");
    input.value = "";
    e.preventDefault();
});