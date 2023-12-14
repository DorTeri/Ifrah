import Image from "next/image"
import Button from "./Button"

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pt-12 pb-24">

        <div className="flex flex-col justify-between gap-5 lg:gap-10">
          <h2 className="!text-[30px] md:!text-[45px] bold-40 lg:bold-64 m-auto">מומחים בבניית ארגזים ומרכבים</h2>
          <p className="!text-[20px] md:!text-[30px] regular-20 lg:regular-24 text-gray-30 m-auto text-center">
            בין לקוחותינו נמנות חברות ליסינג המובילות בשוק הישראלי. דבר שלא מונע מאיתנו לשים דגש על שירות לקוחות ואיכות המוצר
          </p>

          <div className="m-auto">
            <Button
              type="button"
              title="על החברה"
              variant="btn_red"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Guide