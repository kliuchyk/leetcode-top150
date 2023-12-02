class MinStack {
  constructor() {
    this.stack = [];
    this.minValue = null;
    this.top = 0;
  }

  push(val) {
    this.stack[this.top] = val;

    if (this.stack.length === 0 || this.minValue < val) {
      this.minValue = val;
    }

    this.top++;
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    console.log('herer');
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
  }

  getMin() {
    return this.minValue;
  }
}

const obj = new MinStack();
obj.push(10);
obj.pop();
const param_3 = obj.top();
const param_4 = obj.getMin();
