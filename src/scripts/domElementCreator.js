const ElementCreator = Object.create({}, {
    createEmployee: {
        value: empName => {
            // create a header for name/h1El to be appended to
            const headerEl = document.createElement("header");
            headerEl.setAttribute("class", empName);
            // create an h1El for name to be displayed
            const h1El = document.createElement("h1");
            h1El.textContent = empName;

            // append h1El to headerEl
            headerEl.appendChild(h1El);

            return headerEl;
        }
    },
    createDepartment: {
        value: empDepartment => {
            // create a section for department to be displayed
            const sectionDeptEl = document.createElement("section");
            sectionDeptEl.textContent = `Department: ${empDepartment}`;
            sectionDeptEl.setAttribute("class", "employee-department");

            return sectionDeptEl;
        }
    },
    createComputer: {
        value: empComputer => {
            // create a section for computer to be displayed
            const sectionCompEl = document.createElement("section");
            sectionCompEl.textContent = `Computer: ${empComputer}`;
            sectionCompEl.setAttribute("class", "employee-computer");

            return sectionCompEl;
        }
    }
})

module.exports = ElementCreator;
