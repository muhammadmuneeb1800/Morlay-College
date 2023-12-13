import React from 'react'
import Link from 'next/link'

export default function Top() {
  return (
    <>
        <div className="bg-black p-4 text-[#8f8f8f] font-bold">
            <ul className="md:flex md:flex-row flex items-center md:text-[10px] lg:text-[15px] text-[9px] justify-end gap-2 px-5">
            <li className="hover:text-white"><Link href="#">Tel.02074501889</Link></li>    
            <li className="hover:text-white"><Link href="#">Work for us</Link></li>    
            <li className="hover:text-white"><Link href="#">Short courses</Link></li>    
            <li className="hover:text-white"><Link href="#">Applications</Link></li>    
            <li className="hover:text-white"><Link href="#">Parents and carers</Link></li>    
            <li className="hover:text-white"><Link href="#">Schools</Link></li>
            <li className="hover:text-white"><Link href="#">Contact</Link></li>
            </ul>
        </div> 
    </>
  )
}
