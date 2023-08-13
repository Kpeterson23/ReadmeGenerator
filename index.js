const inquirer = require("inquirer"); // Package for handling user input
const fs = require("fs"); // Package for file system operations
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a project description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Other"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
      console.log("README.md generated successfully.");
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}

// Function call to initialize app
init();
