'use client'
import ImagePreview from '@/components/ImagePreview'
import Info from '@/components/Info';
import React, { useState } from 'react'
import Loader from "react-js-loader";


type Props = {}

const page = (props: Props) => {

  const [imageType, setImageType] = useState('curteins')
  const [isLoading, setIsLoading] = useState(false)

  const getImagePath = (imageName: string) => {
    return `/assets/${imageType}/${imageName}.jpg`
  };

  const imageTypes = [
    {
      title: 'וילונות',
      value: 'curteins',
    },
    {
      title: 'יבש',
      value: 'dry',
    },
    {
      title: 'פתוח',
      value: 'open',
    },
    {
      title: 'שירות',
      value: 'service',
    },
  ]

  const handleClick = (type: string) => {
    if (type === imageType) return
    setIsLoading(true)
    setImageType(type)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }

  return (
    <div className="container mt-10 mb-10 mx-auto md:px-6 lg:pt-12">
      <div className="max-container flex flex-wrap">
        <div className='mx-auto mb-10 w-full text-center'>
          <h2 className='!text-[28px] md:!text-[45px] bold-52 lg:bold-88 text-black'>כאן תוכלו להתרשם מהעבודות שלנו</h2>
        </div>
        <div className='mx-auto mb-10 flex justify-between w-1/2'>
          {
            imageTypes.map(type => (
              <div className='relative'>
                <p
                  className={`inline-block text-gray-30 cursor-pointer ${imageType === type.value ? 'border-b-2 border-red-500' : ''
                    } hover:border-b-2 hover:border-red-500`}
                  onClick={() => handleClick(type.value)}
                >
                  {type.title}
                </p>
              </div>
            ))
          }
        </div>
        {
         
            <Info type={imageType}/>
        }
        {
          <div className={`${isLoading && 'hidden'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                <div key={i} className='transition-opacity duration-500 ease-in-out hover:opacity-75'>
                  <ImagePreview
                    url={getImagePath(`image_${i}`)} />
                </div>
              ))
            }
          </div>
        }

        {
          isLoading && (
            <div className={"item mx-auto w-full"}>
              <Loader type="spinner-default" bgColor={'#000'} color={"#fff"} title={"spinner-default"} size={100} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default page