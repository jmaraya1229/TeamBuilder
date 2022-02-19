const inquirer = require('inquirer');
const fs = require('fs');
const team = require('./utils/generateTeamMembers.js');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'manager',
            message: 'What is the team managers name?',
        },
        {
            type: 'input', 
            name: 'managerID',
            message: 'What is the managers ID?',
        },        
        {
            type: 'input', 
            name: 'managerEmail',
            message: 'What is the managers email?',
        },
        {
            type: 'input', 
            name: 'managerOffice',
            message: 'What is the managers office number?',
        },
        {
            type: 'list', 
            name: 'moreMembers',
            message: 'Would you like to add more members to your team?',
            choices: ['Yes, add engineer', 'Yes, add intern', 'No'],

        },
        {
            type: 'input', 
            name: 'engineerName',
            message: 'What is the engineers name?',
        },
        {
            type: 'input', 
            name: 'engineerID',
            message: 'What is the engineers ID?',
        },
        {
            type: 'input', 
            name: 'engineerEmail',
            message: 'What is the engineers email?',
        },
        {
            type: 'input', 
            name: 'engineerGithub',
            message: 'What is the enginners Github username?',
        },        
        {
            type: 'input', 
            name: 'internName',
            message: 'What is the interns name?',
        },
        {
            type: 'input', 
            name: 'internID',
            message: 'What is the interns ID?',
        },
        {
            type: 'input', 
            name: 'internEmail',
            message: 'What is the interns email?',
        },
        {
            type: 'input', 
            name: 'internSchool',
            message: 'What school does the intern attend?',
        },
        {
            type: 'list', 
            name: 'addMoreMembers',
            message: 'Would you like to add more team members?',
            choices: ['Yes, add an engineer', 'Yes, add an intern', 'No, finish my team'],
        },
    ])
};

const init = () => {
    questions ()
    .then((data) => fs.writeFileSync('index.html', team(data)))
    .then(() => console.log('Successfully created team roster'))
    .catch ((err) => console.error(err));
}

init();