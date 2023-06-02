/**
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 *
 * Evaluate the expression. Return an integer that represents the value of the expression
 * Note that:
 * - The valid operators are '+', '-', '*', and '/'
 * - Each operand may be an integer or another expression
 * - The division between two integers always truncates toward zero
 * - There will not be any division by zero
 * - The input represents a valid arithmetic expression in a reverse polish notation
 * - The answer and all the intermediate calculations can be represented in a 32-bit integer
 */

const operations = {
    "+": (a, b) => parseInt(a) + parseInt(b),
    "-": (a, b) => a - b,
    "/": (a, b) => parseInt(a / b),
    "*": (a, b) => parseInt(a * b)
};

/**
 * @param {string[]} tokens
 * @return {number}
 */

export function evalRPN(tokens) {
    return tokens.reduce((stack, token) => {
        if (operations.hasOwnProperty(token)) {
            const pop1 = stack.pop();
            const pop2 = stack.pop();
            const result = operations[token](pop2, pop1);

            stack.push(result);
        } else {
            stack.push(token);
        }

        return stack;
    }, [])[0];

    /**
      loop through tokens
      add each number into the stack
      if operation: pop 2 numbers from stack > 2nd pop (operation) 1st pop > push back number into stack
      repeat
      return only number in stack
   */
} // time: O(n), space: O(n)
