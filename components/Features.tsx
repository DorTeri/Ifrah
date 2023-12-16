'use client'
import { FEATURES } from "@/constants"
import Image from "next/image"
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Features = () => {


  return (
    <section className="bg-[#bdbdbdbb] py-5">
      <div className="container my-24 mx-auto md:px-6">
        <section className="max-container mb-32 text-center">
          <h2 className="mb-20 text-4xl font-bold">סוגי מרכבים</h2>

          <div className="grid lg:grid-cols-2 lg:gap-x-12">
            {FEATURES.map((feature, idx) => (
              <FeatureItem
                idx={idx}
                param={feature.param}
                title={feature.title}
                key={idx}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

type FeatureItemProps = {
  title: string;
  param: string;
  icon: string;
  description: string
  idx: number
}


const FeatureItem = ({ title, icon, description , param }: FeatureItemProps) => {

  const router = useRouter()
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      className="mb-12 lg:mb-10">
      <div
        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex justify-center">
          <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" className="h-7 w-7">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
          </div>
        </div>
        <div className="p-6 px-20">
          <h5 className="mb-4 text-xl font-semibold text-[#ca2828]">{title}</h5>
          <p>
            {description}
          </p>
        </div>
        <div className="flex justify-center py-3">
          <button type='button'
            onClick={() => router.push(`/gallery?type=${param}`)}
            className={`flexCenter gap-3 rounded-full border btn_red hover:!bg-white hover:!text-[#ca2828]
                transition-all duration-300`}>
            <label className='bold-16 whitespace-nowrap cursor-pointer'>לעוד {title}</label>
          </button>
        </div>

      </div>
      <div>
      </div>
    </motion.div>
  )
}



export default Features