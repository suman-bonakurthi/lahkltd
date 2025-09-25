import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Solutions/>
      <Brands/>
      <Footer/>
    </div>
  );
}
