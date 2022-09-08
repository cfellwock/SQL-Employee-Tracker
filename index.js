const BaseEntity = require('./models/BaseEntity')
const chalk = require('chalk')
const inquirer = require('inquirer')

async function main() {
    let answer = await inquirer.prompt( {
        type: "list",
        name: "direction",
        message: "What would you like to do?",
        choices: ["Departments", "Roles", "Employees"]
    })

    if (answer.direction === "Departments") {
        BaseEntity.findAll("department").then(function([response]){
            console.log(response)
        })
        console.log("DEPARTMENT QUESTIONS GO HERE")
    } else if (answer.direction === "Roles") {
        console.log("ROLE QUESTIONS GO HERE")
    } else if (answer.direction === "employees") {
        console.log("EMPLOYEE QUESTIONS GO HERE")
    }
}

main ();

