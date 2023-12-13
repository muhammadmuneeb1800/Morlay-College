import Image from 'next/image'


export default function Card2({ itemstwo }) {
    return (
      <>
  
  <div className="flex overflow-x-auto lg:space-x-10 space-x-7 lg:justify-center my-10 overflow-hidden">
    {itemstwo.map((item, index) => (
        <div key={index} className="relative flex-none mx-2 hover:shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <Image src={item.imageSrc} width={440} alt={item.text} className="object-cover rounded-t-md shadow-md" />
            <div className="flex items-start py-9 px-4 text-black rounded-b-md mt-0 bg-[#f43f33] text-xl text-start font-semibold">
                {item.text}
            </div>
        </div>
    ))}
</div>

      </>
    )
  }
  