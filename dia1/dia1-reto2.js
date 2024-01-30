
// RETO-2

const fs = require("fs");


const person = {
    name: "Rafael",
    surname: "Lago",
    age: 38
  };


fs.writeFile("person.json", JSON.stringify(person), (err) => {
  if (err) throw err;
  console.log("Los datos de person han sido guardados en person.json");
  fs.readFile("person.json", (err, data) => {
    if (err) throw err;
    let person = JSON.parse(data);
    console.log(person);
  });
});


