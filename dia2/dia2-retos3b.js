
var readline = require('readline');
var fs = require('fs/promises');


// RETO 3 CON GESTIÓN DE CÓDIGO ASÍNCRONO CON ASYNC/AWAIT

const createPerson3b = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

createPerson3b.question("Introduce tu nombre: ", (name) => {
    createPerson3b.question("Introduce tu apellido: ", (surname) => {
        createPerson3b.question("Introduce tu edad: ", (age) => {
            const person3b = {
                name: name,
                surname: surname,
                age: age
            };

            async function asAw() {
                try {
                    await fs.writeFile("person3b.json", JSON.stringify(person3b));
                    const resultPerson = await fs.readFile("person3b.json");
                    console.log("Los datos de person3b han sido guardados en person3b.json");
                    console.log(JSON.parse(resultPerson));
                } catch (err) {
                    console.log(err)
                }
            }
            asAw();

            createPerson3b.close();
        });
    });
});
