const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
// sets a vabiable that will be used to keep track on the number of clickss
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  // returns the function that is being defined below
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped.
   // count++ is incrementing count. the function looks down stream to find a count variable to increment.
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
  //  it is being used to change the text of the target dynamically
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// button is a array variable so this loop is looping through that array and for every index in the array, it is adding an addEventListener to the corresponding button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
