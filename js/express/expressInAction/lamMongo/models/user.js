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

// need this empty function for bcrypt
const noop = () => {};

// hash the password before saving it
userSchema.pre('save', function (done) {
  const user = this;
  if (!user.isModified('password')) { return done(); }

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) { return done(err); }

    bcrypt.hash(user.password, salt, noop, (err, hashedPassword) => {
      if (err) { return done(err); }
      user.password = hashedPassword;
      done();
    });
  });
});

// compare hashed password with input
userSchema.methods.checkPassword = function (guess, done) {
  bcrypt.compare(guess, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

// getter for user name
userSchema.methods.name = () => this.displayName || this.username;

// Attach schema to a model and export it
const User = mongoose.model('User', userSchema);
module.exports = User;
