const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "./src");

const render = (employees) => {
  let html = [];

  html.push(
    ...employees.filter((employee) => employee.getRole() === "Manager").map((manager) => renderEmployee(manager))
  );
  html.push(
    ...employees.filter((employee) => employee.getRole() === "Engineer").map((engineer) => renderEmployee(engineer))
  );
  html.push(...employees.filter((employee) => employee.getRole() === "Intern").map((intern) => renderEmployee(intern)));

  return renderMain(html.join(""));
};

const renderEmployee = (worker) => {
    let html = "";
    if (worker.getRole() === "Manager") {
        html = "manager.html"
    } else if (worker.getRole() === "Engineer") {
        html = "engineer.html"
    } else if (worker.getRole() === "Intern") {
        html = "intern.html"
    }
    let template = fs.readFileSync(path.resolve(templatesDir, html), "utf8");
    template = replacePlaceholders(template, "name", worker.getName());
    template = replacePlaceholders(template, "role", worker.getRole());
    template = replacePlaceholders(template, "email", worker.getEmail());
    template = replacePlaceholders(template, "id", worker.getId());

    if (worker.getRole() === "Manager") {
        template = replacePlaceholders(template, "officeNumber", worker.getOfficeNumber());
    } else if (worker.getRole() === "Engineer") {
        template = replacePlaceholders(template, "github", worker.getGithub());
    } else if (worker.getRole() === "Intern") {
        template = replacePlaceholders(template, "school", worker.getSchool());
    }
    return template;
}

const renderMain = (html) => {
  const template = fs.readFileSync(path.resolve(templatesDir, "employee.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{ " + placeholder + " }", "gm");
  return template.replace(pattern, value);
};

module.exports = render;