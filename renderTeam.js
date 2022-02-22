const mainTemplate = require('/Users/Jesse/Bootcamp-Projects/TeamBuilder/src/employee.html')
const manager = require('/Users/Jesse/Bootcamp-Projects/TeamBuilder/src/manager.html')
const engineer = require('/Users/Jesse/Bootcamp-Projects/TeamBuilder/src/engineer.html')
const intern = require('/Users/Jesse/Bootcamp-Projects/TeamBuilder/src/intern.html')

const fs = require("fs");

function render(data1) {
    for (let i = 0; i < data1.length; i++) {
        if (data1.member === "Manager") {
        manager
        } else if (data1.member === "Engineer") {
            engineer
        } else if (data1.member === "Intern") {
            intern
        } else {
            return mainTemplate
        }
    }
}

module.exports = render;