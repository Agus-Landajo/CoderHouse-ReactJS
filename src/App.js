import "./App.css";
import Header from "./components/Header";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import CartContext from "./components/CartContext";

function App() {
  return (
    <CartContext>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContext>
  );
}

export default App;
