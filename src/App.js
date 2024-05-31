import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./styles/main.css";
import "./styles/reset.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import ProjectDetails from "./pages/ProjectDetails";


function App() {
  return (
    <div className="App">
  <Router>
    <ScrollToTop/>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/projects/:id" element={<ProjectDetails />} />
    <Route path="/contacts" element={<Contacts/>} /> 
  </Routes>
    <Footer />
  </Router>
    </div>
  );
}

export default App;
