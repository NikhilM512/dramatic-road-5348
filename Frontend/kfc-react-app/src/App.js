import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/home_footer/Footer"
import AllRoutes from "./Routes/AllRoutes";
import SignUp from "./Pages/signup_login/signup";
import Login from "./Pages/signup_login/Login";
import { Admin } from "./Components/Admin/Admin";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <AllRoutes /> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Admin />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
