require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// creates an express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
   .then(() => {
       // listen for requests
       app.listen(process.env.PORT, () => {
           console.log('connected to db and listening on', process.env.PORT);
       });
   })
   .catch((error) => {
       console.log(error);
   });

// we can use postman to try out different routes and requests before making it in frontend
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);
