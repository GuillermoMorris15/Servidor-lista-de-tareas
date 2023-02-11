const express = require ("express")
const RouterList = express.Router()


const tareasCompletas = [
    {
        "id":1,
        "dess": "trabajar",
        "estado": true
    },
    {
        "id":4,
        "dess": "ir al GYM",
        "estado": true
    }
] 

const tareasIncompletas = [
    {
        "id":3,
        "dess": "salir al cine",
        "estado": false
    },
    {
        "id":2,
        "dess": "Ver peliculas",
        "estado": false
    },
]

RouterList.get("/tareasCompletas", (req, res) =>{
    res.json(tareasCompletas)
})


RouterList.get("/tareasIncompletas", (req, res) => {
    res.json(tareasIncompletas)
})



module.exports = RouterList


