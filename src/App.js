import { Footer, Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, SignUp, Services, Products} from "./pages";

const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sign-up"  element={<SignUp />} />
            <Route path="/services"  element={<Services />} />
            <Route path="/products"  element={<Products />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;