const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    day: { type: String, required: true },
    month: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    link: { type: String, required: true }
}, {
  timestamps: true,
});

EventSchema.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;
  
    if (!this.createdAt) {
      this.createdAt = now;
    }
  
    next();
  });
  
  module.exports = mongoose.model("Event", EventSchema);
  