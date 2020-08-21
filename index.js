const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./Develop/Utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

//questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your full name?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project."

        },
        {
            type: "input",
            name: "installation",
            message: "How do you install/run your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is your project used for?"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Choose a license.",
            choices: ["MIT", "ISC", "Apache", "GNU" ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Please list contributing applications."
        },
        {
            type: "input",
            name: "tests",
            message: "Please describe the testing of the project.",
        },
        {
            type: "input",
            name: "gitHub",
            message: "Please enter your GitHub username.",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address.",
        },
    ])
}


// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
const init = async () => {
    console.log("Starting Prompts");

    try {
        const answers = await promptUser();

        const markDown = generateMarkdown(answers);

        await writeFileAsync("./NewReadMe/readMe.md", markDown);

        console.log("Successfully wrote to readMe.md")
    } catch (err) {
        console.log(error)
    }
}

// function call to initialize program
init();
