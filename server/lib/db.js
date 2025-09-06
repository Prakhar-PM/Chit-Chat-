
import mongoose from 'mongoose';
// function to connect to mongoDB database
// const mongoose = require('mongoose'); this is not feasible with esm-6 moreover when we have used type ; module in our 

export const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
        console.log("DB connected successfully");
    });
    await mongoose.connect(process.env.DB_CONNECT_KEY);
  } catch(err) {  
    console.log("Error in DB connection", err);
  }
}

