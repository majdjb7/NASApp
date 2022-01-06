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

// router.delete('/transaction/:id', function(req, res) {
//     try {
//         Transaction.findOneAndDelete({_id: req.params.id}, function(err, transaction) {
//             res.send(transaction)
//         })
//     }
//     catch(error) {
//         console.log(error)
//         res.send(error)
//     }
// })

// })





module.exports = router