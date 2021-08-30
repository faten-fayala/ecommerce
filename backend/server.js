import express from 'express'
import connectDB from './config/db.js'

import dotenv from'dotenv'
import cors from 'cors'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
connectDB()
const app=express()
dotenv.config()
app.use(cors())
// const PORT= process.env || 5000
app.get( '/', (req,res)=> {
    res.send('api is running ')
})

app.use('/api/products',productRoutes)
app.use(notFound)
app.use(errorHandler)

 const PORT = process.env.PORT || 5000
app.listen(PORT, (err)=> {
    err ? console.log(err) : console.log(`the server is runnig on port ${5000}`.yellow.bold)
})