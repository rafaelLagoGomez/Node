
const express = require('express');

const app = express();

app.listen(3000);


app.get("/", (req, res) => {
  console.log("Petición recibida del cliente");
  res.status(200).json({ ok: true, message: "recibido" });
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers["user-agent"]);  
  res.end();
})


app.get("/bye", (req, res) => {
  res.status(200).json({ ok: true, message: "adiós" });
});

