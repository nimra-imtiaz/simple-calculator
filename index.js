const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let input = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText; 

        if (value === 'AC') {
            input = ""; 
        } else if (value === 'DEL') {
            input = input.slice(0, -1); 
        } else if (value === '=') {
            try {
                input = eval(input).toString(); 
            } catch {
                input = "Error"; 
            }
        } else {
            input += value; 
        }

        inputBox.value = input; 
    });
});
