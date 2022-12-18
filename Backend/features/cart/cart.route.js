const { Router } = require("express");
const Cart = require("./cart.model");
const cartRouter = Router();

cartRouter.get("/cart", async (req, res) => {
    try {
        let cart = await Cart.find();
        return res.status(200).send(cart);
    } catch (error) {
        console.log(error)
        res.status(401).send({ "err": "Somthing went wrong" })
    }
});

cartRouter.post("/cart", async (req, res) => {
    const payload = req.body;
    const { _id } = req.body;
    const existing = await Cart.findById({ _id:_id });
    if (existing) {
        res.status(401).send({ message: "Product allredy persent in cart" })
    } else {
        try {
            const new_cart = new Cart(payload)
            await new_cart.save()
            res.status(200).send({ message: "Cart added succefully" })
        } catch (error) {
            console.log(error)
            res.status(401).send({ "err": "Somthing went wrong" })
        }
    }
});

cartRouter.delete("/cart/:cartId", async (req, res) => {
    const cartId = req.params.cartId.split(":").map(String)[1]
    console.log(cartId)
    const existing = await Cart.findOne({_id:cartId})
    if(!existing){
        res.status(401).send({ message: "Product allredy deleted from cart" })
    }else{
        try {
            await Cart.findOneAndDelete({"_id":cartId })
            res.status(200).send({ message: "Cart item deleted successfully" })
        } catch (error) {
            console.log(error)
            res.status(400).send({ "err": "Somthing went wrong" })
        }
    }
});

cartRouter.patch("/cart/:cartId", async (req, res) => {
    const cartId = req.params.cartId.split(":").map(String)[1]
    const payload = req.body
    // const note = await NoteModel.findOne({_id:noteID})
    try {
        await Cart.findOneAndUpdate({ _id: cartId }, payload)
        res.status(200).send({ message: "Cart item updated successfully" })
    } catch (error) {
        console.log(error)
        res.status(401).send({ "err": "Somthing went wrong" })
    }
});

module.exports = cartRouter;