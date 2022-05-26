
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const {
  createCard,
  fetchAllCards,
  deleteCard,
} = require('./db-utils')

const app = express()
const corsOptions = {
	origin: 'http://localhost:3006'
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/card', (_, res) => {
	const cards = fetchAllCards()

	console.log(`loaded: ${cards.length} cards`)

	res.send(cards)
})

app.post('/card', (req, res) => {
  const result = createCard(req.body)

	console.log('created card')

	res.status(201).send(result)
})

app.delete('/card', (req, res) => {
  deleteCard(req.body)

	console.log('deleted card')

	res.status(204).send('deleted')
})

module.exports = app
