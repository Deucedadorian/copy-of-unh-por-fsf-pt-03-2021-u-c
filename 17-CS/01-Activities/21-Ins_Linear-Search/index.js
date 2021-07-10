function tester(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return arr[i];
    }
  }
  return -1;
}

var test1 = tester([5, 2, 5, 3]);
console.log(test1);

var test2 = tester([5, 2, 5, 0]);
console.log(test2);


var test3 = tester([3, 8, 2, 9]);
console.log(test3);
