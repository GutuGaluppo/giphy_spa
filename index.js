const PORT = 3001;
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()


const app = express()

app.use(cors())
app.get('/gifs', (req, res) => {
	const options = {
		method: 'GET',
		url: `https://api.giphy.com/v1/gifs/api_key=${process.env.REACT_APP_GIPHY_API_KEY}`,
		headers: {
			'graphyapi-key': process.env.REACT_APP_GIPHY_API
		}
	}
	axios.request(options)
		.then((response) => {
			res.json(response.data)
		})
		.catch((error) => console.log(error))
})

app.listen(3001, () => console.log(`Server is runing on port ${PORT}`))
