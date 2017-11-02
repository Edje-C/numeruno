var input = document.querySelector("input");
var ul = document.querySelector("ul");
var btn = document.querySelector("button");

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault()
        li = document.createElement("li");
        li.innerText = input.value;
        ul.appendChild(li);
        input.value = "";

        document.querySelectorAll("li").forEach(function (i) {
            i.addEventListener("click", function () {
                i.style.textDecoration !== "line-through" ? i.style.textDecoration = "line-through" : i.style.textDecoration = "none"
            });
        });

        
        btn.addEventListener("click", function () {
            document.querySelectorAll("li").forEach(function (i) {
                if(i.style.textDecoration === "line-through"){
                    ul.removeChild(i);
                }
            });
        });
    
    }
});