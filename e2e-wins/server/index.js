const app = require('./server')
const PORT = 3007

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}...`)
})
