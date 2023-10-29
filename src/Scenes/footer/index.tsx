import gym02 from "@/assets/gym02.png";



const Footer = () => {
  return (
    <footer className="bg-gray-20 pb-12 pt-8">
        
                <div className="flex justify-center gap-5  pb-5">
                <img src={gym02} width={69}></img>
                <h2 className= "font-Creepster w-24 text-2xl font-light" >PUMP FACTORY</h2>
              
                </div>
                  
                
                <div className=" justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <p className="my-5">
                  we are best in this field and we want our member to have nothing but the {" "} <span className=" text-primary-500">best</span> .Existing and New member who are planning to join we are gratfully that you have chosen <span className=" text-primary-500">PUMP FACTROY</span>. Have Any doubt Contact US
                </p>
                <p>© PUMP FACTORY All Rights Reserved.</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">Link</h4>
              <p className="my-5">GitHub</p>
              <p className="my-5">Linkdin</p>
             
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">Contact Us</h4>
              <p className="my-5">(+91)9611061301</p>
              <p className="my-5">aravindh937@gmail.com</p>
            </div>

        </div>
    
    </footer>
  )
}

export default Footer