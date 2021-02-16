   const express = require("express")
   const app = express()
   const importData = require("./flowers.json")
   const port = process.env.PORT || 4001 

   //routes
   app.get("/", (req, res) => {  
       res.send("Flower shop") 
  })

   app.get("/flowers", (req, res) => {
       res.send(importData)
   })

   app.listen(port, () => {
       console.log(`Example app is listening on port http://localhost:${port}`)
   })