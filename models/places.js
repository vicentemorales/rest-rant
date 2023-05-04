const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  cuisines: { type: String, default: 'Food and Drink' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)







/*
module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thaiFood.png'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cat.png'
}]
*/
