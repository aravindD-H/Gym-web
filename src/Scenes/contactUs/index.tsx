import { SelectedPage } from '@/Shared/types'
import { motion } from 'framer-motion';
import {useForm} from "react-hook-form";
import coach01 from "@/assets/coach01.jpg";
import HText from '@/Shared/HText';



type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = ` mt-5 w-full rounded-lg bg-gray-20 
    py-3 placeholder-black `;

    const {
        register,
        trigger,
        formState: {errors}
        } = useForm()

        const onSubmit = async(e:any) => {
            const isValid = await trigger();
            if(!isValid) {
                e.preventDefault();
            }
        }

     
    
    

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)} >
                {/* Header */}
                <motion.div className= "md:w-3/5"
                initial="hidden"
                whileInView= "visible"
                viewport={{once: true, amount: 0.6}}
                transition={{ duration :.5}}
                variants={{
                  hidden : {opacity: 0, x:-50},
                  visible: {opacity: 1, x:0}
                }}
                >
                    <HText>
                        <span className= "text-primary-500">JOIN US</span> TO GET IN SHAPE
                    </HText>
                    <p className= "my-5">
                        Have you ever thought how you wanted to look what but coundn't not achive it due to many reason like no motivation, lack of proper knowledge on workout and dieting, no visble progress and lot more !! but do't worry you came to the right place in {" "} <span  className="text-primary-500"> PUMP FACTORY </span> we take care of evrything. The only main responsiblity you have to  is not hesitate and {" "} <span className= "text-primary-500">JOIN US </span>.
                    </p>
                </motion.div>
                {/* form and img*/}
                <div className= "mt-10  justify-between gap-8 md:flex">
                    <motion.div
                        className= "mb-10 gap-5 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView= "visible"
                        viewport={{once: true, amount: 0.6}}
                        transition={{ duration :0.5}}
                        variants={{
                            hidden : {opacity: 0, y:50},
                            visible: {opacity: 1, y:0}
                        }}>
                        
                        <form
                        target= "_blank"
                        onSubmit={onSubmit}
                        action= "https://formsubmit.co/aravindh937@gmail.com"
                        method = "POST"
                        >
                            <input
                            className = {inputStyles}
                            type = "text"
                            placeholder= " NAME" 
                                {...register("name", {
                                    required: true,
                                    maxLength : 50,
                                })} />
                            {errors.name && (
                                <p className= "mt-10 text-black">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max Length is 50 words."}
                                </p>
                            )}

                            <input
                            className = {inputStyles}
                            type = "text"
                            placeholder= " EMAIL" 
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i,
                                })} 
                                />
                            {errors.email && (
                                <p className= "mt-1 text-black">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invaild email address."}
                                </p>
                            )}

                            <textarea 
                            className = {inputStyles}
                            rows = {3}
                            cols={30}
                            placeholder= " MESSAGE" 
                                {...register("message", {
                                    required: true,
                                    maxLength : 500,
                                })} />
                            {errors.message && (
                                <p className= "mt-1 text-black">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max Length is 500 words."}
                                </p>
                            )}

                            <button type="submit"
                            className= "mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white ">
                                SUBMIT
                            </button>

                        </form>

                    </motion.div>

                    <motion.div className= "relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView= "visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay: 0.5 ,duration :0.5}}
                    variants={{
                        hidden : {opacity: 0, y:50},
                        visible: {opacity: 1, y:0}
                    }}>
                        <div className= 
                        "md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] ">
                            <img className="w-full rounded-3xl pt-5 " alt= "contectUS" src={coach01}></img>

                        </div>

                    </motion.div>
                </div>
            </motion.div>       
    </section>
  )

} 


export default ContactUs;