// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

var smallestDifference = function(arr1, arr2) {
    let smallestDif = [0, Infinity];

    function diff(a,b){return Math.abs(a-b);}

    for (num1 of arr1) {
        for (num2 of arr2) {
            if (diff(smallestDif[0], smallestDif[1]) > diff(num1, num2)) {
                smallestDif = [num1, num2];
            }
            if (smallestDif === 0) {
                return smallestDif;
            }
        }
    }
    return smallestDif;
};
