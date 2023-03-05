const mongoose = require('mongoose');

const myDataSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const MyData = mongoose.model('MyData', myDataSchema);

module.exports = MyData;
