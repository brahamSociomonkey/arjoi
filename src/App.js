import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Css/index.css";
import "./Css/utility.css";
import "./Css/animations.css";
import "./Css/custom-slick-rules.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
