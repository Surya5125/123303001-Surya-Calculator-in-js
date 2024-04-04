function calc(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                console.log("Error");
            } else {
                return num1 / num2;
            }
            break;
        default:
            console.log("Error");
    }
}

function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the number of test cases: ", (test) => {
        let remainingTests = test;

        const askTestCase = () => {
            rl.question("Enter the two numbers: ", (input) => {
                const [a, b] = input.split(' ').map(Number);
                rl.question("Enter the operator: ", (op) => {
                    const result = calc(a, b, op);
                    console.log("Result:", result);
                    remainingTests--;
                    if (remainingTests > 0) {
                        askTestCase();
                    } else {
                        rl.close();
                    }
                });
            });
        };

        askTestCase();
    });
}

main();
