const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');

const distDir = path.resolve(__dirname, "dist");
const distPath = path.join(distDir, "team.html");

const render = require('./renderTeam.js');

const mainQuestions = [
    {
        type: "input", 
        name: "name",
        message: "What is the team member's name?",
    },
    {
        type: "input", 
        name: "id",
        message: "What is the team member's ID?",
    },        
    {
        type: "input", 
        name: "email",
        message: "What is the team member's email?",
    },
    {
        type: "list", 
        name: "role",
        message: "What is the team member's role?",
        choices: ["Manager", "Engineer", "Intern"],
    },
];

const team = [];
const generateTeam = () => {
    inquirer.prompt(mainQuestions)
    .then((data1) => {
        inquirer
        .prompt([
        {
            when: () => data1.role === "Manager",
            type: "input", 
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
        {
            when: () => data1.role === "Engineer",
            type: "input", 
            name: "github",
            message: "What is the engineer's Github username?",
        },        
        {
            when: () => data1.role === "Intern",
            type: "input", 
            name: "school",
            message: "What school does the intern attend?",
        },
        {
            type: 'confirm', 
            name: 'addMore',
            message: 'Would you like to add more team members?',
        },
    ])

    .then((data2) => {
        if (data1.role === "Manager") {
            const manager = new Manager(data1.name, data1.id, data1.email, data2.officeNumber);
            team.push(manager);
        }

        if (data1.role === "Engineer") {
            const engineer = new Engineer(data1.name, data1.id, data1.email, data2.github);
            team.push(engineer);
        }

        if (data1.role === "Intern") {
            const intern = new Intern(data1.name, data1.id, data1.email, data2.school);
            team.push(intern);
        }
        if (data2.addMore) {
            generateTeam();
        } else {
            team.forEach((team) => {
            });
            fs.writeFile(distPath, render(team), (err) => {
            if (err) {
                throw err;
            }
            console.log("Success, team HTML is created!");
            });
        }
        });
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  };
  
generateTeam();