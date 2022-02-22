# Team Profile Generator

## Description
The following application will allow the user to generate an HTML file of their team. The user will be able to populate their team members as manager, engineer, or intern. After filling in the required information in this application's prompts, the user will be able to easily access their teams information on a dynamically rendered HTML file.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Questions](#questions)

## Installation
To begin, install the application by using `git clone` on this app's [repo](https://github.com/jmaraya1229/TeamBuilder). Then, `npm install` in order to install the required technologies: inquirer and jest. If the install was unsuccessful, the user can install the required techonolgies by typing `npm install inquirer` and `npm install jest` into their terminal. 

## Usage
After installation, the user can begin creating their HTML by starting the application by using `node index.js ` in the terminal. The user will be directed to complete a variable number of prompts depending on how many team members the user wants to add to their team. When the user is finished, they can select `no` to the confirmation message that asks if the user wants to add more team members. 

After completion, the user will be able to access the dynmically generated team builder by opening the `team.html` file that will be located in the dist folder of the application. 

### Walkthrough video of usage
![screenshot](/assets/TeamBuilder.gif)

[Walkthrough video link](https://drive.google.com/file/d/1k8jdpHt0Sc2BxhZBRSK4c-3zZTBH6wsM/view)

## Testing 
The following application uses Jest to do unit tests. The following screenshots and videos shows tests being done on the employee, manager, engineer, and intern classes. 

In order to run the test, the user must input `npm run test` in the terminal. If the tests pass, green `pass` markers will show. Red `fail` words will show if the test fails. 

![screenshot](/assets/ScreenshotTests.png)

### Walkthrough video of Jest testing
![screenshot](/assets/TeamBuilderTest.gif)

[Jest testing video link](https://drive.google.com/file/d/1P8cgwo1owpPwQdP2l00T_8wmgUXwAkkn/view)

## Questions
* Any questions can be directed to me through my [Github](https://github.com/jmaraya1229) or email (jessemaraya2013@gmail.com)