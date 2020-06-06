const express = require('express')
const connection = require('../../config')

const Router = express.Router()


Router.get("/allTypesTotals", (req, res) => {
  const sql = 'SELECT COUNT(w.quantity) AS total, t.name FROM wine w RIGHT JOIN type t ON t.id = w.id_type GROUP BY t.name'
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Erreur dans la récupération des types de vin")
    } else {
      res.json(results)
    }
  })
})

module.exports = Router