h1 = document.getElementsByTagName("h1")[0];
punc = ".!?"

document.addEventListener("keypress", function(e){
    if(e.key === e.key.toUpperCase()){
        h1.classList.add("upper")
    }
    if(punc.includes(e.key)){
        h1.classList.remove("upper")
    }
    h1.innerText += e.key
})