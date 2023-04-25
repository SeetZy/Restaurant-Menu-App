//@ts-check

/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/mongoose
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const foodSchema = new Schema({
  foodName: {
    type: String,
    require: true,
  },
  foodDesc: {
    type: String,
    require: true,
  },
  foodPrice: {
    type: String,
    require: true,
  },
  foodPicture: {
    type: String,
    require: true,
  },
})

export const FoodModel = mongoose.model('menu-item', foodSchema)
