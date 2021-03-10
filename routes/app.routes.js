const express = require('express')
const router = express.Router()

let ToursModel = require('../models/Tours.model')


// will handle all GET requests to http:localhost:5005/api/tours
router.get('/tours', (req, res) => {
     ToursModel.find()
          .then((tours) => {
               res.status(200).json(tours)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })         
})

// will handle all POST requests to http:localhost:5005/api/create

router.post('/create', (req, res) => {  
    const {title, location, description, date} = req.body;
    ToursModel.create({title, description, location, date})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

// will handle all GET requests to http:localhost:5005/api/tours/:tourId

router.get('/tours/:tourId', (req, res) => {
    ToursModel.findById(req.params.tourId)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})

// will handle all DELETE requests to http:localhost:5005/api/tours/:id
router.delete('/tours/:id', (req, res) => {
    ToursModel.findByIdAndDelete(req.params.id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

// will handle all PATCH requests to http:localhost:5005/api/tours/:id
router.patch('/tours/:id', (req, res) => {
    let id = req.params.id
    const {name, description, location, date} = req.body;
    ToursModel.findByIdAndUpdate(id, {$set: {name, description, location, date }}, {new: true})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               console.log(err)
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
})

module.exports = router;