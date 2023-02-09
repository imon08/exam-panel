import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-between w-full">
        <Navbar />        
        <RightSideBar />
      </div>
      
    </div>
  );
}
