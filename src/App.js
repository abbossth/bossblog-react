import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";
import "./assets/css/media.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
