const express = require('express')
const router = express.Router()
const AstronomyItem = require('../models/AstronomyItem')
const API_KEY = "gNMncZvQy1d1KpqbW5LE2ndgC155lmhvWnwEGeaE"
const axios = require('axios')

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

router.post('/astronomy', function(req, res) {
    try {
        astronomyItem1 = new AstronomyItem({
                    title: req.body.astronomyObject.title,
                    imageURL: req.body.astronomyObject.imageURL,
                    description: req.body.astronomyObject.description
        })
        astronomyItem1.save()
        res.send(astronomyItem1)
    }
    catch(error) {
        console.log(error)
        res.send(error)
    }
})

router.delete('/astronomy/:title', function(req, res) {
    console.log(req.params.title)
    try {
        AstronomyItem.findOneAndDelete({title: req.params.title}, function(err, astronomy) {
            res.send(astronomy)
        })
    }
    catch(error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router