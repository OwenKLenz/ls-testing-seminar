async function listCards() {
  const res = await fetch('http://localhost:3005/card', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await res.json()
}

async function postCard(card) {
	const res = await fetch('http://localhost:3005/card', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(card)
	})

	return await res.json()
}

async function deleteCard(id) {
	const res = await fetch('http://localhost:3005/card', {
		method: 'DELETE',
		body: id,
	})

	return res.text()
}

module.exports = {
	postCard,
	listCards,
	deleteCard,
}
