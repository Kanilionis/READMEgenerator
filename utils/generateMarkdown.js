function renderLicenseBadge(license){
  return `
  ![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)
  `
}


function generateMarkdown(response){
  return `
  ${renderLicenseBadge(response.license)}
  
  # ${response.title}
  ## Description
  #### ${response.description}

  # Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributors](#contributors)
   * [Tests](#tests)
   * [Questions](#questions)

  ## Installation
  #### ${response.installation}

  ## Usage
  #### ${response.usage}

  ## License
  #### This project is licensed under the ${response.license} license.

  ## Contributing
  #### ${response.contributors}

  ## Test
  #### ${response.tests}

  ## Questions
  #### Email: <a>${response.email}</a>
  #### GitHub: <a>github.com/${response.github}</a>
  `
  }
  
module.exports = generateMarkdown; 