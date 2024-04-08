#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumb = Math.floor(Math.random()) * 6 + 1;
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6"
    }
]);
if (answer.userGuessedNumber === randomnumb) {
    console.log("Congratulations you guessed right number!");
}
else {
    console.log("You guessed wrong number! ");
}
;
