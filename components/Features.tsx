'use client'
import Image from "next/image"
import curteinsImage from '../public/assets/features/curteins_png.png'
import dryImage from '../public/assets/features/dry_png.png'
import openImage from '../public/assets/features/open_png.png'
import serviceImage from '../public/assets/features/service_png.png'
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


export default Features