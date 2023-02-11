const express = require ("express")
const app = express()
const port = 3001
const RouterList = require("./rutas/list-view-router")
const RouterEdit = require("./rutas/list-edit-router")

app.use(require("./rutas/list-view-router"))
app.use(require("./rutas/list-edit-router"))


app.get("/", (req, res) => {
    res.send("<b>Lista de tareas</b>")
})


app.listen(3001, () =>{
    console.log(`servidor corriendo en el puerto: ${port}`);
})

module.exports = app