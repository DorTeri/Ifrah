'use client'
import Image from "next/image"
import Button from "./Button"
import heroImage from "../public/assets/hero_image.avif"
import { useRouter } from 'next/navigation';


const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative w-full bg-hero-img bg-cover bg-center h-[65vh] lg:h-[80vh]">
      <div className="absolute top-0 left-0 w-full h-full z-5 bg-black opacity-60" />
      <section className="max-container padding-container flex flex-col
     gap-20 py-10 pb-32 md:gap-28 lg:py-20 text-right">

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ml-auto pt-10">
          <h1 className="!text-[40px] md:!text-[61px] bold-52 lg:bold-88 text-white">אנחנו עושים הכל כדי שלא תשים לב אלינו</h1>
        </div>

        <div className="flex w-full gap-3 z-20 justify-center md:justify-end">
          <button type='button'
            onClick={() => router.push('/gallery')}
            className={`flexCenter gap-3 rounded-full border btn_red hover:!bg-white hover:!text-[#ca2828]
                transition-all duration-300`}>
            <label className='bold-16 whitespace-nowrap cursor-pointer'>קצת עלינו</label>
          </button>
          <button type='button'
            onClick={() => router.push('/gallery')}
            className={`flexCenter gap-3 rounded-full border btn_white_text !bg-transparent
               !text-white hover:!bg-white hover:!text-black transition-all duration-300`}>
            <label className='bold-16 whitespace-nowrap cursor-pointer'>עבודות</label>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Hero