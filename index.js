const inquirer = require('inquirer');
const fs = require('fs');

const createReadMe = ({title, description, installation, usage, contribution, test, license, username, email }) =>
`# ${title}

## Description:
${description}

## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation:
${installation}

## Usage:
${usage}

## License:
${license}

## Contributing:
${contribution}

## Tests:
${test}

## Questions:
Questions about this application or other work by this dev can be directed to: ${email}
Additional work from this dev can be found at [their GitHub profile](github.com/${username})
`;


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
  },{
    type: 'input',
    name: 'email',
    message: 'Enter your email address here:',
  }
  ])
  .then((answers) => {
    const indexContent = createReadMe(answers);

    fs.writeFile('./output/READMEEM.md', indexContent, (err) =>
    err ? console.log(err) : console.log('ReadME successfully generated'))
  });

