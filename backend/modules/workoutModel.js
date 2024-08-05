const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Define the Schema object

// Define the workout schema
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true }); // Add timestamps to keep track of creation and update times

// Create the Workout model using the schema
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
