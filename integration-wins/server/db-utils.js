const fs = require('fs')
const DELIMITER = ';'

function serialize(data) {
	return JSON.stringify({
		...data,
		createdAt: Date.now()
	})
}

function deserialize(stringCard) {
  return JSON.parse(stringCard)
}

function createCard(card) {
  const serializedCard = serialize(card)
	fs.writeFileSync(DELIMITER + serializedCard, { flag: 'a' })
  const createdCard = readCard()

  return deserialize(createdCard)
}

function fetchAllCards() {
	const content = fs.readFileSync('./db').toString()
	const cards = content.split(DELIMITER ).slice(1)

	return cards.map(cardString => JSON.parse(cardString))
}

function deleteCard(toBeDeleted) {
	const allCards = fetchAllCards()
	const remainingCards = allCards.filter(card => {
		card.createdAt !== toBeDeleted
	}).map(card => {
		serialize(card)
	}).join(DELIMITER )

	fs.writeFileSync('./db', remainingCards)
}

function readCard() {
	const cards = fs.readFileSync('./db', { encoding: 'utf8' })
  const cardString = cards.split(DELIMITER )

  return cardString[cardString.length - 1]
}

module.exports = {
	serialize,
  createCard,
  fetchAllCards,
  deleteCard,
}
