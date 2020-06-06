const express = require('express')
const connection = require('../../config')

const Router = express.Router()


Router.get("/allRegions", (req, res) => {
  const sql = 'SELECT * FROM region'
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Erreur dans la récupération des régions de vin")
    } else {
      res.json(results)
    }
  })
})

Router.post("/addRegions", (req, res) => {
  const formData = req.body
  const sql = 'INSERT INTO region SET ?'
  connection.query(sql,[formData], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de l'ajout d'une région")
      console.log(err)
    } else {
      res.sendStatus(200)
    }
  })
})

module.exports = Router