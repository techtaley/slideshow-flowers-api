const server = jsonServer.create()
const router = jsonServer.router('flowers.json')
const middlewares = jsonServer.defaults()
const port = process.env.port || 4001

server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log(`Flowers API is listening on port http://localhost:${port}`)
})  

//    const express = require("express")
//    const app = express()
//    const importData = require("./flowers.json")
//
//    //routes here
//    app.get("/", (req, res) => {  
//        res.send("Flower shop") 
//   })

//    app.get("/flowers", (req, res) => {
//        res.send(importData)
//    })

//    app.listen(port, () => {
//        console.log(`Example app is listening on port http://localhost:${port}`)
//    })

