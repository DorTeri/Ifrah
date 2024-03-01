'use client'
import { FEATURES } from "@/constants"
import Image from "next/image"
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import curteinsImage from '../public/assets/features/curteins_png.png'
import dryImage from '../public/assets/features/dry_png.png'
import openImage from '../public/assets/features/open_png.png'
import serviceImage from '../public/assets/features/service_png.png'
import FeaturesCarousel from "./FeaturesCarousel";
import Slider from "react-slick";

type Props = {
  handleOrderPopup: () => void;
}

const Features = ({ handleOrderPopup }: Props) => {

  const images = [
    {
      id: 1,
      img: curteinsImage,
      title: 'מרכב וילונות',
      description: 'לכתוב פה משהו לגבי כל סוג מרכב',
    },
    {
      id: 2,
      img: dryImage,
      title: 'מרכב יבש',
      description: 'לכתוב פה משהו לגבי כל סוג מרכב',
    },
    {
      id: 3,
      img: openImage,
      title: 'מרכב פתוח',
      description: 'לכתוב פה משהו לגבי כל סוג מרכב',
    },
    {
      id: 4,
      img: serviceImage,
      title: 'מרכב  ניידת שירות',
      description: 'לכתוב פה משהו לגבי כל סוג מרכב',
    },
  ]

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200 ">
      {/* background pattern */}
      <div className="lg:h-[700px] lg:w-[700px] md:h-[600px] md:w-[600px] h-[400px] w-[400px] bg-[#ca2828] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {images.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* image section */}
                <div className="order-2 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <Image
                      src={data.img}
                      alt=""
                      width={300}
                      height={300}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[600px] object-contain mx-auto pr-5"
                    />
                  </div>
                </div>
                {/* text content section */}
                <div className="flex flex-col items-center justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string
  idx: number
  image: any
}


const FeatureItem = ({ title, icon, description, image }: FeatureItemProps) => {

  const router = useRouter()
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [typeName, setTypeName] = useState<string>('')

  useEffect(() => {
    updateTypeName()
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const updateTypeName = () => {
    switch (title) {
      case "מרכב וילונות":
        setTypeName('curteins')
        break;
      case "מרכב פתוח":
        setTypeName('open')
        break;
      case "מרכב יבש":
        setTypeName('dry')
        break;
      case "מרכב לניידת שירות":
        setTypeName('service')
        break;
      default:
        break;
    }
  }

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
      className={`mb-12 lg:mb-10 relative`}>
      <div className={`block relative h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}>
        <div className="absolute w-full h-full opacity-30">
          <Image
            src={image}
            alt="Description of your image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="p-6 px-20">
          <h5 className="mb-4 text-xl font-semibold text-[#ca2828]">{title}</h5>
          <p>{description}</p>
        </div>
        <div className="flex justify-center py-3">
          <button type='button'
            onClick={() => router.push(`/gallery/${typeName}`)}
            className={`flexCenter gap-3 rounded-full border btn_red hover:!bg-white hover:!text-[#ca2828] transition-all duration-300`}>
            <label className='bold-16 whitespace-nowrap cursor-pointer'>לעוד {title}</label>
          </button>
        </div>
      </div>
    </motion.div>

  )
}



export default Features