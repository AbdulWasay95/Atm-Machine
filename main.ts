import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 5748;

let pinAnswer = await inquirer.prompt([
  { message: "Enter your pin code:", type: "number", name: "pin" },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin entered !"); 

  let operationAns = await inquirer.prompt(
    [
        {
            message: "what action do you want to perform?",
            type: "list",
            name: "operation",
            choices: ["cash withdraw", "check balance"]
        }
    ]
  );
  
 if (operationAns.operation === "cash withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                message: "Enter Amount",
                type: "number",
                name: "amount"
            }
        ]
    );
    myBalance -= amountAns.amount
    console.log("Your remaining amount is: " + myBalance)
 }else if (operationAns.operation === "check balance"){
    console.log("Your balance is: " + myBalance)
 }
}

else {
  console.log("Invalid pin code !");
}
