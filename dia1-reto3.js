
// RETO-3

const readline = require('readline');
const fs = require('fs');

const createPerson2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

createPerson2.question("Introduce tu nombre: ", (name) => {
    createPerson2.question("Introduce tu apellido: ", (surname) => {
        createPerson2.question("Introduce tu edad: ", (age) => {
            const person2 = {
                name: name,
                surname: surname,
                age: age
            };
            fs.writeFile("person2.json", JSON.stringify(person2), (err) => {
                if (err) throw err;
                console.log("Los datos de person2 han sido guardados en person2.json");
                fs.readFile("person2.json", (err, data) => {
                    if (err) throw err;
                    let person2 = JSON.parse(data);
                    console.log(person2);
                });
            });
            createPerson2.close();
        });
    });
});
