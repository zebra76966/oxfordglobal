import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/login";
import TwoStepSignup from "./components/auth/signup";
import ForChauffers from "./components/forchauffeurs/forchauffers";
import AboutUs from "./components/about/about";
import BookingWizard from "./components/forms/booking/booking";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<TwoStepSignup />} />

        <Route path="/" element={<Main />} />
        <Route path="/forchauffeurs" element={<ForChauffers />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/booking" element={<BookingWizard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
