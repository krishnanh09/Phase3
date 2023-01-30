const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let chat = new Schema({
  id: {
    type: Number
  },
  message: {
    type: String
  },
  isBot: {
    type: Boolean
  }
}, {
  collection: 'Chat'
})
module.exports = mongoose.model('Chat', chat)