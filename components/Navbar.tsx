'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import logo from "../public/assets/ifrah_logo.svg"
import { IoMdClose } from "react-icons/io";
import { useState } from "react"
import DropDown from "./DropDown"
import { usePathname } from "next/navigation"
import { useRouter } from 'next/navigation';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();

    const pathName = usePathname()

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-4">
            <Link href="/">
                <Image src={logo} alt="logo" width={110} height={34} />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link: any) => (
                    <Link href={link.href} key={link.key} className={`regular-16 text-gray-50
                     flexCenter cursor-pointer pb-1.5 transition-all !font-bold ${link.href === pathName && '!text-[#ca2828]'}`}>
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="flex gap-3">
                <div className="cursor-pointer mr-2">
                    <button type='button'
                        onClick={() => router.push('/contact')}
                        className={`flexCenter gap-3 rounded-full border btn_red hover:border-5 hover:border-[#000]
                transition-all duration-300`}>
                        <label className='bold-16 whitespace-nowrap cursor-pointer'>צור קשר</label>
                    </button>
                </div>

                <button onClick={handleClick}
                    className="flex flex-col justify-center items-center lg:hidden">
                    <span className={`bg-black block transition-all duration-400 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                            'rotate-45 translate-y-1' : '-translate-y-0.5'
                        }`} >
                    </span>
                    <span className={`bg-black block transition-all duration-400 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                            'opacity-0' : 'opacity-100'
                        }`} >
                    </span>
                    <span className={`bg-black block transition-all duration-400 ease-out
                        h-0.5 w-6 rounded-sm ${isOpen ?
                            '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                        }`} >
                    </span>

                </button>
            </div>

            {
                isOpen && (
                    <DropDown pathName={pathName} handleClick={handleClick} />
                )
            }
        </nav >
    )
}

export default Navbar