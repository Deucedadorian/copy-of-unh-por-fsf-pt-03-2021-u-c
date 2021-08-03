// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number

var isArmstrong = function(num) {
    let digits = num.toString().split('').map(Number);

    for (let i = 0; i < digits.length; ++i) {
        digits[i] = Math.pow(digits[i], digits.length);
    }

    const sum = digits.reduce((a, b) => a + b);

    if (sum === num) {
        return true;
    };
    return false;
};