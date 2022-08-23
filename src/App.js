import './App.scss';
import { Routes, HashRouter} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Product from "./components/Product";
import About from "./components/About";

function App() {
    return (
        <>
            <Routes  basename="/rsite">
                <HashRouter path="/" element={<Layout />}>
                    <HashRouter index element={<Home />} />
                    <HashRouter path="about" element={<About />} />
                    <HashRouter path="/product" element={<Product />} />
                    <HashRouter path="contact" element={<Contact />} />
                </HashRouter>
            </Routes>
        </>
    )
}

export default App;
