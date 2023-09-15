const mongoose =require('mongoose')
const productSchema=mongoose.Schema({
    image:String
})
const productModel=mongoose.model
('images',productSchema)
module.exports=productModel