ps = document.querySelectorAll("p")

for(var i=0; i<ps.length; i++){
    if(i%2===0){
        ps[i].classList.add("bgGreen")
    }else{
        ps[i].classList.add("bgYellow")
    }
}