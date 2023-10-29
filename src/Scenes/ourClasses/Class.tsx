type Props = {
    name: string;
    description?: string;
    image: string;
}

const Class = ({name, description, image}: Props) => {
    const overlayStyles =`p-5 absolute z-30 flex 
    h-[320px] w-[500px] flex-col items-center justify-center 
    whitespace-normal  text-center text-black bg-gray-20 
    opacity-0 transition duration-500 hover:opacity-100`;

  return (
   <li className="relative mx-5 inline-block h-[380] w-[450]">
    <div className= {overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
    </div>
    <img src={image} alt={`${image}`} className="w-[500px] h-[320px]"  />
   </li>
  )
}

export default Class