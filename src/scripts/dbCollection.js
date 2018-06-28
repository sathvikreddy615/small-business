const $ = require("jquery");

const Database = Object.create({}, {
    getEmployees: {
        value: () => {
            return $.ajax("http://localhost:3000/employee");
        }
    },
    getDepartments: {
        value: id => {
            return $.ajax(`http://localhost:3000/department?departmentId=${id}`);
        }
    },
    getComputers: {
        value: id => {
            return $.ajax(`http://localhost:3000/computer?computerId=${id}`);
        }
    }
});

// Below url will take you to my database diagram!
// https://drive.google.com/file/d/1UcG2ex-JYruz1Sd5GbxY9rud96IotG4b/view?usp=sharing

module.exports = Database;
