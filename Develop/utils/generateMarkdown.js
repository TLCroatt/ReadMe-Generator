// function to generate markdown for README
function generateMarkdown(answers) {
    return `# ${answers.title}
    
![badge](https://img.shields.io/badge/license-${answers.license}-green)

${answers.description}

---

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

---

## Installation
${answers.installation}

---

## Usage
${answers.usage}

---

## License
${answers.license}
Copyright (c) [2020] [${answers.name}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Contributing
${answers.contributing}

---

## Tests
${answers.tests}

---

## Questions
For further questions, contact me at:
GitHub: [${answers.gitHub}](https://github.com/${answers.gitHub})
Email: <${answers.email}>
  `;
  }
  
  module.exports = generateMarkdown;
  