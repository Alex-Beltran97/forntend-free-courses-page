import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoutes from "./helpers/PrivateRoutes";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import TestComponent from "./components/TestComponent";

const App = () => {
  return (<>
      <div style={{ "minHeight": "100vh", "display": "flex", "flexDirection": "column", "justifyContent":"space-between" }}>
        <Navbar />
        <Routes>
          <Route path="/prueba"  element={ <TestComponent /> } />
          <Route path="/user-register"  element={ <Register /> } />
          <Route path="/user-login"  element={ <Login /> } />
          <Route path="/" element={ <PrivateRoutes /> } >
            <Route path="" element={ <Home /> } />
            <Route path="home" element={ <Home /> } />
          </Route>
          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
        <Footer />
      </div>
  </>)
};

export default App;