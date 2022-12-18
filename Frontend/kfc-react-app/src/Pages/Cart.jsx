import React, { useEffect, useState } from "react";
import CartItemComponent from "../Components/CartItemComponent";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Components/main_button/Button";
import { deleteItem, getcartItem } from "../Redux/cartRedux/cart.actions";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const  {data} = useSelector((store) => store.cart);
  const [products, setProducts] = useState(data);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleclick = (id) => {
    setTimeout(() => {
       dispatch(getcartItem());
    setProducts(data);
   },1000)
     dispatch(deleteItem(id));
 };
  useEffect(() => {
    dispatch(getcartItem());
},[products])

  return (
    <div>
      <div className="black">
        <b>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</b>

        <Button
          onClick={() => {
            navigate("/menu");
          }}
        >
          Order More
        </Button>
      </div>
      <CartItemComponent data={data} handleclick={handleclick} />
    </div>
  );
}

export default Cart;
