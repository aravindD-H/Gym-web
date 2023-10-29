import HText from '@/Shared/HText';
import { SelectedPage, ClassType } from '@/Shared/types';
import class00 from "@/assets/class00.jpg";
import class01 from "@/assets/class01.jpg";
import class02 from "@/assets/class02.jpg";
import class03 from "@/assets/class03.jpg";
import class04 from "@/assets/class04.jpg";
import class05 from "@/assets/class05.jpeg";
import class06 from "@/assets/class06.jpg";
import class07 from "@/assets/gym11.jpeg";
import { motion } from 'framer-motion';
import Class from "./Class"

const classes : Array<ClassType> = [
{
  name: "Weight Training Classes",
  description: "resistance to do exercises that challenge all the muscle groups of the body, including the chest, back, shoulders, arms (biceps, triceps), core, legs (quadriceps, hamstrings, calves) and glutes.",
  image : class00,
},
{
  name: "Zumba Classes",
  description: "The main thing to expect from your Zumba class is that you'll have plenty of fun! Zumba is a dance-based fitness technique that combines elements of salsa, samba, merengue, reggaeton and hip-hop with cardio exercise moves to create a fast-paced, heart-pumping workout. ",
  image: class01,
},
{
  name: "Yoga",
  description: "Every class has an array of breathing techniques, a variety of asanas and meditation techniques. Helps in improving confidence & balance while gaining a stronger body in the process. ",
  image: class07,
},
{
  name: "Cardio + Weight Training Classes",
  description: " Each session in the this plan is created to address calorie-burning goals and focuses on specific muscle groups . The workouts are fun and functional, and you can choose the session that suits you the most and train .",
  image: class02,
},
{
  name: "Cardio Training Classes",
  description: "Cardio is a workout format that combines high-intensity lower-impact training with other key elements of fitness like strength, mobility, and skill-building in a balanced way.",
  image: class03,
},
{
  name: "Core strengthening Training Classes",
  description: " Core training is beneficial for everyone as it helps to develop and strengthen the stabilizer muscles of the body. Weakness in any of these core muscles can lead to lower back pain or a protruding waistline and Keeping these core muscles strong ",
  image: class05,
},
{
  name: "Boxing Classes",
  description: "Boxing has now become more than just a professional sport. Fitness boxing - a new fitness regime for people who want to lose fat, gain lean muscles and develop an athletic body. It is suitable for both men and women at any age group or fitness level.Contrary to what most people think, it doesn’t involve getting into a ring and taking punches. But instead, it has adapted movements of the sport as exercises that will get you fit, all while helping you learn some serious skills!  ",
  image: class06,
},
{
  name: "Core strengthening Training Classes",
  
  image: class04,
},

]

type Props = {
    setSelectedPage : (vlaue:SelectedPage) => void;
}

const OurClasses = ({setSelectedPage }: Props) => {
  return (
   <section id="ourclasses" className='w-full bg-white py-40'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)} >
            <motion.div 
            className="mx-auto w-5/6" 
            initial="hidden"
            whileInView= "visible"
            viewport={{once: true, amount: 0.6}}
            transition={{ duration : 1 }}
            variants={{
              hidden : {opacity: 0, x:-50},
              visible: {opacity: 1, x:0}
            }}>
            
            <div className="md:w-3/5">
              <HText>OUR CLASSES</HText>
              <p className="py-5">In {' '} <span className="text-primary-500">PUMP FACTORY</span> we offer variety of classes such as Strength Traning, Cardio Classes ,Zumba Classes, Yoga , Indoor Sport and much more .  </p>
            </div>
            </motion.div>
            <div>
              <div className= "mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className= "w-[2800px] whitespace-nowrap ">
                  {classes.map((item, index) => (
                    <Class  
                    key = {`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    />
                  ))}
                </ul>
              </div>
            </div>
        </motion.div>
   </section>
  )
}

export default OurClasses