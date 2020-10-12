const mongoose = require('mongoose')
const { Schema } = mongoose

const Record = new Schema({
  page_id: Number,
  date: Date,
  modified: Date,
  title: String,
  fimg_url: String,
  content: String,
  type_s: {
    value: String,
    label: String,
  },
})

Record.index({ title: 'text', content: 'text' })

module.exports = mongoose.model('Page', Record)
