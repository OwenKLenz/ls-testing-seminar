
const { serialize } = require('../db-utils')
const { generateCard } = require('../factories')

describe('serialize', () => {
	const newCard = generateCard()

	it('should properly serialize the recieved payload', () => {
		const expectedSerializedPayload = '"userName":"Bob","jobTitle":"Software Engineer","userImage":"https://testing.com/test-image","description":"Hi, Mom!"'

		expect(serialize(newCard)).toContain(expectedSerializedPayload)
	})
})
