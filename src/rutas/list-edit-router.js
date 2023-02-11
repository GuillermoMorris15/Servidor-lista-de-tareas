const express = require ("express")
const RouterEdit = express.Router()


RouterEdit.post("/nuevaTarea", (req, res) => {
    res.send("Crear nueva tarea")
})


RouterEdit.delete("/eliminarTarea", (req, res) => {
    res.send("eliminar Tarea")
})

RouterEdit.put("/editarTarea", (req, res) => {
    res.send("editar Tarea")
})



module.exports = RouterEdit;