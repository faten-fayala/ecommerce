import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'


//@desc   fetch all products
//@route   Get /api/products
//@access  public
const getProducts=asynHandler(async(req,res)=> {
    const products=await Product.find({})
    res.json(products)
})


 //@desc   fetch single product
//@route   Get /api/products/:id
//@access  public
const getProductsById=asynHandler(async(req,res)=> {
    const product= await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error("product not found")
    }
})
export {getProducts, getProductsById}