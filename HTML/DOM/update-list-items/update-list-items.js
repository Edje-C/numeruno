id = prompt("Which list element would you like to change?")
str = prompt("What do you want it to say?")

ids=["one","two", "three", "four"]

if(!ids.includes(id)){
    document.getElementById("one").innerText = str
}else{
    document.getElementById(id).innerText = str
}