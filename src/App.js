import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import info from "./model/information";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content display={info.numOne} />
      <Content display={info.numTwo} />
      <Footer />
    </div>
  );
}

export default App;
