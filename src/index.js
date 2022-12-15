const listado = require('./tareas')
const http = require('http');
const host = 'localhost'
const port = 3000


const  listTask = (req , res )=>{
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.end(JSON.stringify( listado.tareas))
}

const server = http.createServer(listTask)

server.listen(port, host ,()=>{
    console.log(`el server esta corriendo en el ${host} con puerto ${port}`)
})
