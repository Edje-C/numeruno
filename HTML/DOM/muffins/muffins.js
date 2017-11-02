h1 = document.querySelector("h1")

document.getElementById("eat").addEventListener("click", function(){
    h1.innerText = h1.innerText.replace(/[0-9]+/, Number(h1.innerText.match(/[0-9]+/))-1)
})

document.getElementById("bake").addEventListener("click", function(){
    h1.innerText = h1.innerText.replace(/[0-9]+/, Number(h1.innerText.match(/[0-9]+/))+5)
})

window.addEventListener("click", function(){
    window.localStorage.setItem("i", h1.innerText)
})

h1.innerText = window.localStorage.getItem("i")