
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
var inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
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
    message: "What would you like to include in your table of contents?",
    name: "toc",
  },
  // {
  //   type: "input",
  //   message: "What would you like your title to be?",
  //   name: "title",
  // },
  // {
  //   type: "input",
  //   message: "What would you like your title to be?",
  //   name: "title",
  // },
  // {
  //   type: "input",
  //   message: "What would you like your title to be?",
  //   name: "title",
  // },
  // {
  //   type: "input",
  //   message: "What would you like your title to be?",
  //   name: "title",
  // },
 ] )
.then(function(response){
  console.log(response);
  var textForFile = "# " + response.name + "\n";
  var fs = require("fs");
  fs.writeFile("README.md", textForFile, function(error){
      if(error){
          return console.log(error)
      }
      console.log("file written");

})
//   
// questions.forEach()
// // loop (forEach) through each array in the object
// // then writeFile to README using input value
// );

// use # (similar to h1) - largest font
// var title = ""
// textForFile = "# " + title;
// ## for h2 - second largest font
textForFile = textForFile + "# " + response.title + "\n";
textForFile = textForFile + "### description: " + response.description + "\n";
textForFile = textForFile + "## table of contents: " + "<li>" + response.toc;
fs.writeFile("README.md", "\n" + textForFile, function(error){
  if(error){
      return console.log(error)
  }
  console.log("description written");
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
// start table of contents with Installation (## for all)
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


// inquirer.prompt([
//     {
//     type: "input",
//     message: "What is the title of your README file?",
//     name: "title"
//     },
//     {
//     type: "input",
//     message: "What would you like to put in your description?",
//     name: "description"
//     },
//     {
//     type: "list",
//     message: "Enter your table of contents.",
//     name: "contents",
//     }
// ])

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