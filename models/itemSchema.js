const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  desc: {
    type: String, 
    required: true
  },
  // image_path: {type: String, required: true}
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
  timestamps: true
});

module.exports = itemSchema;
