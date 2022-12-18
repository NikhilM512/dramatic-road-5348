const { Router } = require("express");
const Product = require("./product.model");
const productRouter = Router();


// "name": { "$regex": "m", "$options": "i" }

productRouter.get("/product", async (req, res) => {
    let categories = req.query.categories;
    if (categories) {
        try {
            // console.log(categories)
            let items = await Product.find({ "categories": categories });
            // let items = await Product.find({"title":{ "$regex": categories, "$options": "i" }});

            res.status(200).send(items);
        } catch (error) {
            console.log(error)
            res.status(401).send({ "err": "Somthing went wrong" })
        }
    } else {
        let items = await Product.find();
        // let items = await Product.find({"title":{ "$regex": categories, "$options": "i" }});

        res.status(200).send(items);
    }

});

productRouter.get("/product/search", async (req, res) => {
    let q = req.query.q;
    try {
        console.log(q)
        // let items = await Product.find({"categories":categories});
        let items = await Product.find({ "title": { "$regex": q, "$options": "i" } });

        res.status(200).send(items);
    } catch (error) {
        console.log(error)
        res.status(401).send({ "err": "Somthing went wrong" })
    }
});


productRouter.get("/product/:productId", async (req, res) => {
    let productId = req.params.productId.split(":").map(String)[1];
    try {

        let only = await Product.findOne({ _id: productId });
        return res.status(200).send(only);
    } catch (error) {
        console.log(error)
        res.status(401).send({ "err": "Somthing went wrong" })
    }
});

productRouter.post("/product", async (req, res) => {
    const payload = req.body;
    const { title } = req.body;
    const existing = await Product.findOne({ title });
    if (existing) {
        res.status(401).send({ message: "Product allredy persent in cart" })
    } else {
        try {
            const new_cart = new Product(payload)
            await new_cart.save()
            res.status(200).send({ message: "Product created succefully" })
        } catch (error) {
            console.log(error)
            res.status(401).send({ "err": "Somthing went wrong" })
        }
    }
});

productRouter.delete("/product/:productId", async (req, res) => {
    const productId = req.params.productId.split(":").map(String)[1]
    console.log(productId)
    const existing = await Product.findOne({ _id: productId })
    if (!existing) {
        res.status(401).send({ message: "Product allredy deleted from product" })
    } else {
        try {
            await Product.findOneAndDelete({ "_id": productId })
            res.status(200).send({ message: "Product item deleted successfully" })
        } catch (error) {
            console.log(error)
            res.status(400).send({ "err": "Somthing went wrong" })
        }
    }
});

productRouter.patch("/product/:productId", async (req, res) => {
    const productId = req.params.productId.split(":").map(String)[1]
    const payload = req.body
    // const note = await NoteModel.findOne({_id:noteID})
    try {
        await Product.findByIdAndUpdate({ _id: productId }, payload)
        res.status(200).send({ message: "Product item updated successfully" })
    } catch (error) {
        console.log(error)
        res.status(401).send({ "err": "Somthing went wrong" })
    }
});




module.exports = productRouter;