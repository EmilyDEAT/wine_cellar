const express = require('express')
const connection = require('../../config')

const Router = express.Router()


Router.get("/allWines", (req, res) => {
  const sql = 'SELECT w.id, w.name, w.wine_year, w.buy_date, w.best, w.date_limit, w.origin, w.isTested, w.comments, w.quantity, r.name AS region, t.name AS type, c.name AS category FROM wine w JOIN region r ON r.id=w.id_region JOIN type t ON t.id=w.id_type JOIN category c ON c.id=w.id_category ORDER BY region, wine_year '
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Erreur dans la récupération des vins")
    } else {
      res.json(results)
    }
  })
})

Router.post("/addWines", (req, res) => {
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

Router.put("/updateWines/:id", (req, res) => {
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

Router.delete("/deleteWines/:id", (req, res) => {
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

module.exports = Router