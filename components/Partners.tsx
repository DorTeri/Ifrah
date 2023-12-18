import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import partner1 from '@/public/assets/partners/orian.jpeg'
import partner2 from '@/public/assets/partners/cargo.jpeg'
import partner3 from '@/public/assets/partners/ameford.png'
import partner4 from '@/public/assets/partners/shufersal.png'
import partner5 from '@/public/assets/partners/yuhananof.png'
import partner6 from '@/public/assets/partners/angel.png'
import partner7 from '@/public/assets/partners/universal.png'
import partner8 from '@/public/assets/partners/daf.png'
import partner9 from '@/public/assets/partners/amisragaz.png'
import partner10 from '@/public/assets/partners/aminah.jpeg'




type Props = {}

const partners = [
    {
        src: partner1
    },
    {
        src: partner2
    },
    {
        src: partner3
    },
    {
        src: partner4
    },
    {
        src: partner5
    },
    {
        src: partner6
    },
    {
        src: partner7
    },
    {
        src: partner8
    },
    {
        src: partner9
    },
    {
        src: partner10
    },
]

const Partners = (props: Props) => {
    return (
        <section className='w-full border-b-2 border-[#bebebe]'>
            <div className='py-10 container mx-auto md:px-6'>
                <h1 className={`text-4xl font-bold text-center`}>
                בין לקוחותינו
            </h1>
                <div className='w-full flex justify-center pt-3'>
                <div className='w-[100px] h-[2px] bg-[#ca2828]' />
            </div>
                <Marquee className='w-full my-10'>
                    {partners.map((i, index) => (
                        <Image
                            src={i.src}
                            alt=''
                            width={100}
                            height={100}
                            key={index}
                            className='mx-14 w-[120px] h-[120px]
               object-contain transition-opacity cursor-default'
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default Partners