var express = require('express')
var router = express.Router()
// var mongoose = require('mongoose')
var Picture = require('../models/Picture.js')

var cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

/* GET ALL PICTURES */
router.get('/', function (req, res, next) {
  Picture.find(function (err, products) {
    if (err) return next(err)
    res.json(products)
  })
})

/* GET SINGLE PICTURE BY ID */
router.get('/:id', function (req, res, next) {
  Picture.findById(req.params.id, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* SAVE PICTURE */
router.post('/', function (req, res, next) {
  Picture.create(req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* UPDATE PICTURE */
router.put('/:id', function (req, res, next) {
  Picture.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* DELETE PICTURE */
router.delete('/:id', function (req, res, next) {
  Picture.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
