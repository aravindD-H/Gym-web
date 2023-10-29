import {  useState } from "react" ;
import { Bars3BottomRightIcon , XMarkIcon } from "@heroicons/react/24/solid";
import gym02 from "@/assets/gym02.png";
import Link from "./Link";
import { SelectedPage } from "@/Shared/types";
import useMediaQuery from "@/hooks/useMeadiaQuery";
import ActionButton from "@/Shared/ActionButton";


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void; 
};

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled,setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const navbarBackground = isTopOfPage ? "" :  "bg-white drop-shadow ";

  return (

    <nav>
        <div className= {`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 bg-grey-20`}>
        
            <div className= {`${flexBetween} mx-auto w-5/6`}>
            
                <div className= {`${flexBetween} w-full gap-16`}>
                
                    <div className= "flex gap-10  w-42">
                    <img alt="Logo" src = {gym02}  width={69}/>
                    <h2 className= "font-Creepster w-24 text-2xl font-light" >PUMP FACTORY</h2>
                    </div>

                    {isAboveMediumScreens ? (
                    <div className= {`${flexBetween} w-full`}>
                        <div  className= {`${flexBetween} gap-8 txt-sm `}>
                            <Link page="Home" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                            <Link page="Benefits" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                            <Link page="Our Classes"  selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                            <Link page ="Contact Us" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                        </div> 

                        <div className= {`${flexBetween} gap-8`}>
                            <p>Sig In :</p>
                            <ActionButton setSelectedPage = {setSelectedPage}>Join The Family</ActionButton>
                        </div>
                    </div> 
                    ) : (
                        <button className="rounded-full bg-secondary-500 p-2" 
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <Bars3BottomRightIcon className="h-6 w-6 text-black"/> 
                            
                        </button>
                    )}
                   
                </div>
            </div>
       </div> 

       {/* Toggle Menu */}
       {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] drop-shadow-xl bg-gray-20">
       {/* close Menu icon */}
        <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-10 w-10 text-gray-400"/>
            </button>
        </div>

            {/*Menu */}
            <div  className= "ml-[33%] flex  flex-col gap-10 text-2xl">
                        <Link page="Home" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                        <Link page="Benefits" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                        <Link page="OurClasses"  selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                        <Link page = "Contact Us" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
            </div> 
        </div>
       )}
    </nav>
  )
    
}

export default Navbar