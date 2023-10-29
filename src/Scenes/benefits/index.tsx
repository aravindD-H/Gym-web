import HText from "@/Shared/HText";
import { BenefitType, SelectedPage } from "@/Shared/types"
import { HomeModernIcon, AcademicCapIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/Shared/ActionButton";
import womenlife from "@/assets/womenlift.jpg";

const benefits: Array<BenefitType> = [
  {
    icon : <HomeModernIcon className="h-6 2-6"/>,
    title: "High-Quality Exercise Equipment",
    description: "All gym equipment are clean, well-maintained, and in good working order. We creating a highly connected fitness experience and leveraging wearables and heart rate monitors you can simplify fitness. We Have cutting-edge rowing machines , treadmills and a yoga sanctuary with mats, blocks, and bolsters, all exercise equipment help members exercise and meet their fitness goals.",  
  },
  {
    icon : <UserGroupIcon className="h-6 2-6"/>,
    title: "Thriving Community",
    description: "Human social connection is essential for health and happiness. Health clubs are an ideal place to satisfy both physical and social needs. Even though technology allows you to communicate with your members more effectively, Our gym actively find ways to create thriving fitness communities. The key to building a community is increasing member engagement as much as possible. We Encourage member involvement, host social activities, and promote group exercise to help build a thriving fitness community. ",
  },
  {
    icon : <AcademicCapIcon className="h-6 2-6"/>,
    title: "Expert and Pro Trainers",
    description: "A Fitness Trainer creates tailored fitness and wellness plans for individuals and groups. They assign exercise routines based on clients’ physical needs and monitor their progress. They Creating an environment that helps people meet their goals. Fitness trainers should have the skills to inspire and motivate their clients, including creating targeted fitness programs that are engaging and fun. ",
  },
  
];

const container = {
  hidden: {},
  visible : {
    transition : { staggerChildren : 0.2}
  }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;

}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <div >
        <section id="benefits"
        className="mx-auto min-h-full w-5/6  py-20" >
        <motion.div       
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
          >
            {/* header */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView= "visible"
            viewport={{once: true, amount: 0.6}}
            transition={{ duration :0.5}}
            variants={{
              hidden : {opacity: 0, x:-50},
              visible: {opacity: 1, x:0}
            }}>
              <HText>MORE THAN JUST A GYM. </HText>
              <p className="my-5 text-sm">
                We provide best in the class fitness equipment,trainers and 
                classes to get you to your ultimate fitness goals with ease. 
                We think of each and every member of this gym as a family member.</p>
                <p><strong>This is PUMP FACTORY</strong></p>
            </motion.div>

            {/*Benfits*/}
            <motion.div className="md:flex items-center justify-center gap-8 mt-5"
            initial = "hidden"
            whileInView= "visible"
            viewport={{once:true, amount : 0.5}}
            variants={container}
            >
              {benefits.map((benefit: BenefitType) => (
                <Benefit
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>

            {/* Graphocs and note*/}
            <div className= "mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
               {/* Graphics */}
                  <img className="mx-auto w-1/3  rounded-3xl  drop-shadow-2xl" src={womenlife} alt="women img">

                  </img>
                {/* note */}
                  <div>
                     {/* title */}
                     <motion.div className='relative'
                     initial="hidden"
                     whileInView= "visible"
                     viewport={{once: true, amount: 0.6}}
                     transition={{ duration :1}}
                     variants={{
                       hidden : {opacity: 0, x:-50},
                       visible: {opacity: 1, x:0}
                     }}>
                       <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                          <div className="relative">
                            <HText>
                              HUNDRED OF HAPPY MEMBERS GETTING{" "}
                              <span className="text-primary-500">FIT</span>
                            </HText>
                          </div>
                          
                        </div>
                      </motion.div>
                     {/* short note  */}
                      <motion.div 
                      initial="hidden"
                      whileInView= "visible"
                      viewport={{once: true, amount: 0.6}}
                      transition={{ delay: 0.5,duration :1}}
                      variants={{
                        hidden : {opacity: 0, x:50},
                        visible: {opacity: 1, x:0}
                      }} >
                        <p className="my-5">
                          Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                        </p>
                        <p className="my-5">
                        Train with the best experts in bodybuilding field. Your results will speak to themselves. Try the latest exercising trends, innovative equipment and special nutrition plans
                        </p>
                      </motion.div>
                     {/* note button */}
                      <motion.div className="relative mt-16"
                      initial="hidden"
                      whileInView= "visible"
                      viewport={{once: true, amount: 0.6}}
                      transition={{ delay: 0.5,duration :1}}
                      variants={{
                        hidden : {opacity: 0, x:50},
                        visible: {opacity: 1, x:0}
                      }} >
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles ">
                          <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                          </ActionButton>
                        </div>

                      </motion.div>
                  </div>
            </div>
          </motion.div>  
        </section>
    </div>
  )
}

export default Benefits