const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const SALT_FACTOR = 10;

const userSchema = mongoose.Schema({
  username: { type: String, required: true, uniue: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  displayName: String,
  bio: String
});

userSchema.methods.name = () => this.displayName || this.username;

