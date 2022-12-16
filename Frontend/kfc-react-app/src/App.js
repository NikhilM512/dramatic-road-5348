import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/home_footer/Footer"
import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
