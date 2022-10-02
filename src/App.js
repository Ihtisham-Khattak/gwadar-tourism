import "./App.css";
import { Carousel } from "./components/Carousel";
import { Destination } from "./components/Destination";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { Selectes } from "./components/Selectes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selectes />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
