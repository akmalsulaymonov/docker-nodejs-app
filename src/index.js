const express = require('express')
const app = express()

app.get('/', (req, res) =>
    res.json({ msg: 'Docker 🐳' }) 
)

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`app on http://localhost:${port}`) );