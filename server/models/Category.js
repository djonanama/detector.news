const mongoose = require('mongoose')
const { Schema } = mongoose

const Record = new Schema({
  categor_id: Number,
  count_link: Number,
  description: String,
  name: String,
  slug: String,
  parent_id: Number,
})

module.exports = mongoose.model('Category', Record)
