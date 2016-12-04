function Emitter() {
  this.events = {};
}

// Save all the event hanlders in an array
Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};


// Emit the event, call all the handlers
Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(listener => listener());
  }
};

module.exports = Emitter;
