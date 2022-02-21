const inquirer = require('inquirer');
const fs = require('fs');
const render = require('./utils/generateTeamMembers.js');

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
        name: "member",
        message: "What is the team member's role?",
        choices: ["Manager", "Engineer", "Intern"],
    },
];

const team = [];
const generateTeam = () => {
    inquirer
    .prompt(mainQuestions)
    .then((data1) => {
        inquirer
        .prompt([
        {
            when: () => data1.member === "Manager",
            type: "input", 
            name: "managerOffice",
            message: "What is the manager's office number?",
        },
        {
            when: () => data1.member === "Engineer",
            type: "input", 
            name: "engineerGithub",
            message: "What is the enginner's Github username?",
        },        
        {
            when: () => data1.member === "Intern",
            type: "input", 
            name: "internSchool",
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
            const manager = new Manager(data1.name, data1.id, data1.email, data1.member, data2.managerOffice);
            team.push(manager);
        }

        if (data1.role === "Engineer") {
            const engineer = new Engineer(data1.name, data1.id, data1.email, data1.member, data2.engineerGithub);
            team.push(engineer);
        }

        if (data1.role === "Intern") {
            const intern = new Intern(data1.name, data1.id, data1.email, data1.role, data2.InternSchool);
            team.push(intern);
        }
        if (data2.addMore) {
            generateTeam();
        } else {
            team.forEach((team) => {
            console.log(team);
            });
            fs.writeFile("team.html", render(team), (err) => {
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