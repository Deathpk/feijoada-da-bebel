import Image from "next/image";
import MainBanner from "./components/MainBanner";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden h-full">
      <Navbar/>
      <MainBanner/>
      <AboutUs/>
      <Menu/>
      <Contact/>
      <Footer/>
    </main>
  );
}
