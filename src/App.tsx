import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Products from "./views/Products";
import Shoes from "./views/Products/Shoes";
import Bags from "./views/Products/Bags";
import Jewelry from "./views/Products/Jewelry";
import Navbar from "./views/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Products" element={<Products />}>
          <Route path="shoes" element={<Shoes />} />
          <Route path="bags" element={<Bags />} />
          <Route path="jewelry" element={<Jewelry />} />
        </Route>
        {/* Add a default route */}
        <Route path="/" element={<Navigate to="/Home" />} />
      </Routes>
    </Router>
  );
};

export default App;
