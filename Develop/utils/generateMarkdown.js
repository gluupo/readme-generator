// function to return the chosen license badges passed in via README. if there is no license chosen, it returs an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case `Boost`:
      badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
      break;
    case `Eclipse`:
      badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
      break;
    case `MIT`:
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case `Mozilla`:
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
    case `Unlicense`:
      badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break;
  } return badge;
}

function generateTable(data) {
  let tableOfContents = `
## table of contents
  `;
  if (data.description) {
    tableOfContents += `
- [description](#description)`;
  };
  if (data.usage) {
    tableOfContents += `
- [usage](#usage)`;
  };
  if (data.contributors) {
    tableOfContents += `
- [contributors](#contributors)`;
  };
  if (data.installation) {
    tableOfContents += `
- [installation](#installation)`;
  };
  if (data.licenses) {
    tableOfContents += `
- [licenses](#licenses)`;
  };
  tableOfContents += `
- [questions](#questions)`;
  return tableOfContents;
};

// generate markdown function
function generateMarkdown(data) {
  let readme = ``;

  readme += `
# ${data.projectTitle}
  `;

  readme += `
${generateTable(data)}
  `;

  readme += `
## description
${data.description}
  `;

  if (data.contributors) readme += `
## contributors 
${data.contributors}
  `;

  if (data.installation) readme += `
## installation
\`\`\`${data.installation}\`\`\``

  if (data.licenses) {
    readme += `
## licenses
  `;
  }
  // loops through licenses from switch case
  for (i = 0; i < data.licenses.length; i++) {
    readme += `
  ${renderLicenseBadge(data.licenses[i])}
  `
  };

  if (data.tests) readme += `
## tests
\`\`\`${data.tests}\`\`\``

  readme += `
## questions // contact 

check out my github https://github.com/${data.username}/ \n
feel free to email me at ${data.email}
  `;

  return readme;
};
module.exports = generateMarkdown;
