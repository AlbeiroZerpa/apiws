const express = require("express");
const apiruta = require("./routes/ruta");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api", apiruta);

app.listen(PORT, ()=> {
    console.log("Hola albe el puerto es: " + PORT);
})

console.log("hola mundo")