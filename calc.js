// display () function
// function display(val){
//     document.getElementById('result').value += val 
//     return val
// }

// solve () function
// function solve(){
//     let x=document.getElementById('result').value
//     let y=function(x)
//     document.getElementById('result').value=y
//     return y
// }

// function clearScreen(){
//     document.getElementById('result').value =''
// }

const input = document.getElementById('inputtext');
const buttons = document.querySelectorAll('button');
function calculate(expression) {
    console.log(expression);
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}
function operation(buttonValue) {
    if (buttonValue === 'C') {
        input.value = '';
    } else if (buttonValue === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (buttonValue === '=') {
        input.value = calculate(input.value);
    } else {
        input.value += buttonValue;
    }
}
buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});