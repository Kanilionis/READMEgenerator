
var inquirer = require("inquirer");
const fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js")
const licenses = [
  {
  name: "GNUAGPLv3",
  badge: "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)",
  url: "(https://www.gnu.org/licenses/agpl-3.0)"
  },
  {
  name: "GNUGPLv3",
  badge: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
  url: "(https://www.gnu.org/licenses/gpl-3.0)"
  },
  {
  name: "GNULGPLv3",
  badge: "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)",
  url: "(https://www.gnu.org/licenses/lgpl-3.0)"
  },
  {
  name: "MPL2.0",
  badge: "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
  url: "(https://opensource.org/licenses/MPL-2.0)"
  },
  {
  name: "AL2.0",
  badge: "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
  url: "(https://opensource.org/licenses/Apache-2.0)"
  },
  {
  name: "MIT",
  badge: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
  url: "(https://opensource.org/licenses/MIT)"
  },
  {
  name: "BoostSL1.0",
  badge: "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)",
  url: "(https://www.boost.org/LICENSE_1_0.txt)"
  },
  {
  name: "Unilicense",
  badge: "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
  url: "(http://unlicense.org/)"
  },
]
// ${generateLicense(response.license)}
const questions = [
  {
    type: "input",
    message: "What would you like your title to be?",
    name: "title",
  },
  {
    type: "input",
    message: "What would you like your description to say?",
    name: "description",
  },
  {
    type: "input",
    message: "What are your installation requirements?",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter any contributors here.",
    name: "contributors",
  },
  {
    type: "input",
    message: "Add any tests here.",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: licenses
  }] 


  function init(){
    inquirer.prompt(questions)
      .then(function(response){
      console.log(response);
    
      fs.writeFile("READMEgen.md", generateMarkdown(response), function(error){
        if(error){
            return console.log(error)
        }
    })

})
}

init()



// function generateLicense(licenseAnswer){
//   console.log(licenseAnswer)
//   const arrayLic = []
// licenses.map(function(license, i){
//   arrayLic.push(license)

//   // run loop/forEach through arrayLic
//   console.log(arrayLic)
//   if (licenseAnswer === arrayLic.name){
//     // console.log(license.badge[7])
//     return arrayLic.badge
//   }
// })
// }

