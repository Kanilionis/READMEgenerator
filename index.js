
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// module.exports = generateMarkdown;

// // function to initialize program
// function init() {
// }
// // function call to initialize program
// init();

var inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const { url } = require("inspector");

// function to generate markdown for README

// module.exports = generateMarkdown;

// hard code the table of contents here
// ![Installation](installation)
function renderLicenseBadge(license){
  return `
  ![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)
  `
}
// ${renderLicenseBadge(response.license)}



function writeREADME(response){
return `
${generateLicense(response.license)}
# ${response.title}
#### ${response.description}
# ${response.toc}
## ${response.installation}
## ${response.usage}
## ${response.license}
## ${response.contributing}
## ${response.tests}
## ${response.questions}
`
}



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
  name: "Apache License 2.0",
  badge: "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
  url: "(https://opensource.org/licenses/Apache-2.0)"
  },
  {
  name: "MIT License",
  badge: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
  url: "(https://opensource.org/licenses/MIT)"
  },
  {
  name: "Boost Software License 1.0",
  badge: "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)",
  url: "(https://www.boost.org/LICENSE_1_0.txt)"
  },
  {
  name: "The Unilicense",
  badge: "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
  url: "(http://unlicense.org/)"
  },
]

function generateLicense(licenseAnswer){
  console.log(licenseAnswer)
  const arrayLic = []
licenses.map(function(license, i){
  arrayLic.push(license)
  console.log(i)
  if (licenseAnswer === arrayLic.name[7]){
    // console.log(license.badge[7])
    return arrayLic.badge[7]
  }
})
}


// const questions = 

inquirer.prompt([
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
    message: "What would you like to include in your table of contents? Separate each using commas.",
    name: "toc",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: licenses
  }] 
  ).then(function(response){
      console.log(response);
    // var tocJSON = JSON.stringify(response.toc);
    //   console.log(tocJSON)
  //   var toc = [];
  // if(response.toc !== null){
  //   toc.push(response.toc);
  //   console.log(toc)
  // }
    // var textForFile = "# " + response.title + "\n";
    // var fs = require("fs");
    //   textForFile = textForFile + "### description: " + response.description + "\n";
    //   textForFile = textForFile + "## table of contents: " + "<li>" + JSON.parse(tocJSON) + "\n";
      
    // var licenseBadge = response.license;
    // textForFile = textForFile + licenseBadge
    fs.writeFile("READMEgen.md", writeREADME(response), function(error){
        if(error){
            return console.log(error)
        }
    })

})

// ## for Table of Contents header
// ul with li of contents using * [name of content](#nameoflinklocation)
// var tableOfContents = [
//   { name: Installation, 
//     link: installation},
//   { name: Usage, 
//     link: usage},
//   { name: License, 
//     link: license},
//   { name: Contributing, 
//     link: contributing},
//   { name: Tests, 
//     link: tests},
//   { name: Questions, 
//     link: questions}
// ];
// textForFile = "## " + tableOfContents
// textForFile = "* [" + tableOfContents.name + "](#" + tableOfContents.link + ")" 
// steps required to install project (provide step-by-step description of how to get the development environment running) - add gif of process if necessary
// var installation = ""
// // instructions for use, include screenshots and gif of process
// var usage = ""
// // https://choosealicense.com/
// var license = ""
// // contributor covenant code of conduct
// var contributing = ""
// // write tests for the application and provide examples on how to run these
// var tests = ""
// // 
// var questions = ""


// inquirer.prompt({
// message: "Enter your GitHub username",
// name: "username"
// })
// .then(function({username}){
// const queryURL = `https://api.github.com/users/${username}/repos?per_page=100`;

// // make axios call here
// axios.get(queryURL)
//   .then( response => {
//     const repoArray = [];

//   // loop through to retrieve data from each object
//     response.data.forEach(repoObj => {
//     repoArray.push(repoObj.name);
//     })
//     inquirer.prompt([
//       { type: "checkbox",
//         message: "What would you like your title to be?",
//         name: "title",
//         choices: repoArray,
//       }])
//       .then(function(response){
//           console.log(response);
//         var textForFile = "# " + response.title + "\n";
//           console.log(textForFile);

//         fs.writeFile("README.md", textForFile, function(error){
//           if(error){
//             return console.log(error)
//             }
//             console.log("written to README")
//         });
//       })
//     })
//   })

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests



// WHEN I choose a license for my application from a list of options

  

// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```