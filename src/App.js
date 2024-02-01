import Hero from "./components/Hero";
import Header from "./components/Header";
import Wtf from "./components/Wtf";
import Watch from "./components/Watch";
import Domination from "./components/Domination";
import Beware from "./components/Beware";
import Howto from "./components/Howto";
import Joinus from "./components/Joinus";
import Footer from "./components/Footer";
import Space from "./components/Space";

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Space />
      <Wtf />
      <Watch />
      <Domination />
      <Beware />
      <Howto />
      <Joinus />
      <Footer />
    </div>
  );
}

export default App;
