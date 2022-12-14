require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const userRoute = require("./features/user/user.route");
const productRouter = require("./features/product/product.route");
const cartRouter = require("./features/cart/cart.route");


const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRoute);
app.use("/api",productRouter);
app.use("/api",cartRouter);



app.listen(PORT, async () => {
    await connect();
    console.log(`Listening at http://localhost:${PORT}`);
})