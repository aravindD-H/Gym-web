import Navbar from "@/Scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/Shared/types";
import Home from "@/Scenes/Home";
import Benefits from "@/Scenes/benefits";
import OurClasses from "@/Scenes/ourClasses";
import ContactUs from "@/Scenes/contactUs";
import Footer from "@/Scenes/footer/index";

function App() {
const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true); 

useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY === 0){
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if(window.scrollY !== 0) setIsTopOfPage(false);
  };
  window.addEventListener("scroll",handleScroll);
  return() => window.removeEventListener("scroll", handleScroll);
},[]);


  return (
    <>
      <div className="app bg-white ">
        <Navbar 
        isTopOfPage= {isTopOfPage}
        selectedPage = {selectedPage}
         setSelectedPage = {setSelectedPage}
        />

      <Home 
      setSelectedPage = {setSelectedPage} />

      <Benefits
      setSelectedPage = {setSelectedPage} />

      <OurClasses
       setSelectedPage = {setSelectedPage} />

      

      <ContactUs 
        setSelectedPage = {setSelectedPage} />
      


      <Footer/>

      </div>

      
        
       
    </>
  );
}

export default App
