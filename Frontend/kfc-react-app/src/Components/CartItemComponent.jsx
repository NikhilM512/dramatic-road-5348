import React, { useEffect } from "react";
import styles from "./styles/Cart.module.css";

function CartItemComponent({ data, handleclick }) {
 
  return (
    <div>
      {data.length === 0 ? (
        <div>
          {" "}
          <div className={styles.container}>
            <div className={styles.bars}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
                alt=""
              />
              <h1 className={styles.heading}>My Cart</h1>
            </div>
          </div>
          <div className={styles.emptyCart}>
            <div className={styles.emptyCartC}>
              <span className={styles.emptyCartH}>
                YOUR CART IS EMPTY. LET'S START AN ORDER!
              </span>
              <button className={styles.emptyCartbtn}>Start Order</button>
            </div>{" "}
            <img
              className={styles.emptyCartimg}
              src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.bars}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
              alt=""
            />
            <h1 className={styles.heading}>My Cart</h1>

            <div className={styles.innerCantainer}>
              <div className={styles.cartCompo}>
               {/* <Cartitems data={data} handleclick={handleclick} />*/}
              </div>

              <div>
                {/*<CartPriceComponent />*/}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItemComponent;
