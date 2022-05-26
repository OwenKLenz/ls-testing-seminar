
const fs = require('fs')
const { createCard } = require('../db-utils')
const { generateCard } = require('../factories') // factory functions
const { app } = require('../server')

describe('creating a card', () => {
	beforeEach(setupDatabase)
	afterEach(teardownDataBase)

	const newCard = generateCard()

	it('successfully writes a new card to the database', async () => {
    const result = createCard(newCard)

    expect(result).toMatchObject(newCard)
	})
})

function setupDatabase() {
  fs.writeFileSync('./db', '')
}

function teardownDataBase() {
	fs.unlinkSync('./db')
}
