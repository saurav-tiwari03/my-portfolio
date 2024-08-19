import mongoose from 'mongoose'

export const connect = async() => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL!);
    console.log('Database connection established');
  } catch (error) {
    console.log('Failed to connect with Database');
    console.log(error);
  }
}

