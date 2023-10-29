import ActionButton from '@/Shared/ActionButton';
import { SelectedPage } from '@/Shared/types'
import useMediaQuery from '@/hooks/useMeadiaQuery';
import gym07 from "@/assets/gym07.jpeg";
import gym06 from "@/assets/gym06.png";
import gym05 from "@/assets/gym05.jpg";
import gym10 from "@/assets/gym10.jpg";
import FitKit from "@/assets/FitKit.png";
import Cosco from "@/assets/Cosco.png";

import newHomeimg from "@/assets/newHomeimg.jpeg";
import styles from "./Home.module.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  
  return (
    <section id="home" className = "gap-16 bg-gray-20 pt-20  md:h-full md:-pb-10 border-b-black">
     
      {/* Main Header and photo*/}
      <motion.div 
      className= "mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
          {/*Header*/}
          <div className= "z-10 mt-32 md:basis-3/5 ">
            {/*Topic*/}
            <motion.div 
            className="md:-mt-20"
            initial="hidden"
            whileInView= "visible"
            viewport={{once: true, amount: 0.6}}
            transition={{duration :1.5}}
            variants={{
              hidden : {opacity: 0, x:350},
              visible: {opacity: 1, x:0}
            }}>
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                  
                  <h1 className= {styles.h10}>PUMP FACTORY</h1>
                  <h2 className= {styles.h11}>FIND YOUR ENERGY</h2> 
                  
                </div>
              </div>

                <p className= "mt-8 text-s">Unrivaled Gym. Unparalleled Training Fitness Classes. 
                  World Class Training Center to get your Body Shape that you have also ways Dream of. 
                  Get Your Dream Body Now , With US 
                </p>

            </motion.div>

            {/* Ation button */}
            <motion.div 
            className= "mt-8 flex items-center gap-8 "
            initial="hidden"
            whileInView= "visible"
            viewport={{once: true, amount: 0.6}}
            transition={{delay:0.5, duration :1}}
            variants={{
              hidden : {opacity: 0, x:-50},
              visible: {opacity: 1, x:0}
            }}>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 "
              onClick = {() => setSelectedPage(SelectedPage.ContactUs)}
              href= {`#${SelectedPage.ContactUs}`}>
                <p>Learn More About Us</p>
              </AnchorLink>
            </motion.div>

          </div>

          {/*IMAGE*/}
          <div className="flex basis-3/5 justify-center md:z-10 md:ml-32 md:-mt-11 md:justify-items-end  ">
            <img className= " rounded-3xl drop-shadow md:mt-11 " src= {newHomeimg} alt ="Home Page" />
          </div>
      </motion.div>

      {/* Spnsors */}
      {isAboveMediumScreens && (
       <div className= "h-[150px] w-full py-10 bg-white ">{/* try white in place of gray*/}
          <div className= "mx-auto w-5/6">
            <div className="flex  items-center justify-between gap-18">
              <img className= {styles.imga} src={gym07} alt="sponsor"></img>
              <img className= {styles.imga} src={gym06} alt="sponsor"></img>
              <img className= {styles.imga} src={gym05} alt="sponsor"></img>
              <img className= {styles.imga} src={gym10} alt="sponsor"></img>
              <img className= {styles.imga} src={FitKit} alt="sponsor"></img>
              <img className= {styles.imga} src={Cosco} alt="sponsor"></img>


            </div>
          </div>
       </div> 
      )}
    </section>
  )
}

export default Home;