import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'


type Props = {
    pathName: string,
    handleClick: () => void
}

const DropDown = ({ pathName, handleClick }: Props) => {


    const navContainer = {
        visible: {
            //x: 0,
            opacity: 1,
            transition: {
                x: { velocity: 100 },
                duration: 0.3
            }
        },
        hidden: {
            //x: -250,
            opacity: 0,
            transition: {
                x: { velocity: 100 },
                duration: 0.3
            }
        }
    };

    const navList = {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.07
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const navItem = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        hidden: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        }
    };

    return (
        <motion.div initial="hidden"
            animate="visible" variants={navContainer} className='absolute top-[100%] left-0 w-full bg-white z-50'>
            <motion.ul initial="hidden"
                animate="visible"
                variants={navList}>
                {
                    NAV_LINKS.map((link: any) => (
                        <motion.li
                            key={link.key}
                            variants={navItem} >
                            <Link onClick={handleClick}
                                href={link.href} key={link.key} className={`regular-18 text-gray-50
                            hover:!text-[#ca2828]
                 flexCenter cursor-pointer pb-4 transition-all !font-bold ${link.href === pathName && '!text-[#ca2828]'}`}>
                                {link.label}
                            </Link>
                        </motion.li>
                    ))
                }
            </motion.ul>
        </motion.div>
    )
}

export default DropDown