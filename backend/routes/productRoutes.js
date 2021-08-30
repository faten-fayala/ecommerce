import express from 'express'
import {getProducts, getProductsById} from '../controllers/productController.js'
const router=express.Router()


// router.get( '/', getProducts)
router.route('/').get(getProducts)
router.route('/:id')
 router.get( '/:id', asyncHandler(async(req,res)=> {
     const product= await Product.findById(req.params.id)

     if (product) {
         res.json(product)
     } else {
         res.status(404)
         throw new Error("product not found")
     }
     
  }))
export default router