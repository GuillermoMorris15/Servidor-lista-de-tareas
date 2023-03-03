const express = require("express");
const router = express.Router();
const data = require("../Data/incompletas.json");
const datas = require("../Data/completadas.json");
datos = require("../Data/datos.json");

router.get("/", (req, res) => {
  res.send(datos);
});

router.get("/incompletas", (req, res) => {
  res.json(data);
  res.end();
});

router.get("/completadas", (req, res) => {
  res.json(datas);
  res.end();
});

module.exports = router;