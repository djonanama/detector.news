const mongoose = require('mongoose')
const { Schema } = mongoose

const Record = new Schema({
  post_id: Number,
  date: Date,
  modified: Date,
  title: String,
  fimg_url: String,
  content: String,
  link_source_agent_page_id: Number,
  link_source: String,
  geo_locate: {
    value: String,
    label: String,
  },
  categories: [Number],
  tags: [Number],
  truth: Number,
  date_of_statement:Date,
  message:String,
})

Record.index({ title: 'text', content: 'text' })

module.exports = mongoose.model('Post', Record)
