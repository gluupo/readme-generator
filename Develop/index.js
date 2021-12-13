// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "enter the project name."
    },
    {
        type: "input",
        name: "description",
        message: "write a brief description."
    },
    {
        type: "input",
        name: "contributors",
        message: "any contributors to your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "enter any installation commands."
    },
    {
        type: "checkbox",
        name: "licenses",
        message: "check any applicable licenses.",
        choices: [
            "Boost",
            "Eclipse",
            "MIT",
            "Mozilla",
            "Unlicense"
        ]
    },
    {
        type: "input",
        name: "tests",
        message: "enter any test commands.",
    },
    {
        type: "input",
        name: "username",
        message: "enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "enter your email address."
    }
];

// initializes, runs the inquirer node program and prompts with questions, then runs a function to write and save the README file
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            fs.writeFile('sampleREADME.md', generateMarkdown(answers), (err) =>
                err ? console.error(err) : console.log('complete!')
            )
        });
};

// function call to initialize app
init();