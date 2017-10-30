window.onload(Prompt())

function Prompt(){
    str = window.prompt("Say som\'")
    num = window.prompt("Gimme a number")
    
    if(isNaN(num)){
        nan()
        repeat(str, num)
    }else{
        repeat(str, num)
    }
}

function nan(){
    num = window.prompt("I need a number")
    if(isNaN(num)){
        nan()
    }else{
        return num
    }
}


function repeat(str, num){
    for (i = 0; i < Number(num); i++) {
        window.alert(str)
    }
}

