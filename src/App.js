import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";
import "./assets/css/media.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useSelector } from "react-redux";

const App = () => {
  const loggedIn = useSelector((state) => state.loginReducer.loggedIn);
  return (
    <>
      <ProtectedRoute isSignedIn={loggedIn}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<h2>Test</h2>} />
            <Route path="*" element={<h2>Not Found Auth</h2>}></Route>
          </Routes>
        </Layout>
      </ProtectedRoute>
      {!loggedIn && (
        <Routes>
          <Route path="/login" element={<h2>Login</h2>}></Route>
          <Route path="*" element={<h2>Not Found</h2>}></Route>
        </Routes>
      )}
    </>
  );
};

export default App;
