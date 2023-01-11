import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Stack } from '@mui/material';
import { Routes, Route } from 'react-router-dom'
import Register from "./pages/Register";

const App = () => {
  return (<>
      <div style={{ "minHeight": "100vh", "display": "flex", "flexDirection": "column", "justifyContent":"space-between" }}>
        <Navbar />
        <Routes>
          <Route path="/user-register"  element={ <Register /> } />
        </Routes>
        <Footer />
      </div>
  </>)
};

export default App;