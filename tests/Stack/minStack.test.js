import MinStack from "../../Stack/minStack";

const tests = [
    {
        inputA: ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
        inputB: [[], [-2], [0], [-3], [], [], [], []],
        result: [null, null, null, null, -3, null, 0, -2]
    }
];

tests.forEach(({ inputA, inputB, result }) => {
    test(`MinStack ${inputA} ${inputB}:`, () => {
        const soln = [];
        let minStack = null;

        inputA.forEach((command, index) => {
            let result = null;

            if (command === "MinStack") {
                minStack = new MinStack();
            } else {
                const functionResult = minStack[command](...inputB[index]);

                if (functionResult !== undefined) {
                    result = functionResult;
                }
            }

            soln.push(result);
        });

        expect(soln).toEqual(result);
    });
});
