
var readline = require('readline');
var fs = require('fs/promises');


// RETO 3 CON GESTIÓN DE CÓDIGO ASÍNCRONO CON THEN/CATCH

const createPerson3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
createPerson3.question("Introduce tu nombre: ", (name) => {
    createPerson3.question("Introduce tu apellido: ", (surname) => {
        createPerson3.question("Introduce tu edad: ", (age) => {
            const person3 = {
                name: name,
                surname: surname,
                age: age
            };

            fs.writeFile("person3.json", JSON.stringify(person3))
            .then(() => {
                console.log("Los datos de person3 han sido guardados en person3.json");
                return fs.readFile("person3.json");
            })
            .then(result => console.log(JSON.parse(result)))
            .catch(error => console.log(error))
            
            createPerson3.close();
        });
    });
});



