//@ts-check

/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/mongoose
import mongoose, { Document } from 'mongoose'

const Schema = mongoose.Schema

const foodSchema = new Schema({
  foodName: {
    type: String,
    require: true,
    unique: true,
  },
  foodDesc: {
    type: String,
    require: true,
    unique: true,
  },
  foodPrice: {
    type: String,
    require: true,
  },
})

export const FoodModel = mongoose.model('menu', foodSchema)
