const app = require('./server')
const PORT = 3005

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}...`)
})
