const express = require('express')
const router = express.Router()
const AstronomyItem = require('../models/AstronomyItem')
const API_KEY = "gNMncZvQy1d1KpqbW5LE2ndgC155lmhvWnwEGeaE"
const axios = require('axios')

router.get('/astronomy', async function(req, res) {
    try {
        await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then((response) => {
            // console.log(response.data)
            let title = response.data.title
            let imageURL = response.data.url
            let description = response.data.explanation
            res.send({  title: title,
                        imageURL: imageURL,
                        description: description
                    })
        })
    }
    catch(error) {
        console.log(error)
        res.send(error)
    }
})

// router.get('/galaxy', function(req, res) {
//     try {
//         AstronomyItem.find({}, function(err, astronomyItem) {
//             res.send(astronomyItem)
//         })
//     }
//     catch(error) {
//         console.log(error)
//         res.send(error)
//     }
// })






module.exports = router