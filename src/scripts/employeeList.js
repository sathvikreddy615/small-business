const Database = require("./dbCollection");
const ElementCreator = require("./domElementCreator");

const displayContainer = document.querySelector("#display-container"); // query <article> in index.html

Database.getEmployees() // queries employee data from database
    .then(employee => { // if successful; the parameter contains the employee object data
        for (let i in employee) { // loop thru employee object
            const articleEl = document.createElement("article"); // create <article> element
            articleEl.setAttribute("class", "employee"); // setting class to "employee"
            let employeeContainer = ElementCreator.createEmployee(employee[i].name); // prints employee names to DOM and stores in variable
            Database.getDepartments(employee[i].departmentId) // queries department data using the FK in employee table. this function accepts 1 argument
                .then(department => { // if successful; the paramater contains the department object data
                    let departmentContainer = ElementCreator.createDepartment(department[0].name); // prints departments by employee to DOM and stores in variable
                    articleEl.appendChild(departmentContainer); // append variable to articleEl for departments to match up with employee name
                })
            Database.getComputers(employee[i].computerId) // queries department data using the FK in employee table. thus function accepts 1 argument
                .then(computer => { // if successful; the paramter contains the computer object data
                    let computerContainer = ElementCreator.createComputer(computer[0].brand); // prints computers by empployee to DOM and stores in variable
                    articleEl.appendChild(computerContainer); // append variable to articleEl for computers to match up with employee name
                })
            articleEl.appendChild(employeeContainer); // append employeeContainer to articleEL
            displayContainer.appendChild(articleEl); // append articleEl to displayContainer - makes elements visible to user
        }
    })

