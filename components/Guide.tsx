'use client'
import Image from "next/image"
import Button from "./Button"
import { useRouter } from "next/navigation"

const Guide = () => {

  const router = useRouter()

  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pt-12 pb-24">

        <div className="flex flex-col justify-between gap-5 lg:gap-10">
          <h2 className="!text-[30px] md:!text-[45px] bold-40 lg:bold-64 m-auto">מומחים בבניית ארגזים ומרכבים</h2>
          <p className="!text-[20px] md:!text-[30px] regular-20 lg:regular-24 text-gray-30 m-auto text-center">
            בין לקוחותינו נמנות חברות ליסינג המובילות בשוק הישראלי. דבר שלא מונע מאיתנו לשים דגש על שירות לקוחות ואיכות המוצר
          </p>

          <div className="m-auto">
            <button type='button'
              onClick={() => router.push('/about')}
              className={`flexCenter gap-3 rounded-full border btn_red hover:!bg-white hover:!text-[#ca2828]
                transition-all duration-300`}>
              <label className='bold-16 whitespace-nowrap cursor-pointer'>על החברה</label>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Guide