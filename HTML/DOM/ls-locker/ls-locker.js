var input = document.querySelector("textarea")

input.addEventListener("input", function(){
    window.localStorage.setItem("i", input.value)
});

input.value = window.localStorage.getItem("i")