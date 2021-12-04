//['Apache License 2.0', 'BSD 3-Clause License', 'GNU GPL v3', 'The Hippocratic License 2.1', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0']
// export function to generate entire page
module.exports = function generateReadme (templateData) {

switch(templateData.license) {
    case 'Apache License 2.0':
        templateData.license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'BSD 3-Clause License':
        templateData.license = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'GNU GPL v3':
        templateData.license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'The Hippocratic License 2.1':
        templateData.license = '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
      break;
    case 'IBM Public License Version 1.0':
        templateData.license = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      break;
    case 'ISC License (ISC)':
        templateData.license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'The MIT License':
        templateData.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla Public License 2.0':
        templateData.license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    default:
        templateData.license = templateData.license;
  }

return `
# ${templateData.title}
## Description
${templateData.description}
## Installation
${templateData.installation}
## Usage
${templateData.usage}
## Contributing
${templateData.contributing}
## Tests
${templateData.tests}
## License
${templateData.license}
## Github
https://github.com/${templateData.github}/
## Email
<a href="mailto:${templateData.email}">${templateData.email}</a>
`;
};