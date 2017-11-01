input = prompt('Choose one: "topLeft", "topRight", "bottomLeft", "bottomRight" \nChoose a valid css color \ne.x "topLeft teal" or "bottomRight #005040"').split(" ")

squares = document.querySelectorAll("div");

document.getElementById(input[0]).style.backgroundColor = input[1]