id1 = prompt("First id")
id2 = prompt("Second id")

ids=["one","two", "three", "four"]

first = document.getElementById(id1).innerHTML
second = document.getElementById(id2).innerHTML

document.getElementById(id1).innerHTML = [document.getElementById(id2).innerHTML, document.getElementById(id2).innerHTML=document.getElementById(id1).innerHTML][0]