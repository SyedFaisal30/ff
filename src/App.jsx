import "./App.css";
import Detail from "./components/Detail";
import Header from "./components/Header"; // Ensure this path matches the location of your Header component
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { CartProvider } from "./store/CartContext";
function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <hr />
        <Outlet />
        <hr />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
