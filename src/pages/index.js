import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import QuestionSection from "@/components/QuestionSection";
import RightSideBar from "@/components/RightSideBar";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex justify-between w-full">
        <div className="w-[70%] lg:w-[85%]">
          <Navbar />
          <QuestionSection />
        </div>
        <div className="w-[30%] lg:w-[15%]">
          <RightSideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
