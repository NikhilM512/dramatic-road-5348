const { Schema, model } = require("mongoose");

const productSchema= new Schema({
    image:String,
    title:String,
    desc:String,
    categories:String,
    price:String,
    serve:String,
    type:String
})

const Product= model("product",productSchema)
module.exports= Product;