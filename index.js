const inquirer = require('inquirer');
const fs = require('fs');

const CreateReadMe = ({placeholder1, placeholder2, placeholder3, placeholder4}) =>
`README script in here, template literal frmt`;


inquirer
  .prompt([ {
    type: 'input',
    name: 'title',
    message: 'Enter project title:'
  }, {
    type: 'input',
    name: 'description',
    message: 'Enter project description:'
  }, {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions here:'
  }, {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information here:'
  }, {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines here:'
  }, {
    type: 'input',
    name: 'test',
    message: 'Enter test instructions here:'
  }, {
    type: 'list',
    name: 'license',
    message: 'Choose license:',
    choices: ['1', '2', '3', '4']
  }, {
    type: 'input',
    name: 'username',
    message: 'Enter GitHub username here:'
  }
  ])
  .then((answers) => {
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

