// Returns license (link & badge) based on selection.
function renderLicenseBadge(data) {
  switch(data.license) {
    case 'Apache License 2.0':
      data.license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'BSD 3-Clause License':
      data.license = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'GNU GPL v3':
      data.license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'The Hippocratic License 2.1':
      data.license = '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
      break;
    case 'IBM Public License Version 1.0':
      data.license = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      break;
    case 'ISC License (ISC)':
      data.license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'The MIT License':
      data.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla Public License 2.0':
      data.license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    default:
        data.license = templateData.license;
  }
  return data.license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

// To Do: Table of contents, screenshot, video
renderLicenseBadge(data);

// Generate each section with headers & content
return `
# ${data.title}

## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## License
${data.license}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
* https://github.com/${data.github}/
* <a href="mailto:${data.email}">${data.email}</a>
`;
}

module.exports = generateMarkdown;
