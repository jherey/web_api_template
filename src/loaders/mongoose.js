import mongoose from 'mongoose';

/**
  *@description Function to connect to MongoDB
  *@param  {string} url
  *@returns {object} - new mongoDB connection
  */
export default async function connectToDatabase(url) {
  try {
    const defaultOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    };

    return await mongoose.connect(url, defaultOptions);
  } catch (error) {
    throw error;
  }
}
