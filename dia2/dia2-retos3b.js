
var readline = require('readline');
var fs = require('fs/promises');


// RETO 3 CON GESTIÓN DE CÓDIGO ASÍNCRONO CON ASYNC/AWAIT

const createPerson3b = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function asAw() {
    try {
        const name = await questionAsync("Introduce tu nombre: ");
        const surname = await questionAsync("Introduce tu apellido: ");
        const age = await questionAsync("Introduce tu edad: ");

        const person3b = {
            name: name,
            surname: surname,
            age: age
        };

        await fs.writeFile("person3b.json", JSON.stringify(person3b));
        const resultPerson = await fs.readFile("person3b.json");
        console.log("Los datos de person3b han sido guardados en person3b.json");
        console.log(JSON.parse(resultPerson));
    } catch (err) {
        console.log(err);
    } finally {
        createPerson3b.close();
    }
}

asAw();

function questionAsync(prompt) {
    return new Promise((resolve) => {
        createPerson3b.question(prompt, resolve);
    });
}