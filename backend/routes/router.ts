//@ts-check

/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/express
import express from 'express'

import { foodDbFunc } from '../methods/food.method'

export const router = express.Router()

router.get('/', (req, res) => {
  res.send('development')
})

router.post('/add-food', foodDbFunc.addNewMenuItem)

router.get('/get-menu', foodDbFunc.getMenuItems)
