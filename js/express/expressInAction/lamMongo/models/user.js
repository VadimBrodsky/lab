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

const noop = () => {};

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



