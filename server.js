const express = require('express')
const bodyParser = require('body-parser')
const drones = require("./drones.json")

const app = express()
app.use(bodyParser.json())

const PORT = 3005

app.get('/', (req, res) => {
  res.send('Welcome to my API')
})

app.get('/drones', (req, res) => {
  res.json(drones)
})

app.get('/drones/:id', (req, res) => {
  const drone = drones.find(d => d.id == req.params.id);
  if (!drone) return res.status(404).json({ message: "Drone not found" });
  res.json(drone);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`))