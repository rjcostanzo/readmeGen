function generateMarkdown(userResponses, userInfo) {

  let draftToC = `## Table of Contents`;

if (userResponses.installation !== '') { draftToC += `
* [Installation](#installation)` };

if (userResponses.usage !== '') { draftToC += `
* [Usage](#usage)` };

if (userResponses.contributing !== '') { draftToC += `
* [Contributing](#contributing)` };

if (userResponses.tests !== '') { draftToC += `
* [Tests](#tests)` };

let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub repo](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  ## Description   
  ${userResponses.description}`

  draftMarkdown += `
  ` + draftToC;
 
  draftMarkdown += `
  * [License](#license)`;

if (userResponses.installation !== '') {
  
  draftMarkdown +=
    `
    ## Installation    
    ${userResponses.installation}`

    };

if (userResponses.usage !== '') {
  
  draftMarkdown +=
  `
  ## Usage 
  ${userResponses.usage}`

  };

if (userResponses.contributing !== '') {

  draftMarkdown +=
  `
  ## Contributing
  ${userResponses.contributing}`

  };

if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  ## Tests
  ${userResponses.tests}`

  };
  
  draftMarkdown +=
  `
  ## License
  ${userResponses.license}`;

let draftDev = 
  `
  ---
  
  ## Questions? 
  GitHub: [@${userInfo.login}](${userInfo.url})`;

if (userInfo.email !== null) {
  
    draftDev +=
    `
  
    Email: ${userInfo.email}
  
    `};

  draftMarkdown += draftDev;

  return draftMarkdown;

}

module.exports = generateMarkdown;
