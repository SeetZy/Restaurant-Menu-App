//@ts-check

/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/express
import { Request, Response } from 'express'

import { FoodModel } from '../models/food.model'

class FoodService {
  static async addFood(foodName: string, foodDesc: string, foodPrice: string) {
    try {
      const addNewFood = new FoodModel({ foodName, foodDesc, foodPrice })

      return await addNewFood.save()
    } catch (error) {
      throw new Error(`Failed to register: ${(error as Error).message}`)
    }
  }
}

export const foodDbFunc = {
  addNewMenuItem: async (req: Request, res: Response) => {
    try {
      const { foodName, foodDesc, foodPrice } = req.body

      await FoodService.addFood(foodName, foodDesc, foodPrice)
      res.json({ status: true, success: 'Added a new menu item' })
    } catch (error) {
      res.json({ status: false, success: 'Failed to add a new menu item' })
    }
  },
}
