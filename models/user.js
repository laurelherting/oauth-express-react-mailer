const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// First argument is name of collection, second 
// argument userSchema
mongoose.model('users', userSchema);

