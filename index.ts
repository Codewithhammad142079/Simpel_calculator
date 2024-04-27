#! /usr/bin/enu node 
import inquirer from "inquirer";

//Printing a Wellcome message
console.log("\n\tWellcome To \'Codewithhammad\' -CLI Simpel Calculator\n");
//asking question from users to inquirer
let answers = await inquirer.prompt([
    {message: "Enter First Number", type:"number", name: "firstnumber"},
    {message: "Enter Second Number", type:"number", name: "secondnumber"},
    {
        message: "Select One Operater to perform Operation",
        type: "list",
        name: "operator",
        choices: ["Adition", "Subtraction", "Multiplication", "Division"],
    },
]);

//if else statement

if(answers.operator === "Adition"){
    console.log(answers.firstnumber + answers.secondnumber);
}

 else if(answers.operator === "Subtraction"){
    console.log(answers.firstnumber - answers.secondnumber);
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstnumber * answers.secondnumber);
}
else if(answers.operator === "Division"){
    console.log(answers.firstnumber / answers.secondnumber);   
}
else {
    console.log("Invalid Input");
} 