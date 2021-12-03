// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = 
inquirer.prompt([
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
        type: 'rawlist',
        name: 'license',
        message: 'What license does this project use?',
        choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0']
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

]).then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
