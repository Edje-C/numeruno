var outputDiv;

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
        return eval(mathExp)
    } catch (e) {
        return NaN
    }
}

document.addEventListener('DOMContentLoaded', function () {
    outputDiv = document.getElementById('output');
    var equation = "";
    document.addEventListener('click', function (event) {
        var elementId = event.target.id;
        var elementText = event.target.innerText

        if (elementId === "clr") {
            outputDiv.innerText = ""
            equation = ""
        }

        if (outputDiv.innerText.length === 13) {
            alert("You need to evaluate your equation or clear")
        } else if (outputDiv.innerText.length > 14) {
            return
        }

        if (!numbers.includes(elementText)) {
            var doubles = "";
            if (elementText === doubles[doubles.length - 1]) {
                doubles = ""
            } else if (operations.includes(elementId)) {
                doubles += elementText
                equation += elementText
                outputDiv.innerText += elementText
            } else if (elementId === "eq") {
                doubles += elementText
                ans = calculate(equation)
                if((ans).toString().length>16) {
                    ans = ans.toString()
                    outputDiv.innerText = ans.substring(0, 15)
                    equation = ans.substring(0, 15)
                } else {
                    outputDiv.innerText = ans
                    equation = ans
                }
            }
        } else {
            outputDiv.innerText += elementId;
            equation += elementId;
        }
        // logging the element id for debug purposes
        console.log(elementId)
    })
})