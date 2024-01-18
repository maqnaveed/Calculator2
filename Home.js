import inquirer from "inquirer";
async function startCalu() {
    const userInput = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: " Please enter your first number"
        },
        {
            type: "number",
            name: "num2",
            message: " Please enter your second number"
        },
        {
            type: "list",
            name: "operator",
            choices: ["Add", "Sub", "Mul", "Div"]
        }
    ]);
    const userOp = userInput.operator;
    const firstNum = userInput.Num1;
    const secondNum = userInput.Num2;
    {
        if (userOp == "Add") {
            console.log(`\ The answer of ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
        }
        else if (userOp == "Sub") {
            console.log(`\ The answer of ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
        }
        else if (userOp == "Mul") {
            console.log(`\ The answer of ${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
        }
        else if (userOp == "Div") {
            console.log(`\ The answer of ${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
        }
    }
}
startCalu();
