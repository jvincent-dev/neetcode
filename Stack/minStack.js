const MinStack = function () {
    this.minStack = [];
    this.stack = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
    const minStackLen = this.minStack.length;

    if (minStackLen === 0 || this.minStack[minStackLen - 1] >= val) {
        this.minStack.push(val);
    }

    this.stack.push(val);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
    const topVal = this.top();

    if (topVal === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }

    this.stack.pop(); // I believe pop should work but leetcode test case says to return nothing
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};

export default MinStack;

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/