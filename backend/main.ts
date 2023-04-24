//@ts-check

/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/express
import express from 'express'
// ? https://www.npmjs.com/package/morgan
import morgan from 'morgan'
// ? https://www.npmjs.com/package/cors
import cors from 'cors'
// ? https://www.npmjs.com/package/body-parser
import bodyParser from 'body-parser'

import { connectDb } from './db/db'
import { router } from './routes/router'

import { FoodModel } from './models/food.model'

connectDb()

FoodModel.init()

const app = express()

const port = process.env.PORT || 5000

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode\nhttp://localhost:${port}`
  )
})
