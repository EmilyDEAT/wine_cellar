const express = require('express')
const connection = require('./config')

const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/wines", (req, res) => {
  const sql = 'SELECT * FROM wine'
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Erreur dans la récupération des vins")
    } else {
      res.json(results)
    }
  })
})

app.post("/addWines", (req, res) => {
  const formData = req.body
  const sql = 'INSERT INTO wine SET ?'
  connection.query(sql,[formData], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de l'ajout d'un vin")
    } else {
      res.sendStatus(200)
    }
  })
})

app.get("/", (req, res) => {
  res.send('Je suis dans le /')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})