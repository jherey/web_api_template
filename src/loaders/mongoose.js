import mongoose from 'mongoose';
import config from '../config';

export default async () => {
  const defaultOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  };

  const connection = await mongoose.connect(config.databaseURL, defaultOptions);
  return connection.connection.db;
};
