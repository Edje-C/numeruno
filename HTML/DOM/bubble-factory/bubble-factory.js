btn = document.querySelector("button")

btn.style.display = "block"

btn.addEventListener("click", function(){
    img = document.createElement("img")
    img.style.width = "50px"
    img.src = "http://www.pngmart.com/files/3/Bubbles-PNG-HD.png"
    document.body.appendChild(img)
});