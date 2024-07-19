const mongoose = require('mongoose');
const runSeeders = require('./seeders');

const mongoURI = 'mongodb://localhost:27017/school';

// Function to connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to MongoDB');
    await runSeeders();
    console.log('Seeding done');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // Exit the process with failure code
    process.exit(1); 
  }
};

module.exports = { connectToDatabase };
