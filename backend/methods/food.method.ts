//@ts-check

/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/express
import { Request, Response } from 'express'

import { FoodModel } from '../models/food.model'

class FoodService {
  static async addFood(
    foodName: string,
    foodDesc: string,
    foodPrice: string,
    foodPicture: Buffer
  ) {
    try {
      const addNewFood = new FoodModel({
        foodName,
        foodDesc,
        foodPrice,
        foodPicture,
      })

      return await addNewFood.save()
    } catch (error) {
      throw new Error(`Failed to register: ${(error as Error).message}`)
    }
  }

  static async getFood() {
    const foodData = await FoodModel.find({})

    return foodData
  }
}

export const foodDbFunc = {
  addNewMenuItem: async (req: Request, res: Response) => {
    try {
      const { foodName, foodDesc, foodPrice, foodPicture } = req.body

      await FoodService.addFood(foodName, foodDesc, foodPrice, foodPicture)
      res.json({ status: true, success: 'Added a new menu item' })
    } catch (error) {
      res.json({ status: false, success: 'Failed to add a new menu item' })
    }
  },

  getMenuItems: async (req: Request, res: Response) => {
    try {
      let menuList = await FoodService.getFood()

      res.json({ status: true, success: menuList })
    } catch (error) {
      console.error((error as Error).message)
      res
        .status(500)
        .json({ status: false, error: "Didn't get any information" })
    }
  },
}
