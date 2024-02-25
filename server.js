const express = require('express')
const app = express()
const port = 3000
const keyword = 'keyword'
const axios = require('axios')

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/says', (req, res) => {
    res.send(`says endpoint`)
})

app.get(`/say`, (req, res) => {

    const word = req.query.keyword
    console.log(word)

    const options = {
        method: 'GET',
        url: `https://ywxdhffjdetoxqqticy22boeii0lbbwo.lambda-url.us-east-1.on.aws`,
        params: {
            keyword: word
        }
    }
    
    let response = 'response from lambda'

    axios(options)
        .then(resp => {
            if(resp.data) {
                response = resp.data
                res.send(response)
            }
        })
})

app.listen(port, () => {
    console.log(`Example app listening a http://localhost:${port}`)
})