//@ts-check

/**
 * * Library imports
 */
import mongoose from 'mongoose'
// ? https://www.npmjs.com/package/dotenv
require('dotenv').config()

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as Parameters<typeof mongoose.connect>[1]

const DB_URL = process.env.DB_URL as string

mongoose.set('strictQuery', true)

export async function connectDb() {
  try {
    await mongoose
      .connect(DB_URL, options)
      .then(() => console.log(`Mongoose connected to MongoDb database`))
  } catch (error) {
    throw error
  }
}
