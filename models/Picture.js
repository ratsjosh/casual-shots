var mongoose = require('mongoose')
var PictureSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  description: String,
  picture_url: String,
  updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Picture', PictureSchema)
