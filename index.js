// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input


const questions = () => {

  if (!questions.answers) {
    questions.answers = [];
  }

  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is project title? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a project description (Required)',
      validate: descInput => {
        if (descInput) {
          return true;
        } else {
          console.log('Please enter a project description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions (Required)',
      validate: instInput => {
        if (instInput) {
          return true;
        } else {
          console.log('Please enter installation instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter usage information!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please list your contribution guidelines (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please list your contribution guidelines!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please list your test conditions (Required)',
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('Please list your test conditions!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does this project use?',
      choices: ['No License', 'Apache License 2.0', 'BSD 3-Clause License', 'GNU GPL v3', 'The Hippocratic License 2.1', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address(Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter usage information!');
          return false;
        }
      }
    },
  ]).then(answers => {
    console.log(answers)

    // return(answers);
    writeToFile('./dist/README.md', generateMarkdown(answers));
  })
}

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return err;
    }
  })
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
