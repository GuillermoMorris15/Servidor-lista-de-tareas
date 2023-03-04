const express = require("express");
const taskShema = require("../models/schemaTarea");
const router = express.Router();
// Crear tarea.
router.post("/task",  (req, res) => {
  const task = taskShema(req.body);
  task
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener todas las tareas.
router.get("/task", (req, res) => {
  const { id } = req.headers;
  taskShema
    .find(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener una sola Tarea.
router.get("/task/:id", (req, res) => {
  const { id } = req.params;
  taskShema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Editar una Tarea.
router.put("/task/:id", (req, res) => {
  const { id } = req.params;
  const { tareas, descripcion } = req.body;
  taskShema
    .updateOne({ _id: id }, { $set: { tareas, descripcion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar una Tarea.
router.delete("/task/:id", (req, res) => {
  const { id } = req.params;
  taskShema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
