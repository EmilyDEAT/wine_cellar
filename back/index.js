const express = require('express')
const cors = require('cors')

const connection = require('./config')

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/allWines", (req, res) => {
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

app.put("/updateWines/:id", (req, res) => {
  const idWine = req.params.id
  const formData = req.body
  const sql = 'UPDATE wine SET ? WHERE ?'
  connection.query(sql,[formData, idWine], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'un vin")
    } else {
      res.sendStatus(200)
    }
  })
})

app.delete("/deleteWines/:id", (req, res) => {
  const idWine = req.params.id
  const sql = 'DELETE FROM wine WHERE id = ?'
  connection.query(sql,[idWine], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression d'un vin")
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