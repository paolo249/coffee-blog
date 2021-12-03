const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: {type: String, required: true},
  // date: {type: String, required: true},
  desc: {type: String, required: true},
  // image_path: {type: String, required: true}
}, {
  timestamps: true
});

module.exports = itemSchema;
