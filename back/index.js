const express = require('express')
const cors = require('cors')
const wines = require('./src/routes/wines.js')
const types = require('./src/routes/types.js')
const regions = require('./src/routes/regions')

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/wines", wines)
app.use("/types", types)
app.use("/regions", regions)

app.get("/", (req, res) => {
  res.send('Je suis dans le /')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})