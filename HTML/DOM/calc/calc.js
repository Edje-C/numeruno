var outputDiv;
var equation = "";
var doubles = [];
var lastDub;

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'div']

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
    try {
        ans = eval(mathExp).toString()
        if(ans.length>16) {
            ans = ans.substring(0, 15);
        }
        return ans;
    } catch (e) {
        return NaN
    }
}

function backspace(){
    outputDiv.innerText = outputDiv.innerText.substring(0, outputDiv.innerText.length-1);
    equation = equation.substring(0, equation.length-1);
}

function equal(){
    if(operators.includes(outputDiv.innerText.substr(-1))){
        return
    }
    outputDiv.innerText = calculate(equation)
    equation = ""
}

function clear(){
    outputDiv.innerText = "";
    equation = "";
}


document.addEventListener('DOMContentLoaded', function () {
    outputDiv = document.getElementById('output');


    document.addEventListener('keydown', function (event) {

        if (event.key === lastDub) {
            return
        }

        if((lastDub === "=" || lastDub === "Enter") && equation===""){
            doubles = ["!"]
            outputDiv.innerText = ""        
        }

        if(event.key === "c"){
            clear()
        }

        if(event.key === "Backspace"){
            backspace()
        }

        if(event.key === "Enter" || event.key === "="){
            equal()
        }
        
        if (outputDiv.innerText.length === 18) {
            alert("You need to evaluate your equation or clear")
        } else if (outputDiv.innerText.length > 18) {
            return
        }
        
        if("+-*/=Enter".includes(event.key)){
            doubles.push(event.key)
            lastDub = doubles.slice(-1)[0]    
        }
        
        if(event.key.match(/[0-9]/) || operators.includes(event.key)){
            outputDiv.innerText += event.key;
            equation += event.key;
        }
    
    })

    document.addEventListener('click', function (event) {
        var elementId = event.target.id;
        var elementText = event.target.innerText;

        if(elementId === "clr"){
                clear()
        }

        if(elementId === "backspace"){
                backspace()
        }

        if((lastDub === "=" || lastDub === "Enter") && equation===""){
            doubles = ["!"]
            outputDiv.innerText = ""
        }    

        if (outputDiv.innerText.length === 18) {
            alert("You need to evaluate your equation or clear")
        } else if (outputDiv.innerText.length > 18) {
            return
        }

        if (!numbers.includes(elementText)) {
            
           if (elementText === lastDub && !numbers.includes(equation.substr-1)) {
                return
            } else if (operations.includes(elementId)) {
                equation += elementText
                outputDiv.innerText += elementText
            } else if (elementId === "eq") {
                equal()
            }
            doubles.push(elementText)
            lastDub = doubles.slice(-1)[0]    
        } else {
            outputDiv.innerText += elementId;
            equation += elementId;
        }
        // logging the element id for debug purposes
        console.log(elementId)
    })
})