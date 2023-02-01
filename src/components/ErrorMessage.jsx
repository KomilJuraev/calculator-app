const ErrorMessage = (num1, num2) => {
    if (isNaN(parseInt(num1)) && isNaN(parseInt(num2))) {
        return `Please enter a number into "First Number" and "Second Number" input fields`;
    } else if (isNaN(parseInt(num1)) && !isNaN(parseInt(num2))) {
        return `Please enter a number into "First Number" input field`;
    } else if (!isNaN(parseInt(num1)) && isNaN(parseInt(num2))) {
        return `Please enter a number into "Second Number" input field`;
    } else {
        return true;
    }
};


export default ErrorMessage;
