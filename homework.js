var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function math(arr){
    num = arr[1];
    for (var i = 2; i < arr.length; i++) {
        num = eval(Number(arr[i]) + arr[0] + num)
    }
    return num
}

function formatChecker(input){
    for (var i = 1; i < input.length; i++) {
        if(isNaN(Number(input[i]))){
            return true
        }
    }
    return false
}

rl.on("line", function(input){
    var inputArr = input.split(" ");
    var operations = "+=*/"

    if(!operations.includes(inputArr[0])){
        console.log("Operation invalid")
    }else if(formatChecker(inputArr)){
        console.log("Please follow expected format")
    }else{
        console.log(math(inputArr))
    }

});