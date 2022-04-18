class Stack {
  constructor() {
    this.items = {}; //object or Array
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  //return and remove the top element
  //return undefined if stack is empty
  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let topElement = this.items[this.count];
    delete this.items[this.count];
    return topElement;
  }

  peek() {
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }
}

const stack = new Stack();

export { stack };
