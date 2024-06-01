import Image from "next/image";
import MainBanner from "./components/MainBanner";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      {/* <MainBanner/> */}
    </main>
  );
}
