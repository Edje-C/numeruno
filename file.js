var readline = require("readline");

var sum = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

rl.on('line', function(input) {
    
    input = input.split(" ")
    
    for(var i= 0; i < input.length; i++){
        if(isNaN(Number(input[i]))){
            sum += 0
        }else{
            sum += Number(input[i]);
        }
    }
    console.log(sum);
})
