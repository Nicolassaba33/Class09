import "./App.css";

// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

// SPA => SINGLE PAGE APPLICATION => APLICACION DE UNA SOLA PAGINA

//PAGES
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
