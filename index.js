const inquirer = require('inquirer');
const fs = require('fs');
// Array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter project description.',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Provide step by step installation instructions.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'List the license(s) utilizied for this project.',
            choices: [
                'MIT',
                'Apache'
            ]
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide project usage information.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide testing intructions.',
        },
    ])
    
    .then(data => {
        writeToFile(generateMarkdown(data));

    })
// Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}\n

## Table of Contents
* [Contact Info](#contact)
* [Description](#description)
* [Instructions](#instructions)
* [License](#license)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)

## ${data.username}
## Contact
${data.email}
## Description
${data.description}
### Instructions
${data.instructions}
## License
${data.license === "MIT" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Tests
${data.test}
`
}
module.exports = generateMarkdown;

// Create a function to write README file
    function writeToFile(data) {
        fs.writeFileSync('README.md', data, err =>
        err ? console.log(err) : console.log('Successfully generated!')
     );     
}
