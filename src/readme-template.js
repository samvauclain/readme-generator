// export function to generate entire page
module.exports = function doIt (templateData) {
    // destructure page data by section
    // const { projects, about, ...header } = templateData;

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