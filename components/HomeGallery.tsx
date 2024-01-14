'use client'
import React, { useEffect } from 'react'
import Button from './Button'
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from 'framer-motion'
import { useRouter } from 'next/navigation';

type Props = {}


const HomeGallery = (props: Props) => {
    const router = useRouter()

    const images = [
        "/assets/curteins/image_4.jpg",
        "/assets/curteins/image_6.jpg",
        "/assets/dry/image_5.jpg",
        "/assets/dry/image_6.jpg",
        "/assets/open/image_4.jpg",
        "/assets/open/image_6.jpg",
    ]


    return (
        <div className="container my-24 mb-0 mx-auto md:px-6 lg:pt-12">
            <div className="max-container flex flex-wrap">
                {images.map((image, index) => (
                    <GalleryImage key={index} image={image} />
                ))}
            </div>
            <div className='flex items-center justify-center p-10' onClick={() => router.push('/gallery')}>
                <Button
                    type='submit'
                    title='לעוד תמונות'
                    variant='btn_red'
                />
            </div>
        </div>
    );
};

const GalleryImage = ({ image }: { image: string }) => {
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
            className="flex w-full md:w-1/2 lg:w-1/3 flex-wrap"
        >
            <div className="w-full p-1 md:p-2 hover:opacity-75 transition-all duration-300">
                <img
                    key={image}
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={image}
                />
            </div>
        </motion.div>
    );
};

export default HomeGallery;