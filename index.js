// readme requirements
// GIVEN a command - line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high - quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// 
//  =======================

// questions:
// Enter project title here:
// Enter description of project here:
// Enter installation instructions here:
// Enter usage information here:
// Enter contribution guidelines here:
// 







// =====================================================================


const inquirer = require('inquirer');
const fs = require('fs');

const CreateReadMe = ({placeholder, placeholder, placeholder, placeholder}) =>
`README script in here, template literal frmt`;


inquirer
  .prompt([ {
    type: 'input',
    name: 'whatever i want the name of the variable to be',
    message: 'the question i am asking'
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

