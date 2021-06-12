class Shape {}

class Square extends Shape {
  constructor(x) {
    this.x = x
  }

  area(x) {
    console.log('x = ', x);
    return x * x
  }
}

class Rectangle extends Square, Shape {
  constructor(x, y) {
    super(x)
    this.y = y
  }
  area(x, y) {
    console.log('this')
    // Square.prototype.area.call(this, x)
    const parentReturned = super.area(x)
    console.log('y = ', y);
    return x * y
  }
}

new Rectangle().area(1, 10)

class OverloadDemo {
  area(x, y) {
    console.log('x = ', x);
    if (!y) {
      console.log('y is not provided');
      return `\nThe area of the square is ${Math.pow(x, 2)} sq units`;
    }
    console.log('y = ', y);
    return `\nThe area of the rectangle is ${x * y} sq units`;
  };
};

const rectangle = new OverloadDemo();
console.log('rectangle.area(5, 7)', rectangle.area(5, 7));
console.log('rectangle.area(5)', rectangle.area(5));
