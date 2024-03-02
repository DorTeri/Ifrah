'use client'
import ImagePreview from '@/components/ImagePreview'
import Info from '@/components/Info';
import React, { useState } from 'react'
import Loader from "react-js-loader";
import { useParams } from 'next/navigation'



type Props = {}

const page = (props: Props) => {
  const { typeName } = useParams()

  const [imageType, setImageType] = useState(typeName || 'curteins')
  const [isLoading, setIsLoading] = useState(false)

  const getImagePath = (imageName: string) => {
    return `/assets/${imageType}/${imageName}.jpg`
  };

  const imageTypes = [
    {
      title: 'מרכב לניידת שירות',
      value: 'service',
    },
    {
      title: 'מרכב יבש',
      value: 'dry',
    },
    {
      title: 'מרכב פתוח',
      value: 'open',
    },
    {
      title: 'מרכב וילונות',
      value: 'curteins',
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
    <section>
      <div className='bg-black w-full'>
        <div className='mx-auto py-10 justify-between grid grid-cols-2 gap-5 md:flex md:w-2/3 lg:w-1/2 text-center md:text-right'>
          {
            imageTypes.map(type => (
              <div key={type.value} className='relative'>
                <p
                  className={`inline-block bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent cursor-pointer ${imageType === type.value ? 'border-b-2 border-red-500' : ''
                    } hover:border-b-2 hover:border-red-500`}
                  onClick={() => handleClick(type.value)}
                >
                  {type.title}
                </p>
              </div>
            ))
          }
        </div>
      </div>

      <div>
        {
          <Info type={imageType} />
        }
        {
          <div className={`${isLoading && 'hidden'} mb-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                <div key={i} className='transition-opacity w-full duration-500 ease-in-out hover:opacity-75'>
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
    </section>
  )
}

export default page