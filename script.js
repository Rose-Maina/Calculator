// Get the display input field
const display = document.getElementById('display');

// Get all calculator buttons
const buttons = Array.from(document.getElementsByClassName('button'));

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Handle the clear (C) button
        if (button.value === 'C') {
            display.value = '';
        } 
        // Handle the equals (=) button
        else if (button.value === '=') {
            try {
                // Evaluate the expression in the display
                display.value = eval(display.value);
            } catch (e) {
                // If there's an error (e.g., invalid expression), clear the display
                display.value = 'Error';
            }
        } 
        // Handle all other buttons
        else {
            display.value += button.value;
        }
    });
});
