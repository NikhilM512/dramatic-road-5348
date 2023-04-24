import "./navbar.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Box, Button, Image, Show, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./sidebar";
import authlogout from "../../Redux/Auth/auth.action";
import Logo from "../../logoeatmore1.jpg" 
import { setFinalCartItems, setFinalCartPrice } from "../../Redux/Cart/action";

const GetData = async (values) => {
  let res = await axios.post(
    `https://eat-more3.onrender.com/users/singleuser`,
    values
  );
  return res;
};

const Navbar = () => {
  const [cartData, setCartData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [GST, setGST] = useState(0);
  const [RH, setRH] = useState('37.00');
  const [donation, setDonation] = useState('00');
  const [final, setFinal] = useState(0);

  const [name, setname] = useState("signup");
  const [totalprice,setTotalPrice]=useState(0);
  const { name: userName } = useSelector((store) => store.auth.user);
  // console.log((userName));

  const finalPrice = useSelector((store) => store.cart.finalPrice);
  const finalItems = useSelector((store) => store.cart.finalItems);
  let ID = JSON.parse(localStorage.getItem("id"));

  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const isAuth=useSelector((store)=>store.auth.isAuth)
  const adminAuth=useSelector((store)=>store.auth.adminAuth)

  console.log(isAuth,finalItems,finalPrice,"ABC")

  // if(isAuth || adminAuth){
  //   setname("signout")
  // }

  const handleClick = (e) => {
    e.preventDefault();
    setname("signup");
    navigate("/signup")
    dispatch(authlogout());
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    setname("signup");
    navigate("/login")
    dispatch(authlogout());
  };

  const idCollecter = () => {
    let datas = { _id: ID };
    GetData(datas)
      .then((res) => {
        let firstName = res.data.split(" ");
        setname(firstName[0]);
      })
      .catch((e) => {
        setname("signup");
        console.log(e);
      }).finally(()=>{
        // fetchCartData()
      })
  };
  console.log(ID);

  const fetchCartData = () => {
    fetch("https://creepy-fawn-purse.cyclic.app/api/cart").then((res) => {
      return res.json()
    }).then((res) => {
      setCartData(res)
      setTotalItems(res.length)
      dispatch(setFinalCartItems(res.length))
      setCartData(res)
      Calculations()
    }).catch((err) => {
      console.log(err)
    })
  }

  const Calculations = () => {
    let price = 0;
    for (let i = 0; i < cartData.length; i++) {
      price += ((+cartData[i].price) * (cartData[i].qty))
    }
    let Gst = price * 0.18;
    let finalPrice = price + Gst + (+RH) + (+donation) - discount
    setSubtotal(price.toFixed(2))
    setGST(Gst.toFixed(2))
    setFinal(finalPrice.toFixed(2))
    dispatch(setFinalCartPrice(finalPrice.toFixed(0)));
  }

  useEffect(() => {
    let temp = +localStorage.getItem("totalcart") || 0;
    setTotalPrice(temp)
    if (ID) {
      idCollecter();
      //  fetchCartData()
    }

    if(isAuth || adminAuth){
    setname("signout")
    }

    // fetchCartData()
    
  }, [finalPrice,finalItems]);

  const handleIt = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="nav_main" style={{display:"flex",justifyContent:'space-between',alignItems:"center",width:'100%',position:'relative'}}>
        <div className="left_side" style={{display:"flex",justifyContent:'space-around',position:'absolute',left:'5%'}}>
          <Link to="/">
            <Image className="logo_img" src={Logo} alt="KGF_Logo" />
          </Link>
          <Show breakpoint="(min-width: 680px)">
            <b>
              <Link className="link" to="/menu">
                Menu
              </Link>
            </b>
            <b>
              <Link className="link" to="/deals">
                Deals
              </Link>
            </b>
          </Show>
        </div>
        <Show breakpoint="(min-width: 680px)"  style={{position:'absolute',bottom:'0px'}}>
          <div className="right_side"  style={{position:'absolute',right:'0',display:"flex",justifyContent:'center',alignItems:"center"}}>
            <span >
              <img style={{height:"30px",width:"33px"}} src="/login2.png" alt="abc" />
            </span>
            {/* <b> */}
              <Link  className="link" to={userName ? "/" : "/login"}>
              <Text fontSize={18} fontWeight={'bold'}>{userName ? userName : "Login"}</Text>
              </Link>
            {/* </b> */}
            <Box borderLeft="4px solid grey" m="1%" height="33px"></Box>
            {userName ? (
              <Button
                colorScheme="grey"
                onClick={handleClick2}
                color="white"
                bgColor="black"
              >
                Signout
              </Button>
            ) : (
              <Link to={"/signup"}>
              <Button
                colorScheme="grey"
                onClick={handleClick}
                color="white"
                bgColor="black"
                marginTop={'0%'}
              >
                Signup
              </Button>
            </Link>
            )}

            <h6 className="cartCountItems">₹{finalPrice}</h6>

            <Button position={'relative'} bgColor="white" onClick={() => navigate("/cart")}>
              <img className="cart_img"  src="/cart.svg" alt="cartBoxImage" />
              <Text position={"absolute"} fontSize={20} top="25%" right="45%">{finalItems}</Text>
            </Button>
            
          </div>
        </Show>
        <Show breakpoint="(max-width: 680px)">
          <Sidebar
            price={finalPrice}
            handleClick={handleClick}
            handleClick2={handleClick2}
            ID={ID}
            name={name}
            items={finalItems}
            userName={userName}
          />
        </Show>
      </div>
    </>
  );
};

export default Navbar;