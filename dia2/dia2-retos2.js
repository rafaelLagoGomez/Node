
var fs = require('fs/promises');


const person = {
  name: "Rafael",
  surname: "Lago",
  age: 38
}


// RETO 2 CON GESTIÓN DE CÓDIGO ASÍNCRONO CON THEN/CATCH

fs.writeFile("person2.json", JSON.stringify(person))
.then ( ()=> {
    console.log("Los datos de person2 han sido guardados en person2.json");
    return fs.readFile("person2.json");
})
.then (result => console.log(JSON.parse(result)))
.catch (error => console.log(error))



// RETO 2 CON GESTIÓN DE CÓDIGO ASÍNCRONO CON ASYNC/AWAIT

async function asAw () {
  try {
    await fs.writeFile("person2b.json", JSON.stringify(person));
    const resultPerson = await fs.readFile("person2b.json");
    console.log("Los datos de person2b han sido guardados en person2b.json");
    console.log(JSON.parse(resultPerson));
  } catch (err) {
      console.log(err)
  }
}

asAw();
