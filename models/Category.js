var mongoose = require('mongoose');  
var CategorySchema = new mongoose.Schema({  
  Name: String,
  Product: String,
  Description: String
});
mongoose.model('Category', CategorySchema);
module.exports = mongoose.model('Category');