import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SilderImg01 from '../public/assets/features/features_curteins.jpg';
import SilderImg02 from '../public/assets/features/features_dry.jpg';
import SilderImg03 from '../public/assets/features/features_open.jpg';
import SilderImg04 from '../public/assets/features/features_service.jpg';
import SilderIcon01 from '../public/assets/features/features_curteins.jpg';
import SilderIcon02 from '../public/assets/features/features_dry.jpg';
import SilderIcon03 from '../public/assets/features/features_open.jpg';
import SilderIcon04 from '../public/assets/features/features_service.jpg';
import { Transition } from '@headlessui/react';

type Props = {};

const FeaturesCarousel = (props: Props) => {
    const duration: number = 5000;
    const itemsRef = useRef<HTMLDivElement>(null);
    const frame = useRef<number>(0);
    const firstFrameTime = useRef(performance.now());
    const [active, setActive] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const containerWidthRef = useRef<number>(0);

    const items = [
        {
            img: SilderImg01,
            title: 'מרכב וילונות',
            buttonIcon: SilderIcon01,
            desc: 'לכתוב פה משהו לגבי כל סוג מרכב',
        },
        {
            img: SilderImg02,
            title: 'מרכב יבש',
            buttonIcon: SilderIcon02,
            desc: 'לכתוב פה משהו לגבי כל סוג מרכב',
        },
        {
            img: SilderImg03,
            title: 'מרכב פתוח',
            buttonIcon: SilderIcon03,
            desc: 'לכתוב פה משהו לגבי כל סוג מרכב',
        },
        {
            img: SilderImg04,
            title: 'מרכב שירות',
            buttonIcon: SilderIcon04,
            desc: 'לכתוב פה משהו לגבי כל סוג מרכב',
        },
    ];

    useEffect(() => {
        firstFrameTime.current = performance.now();
        frame.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(frame.current);
        };
    }, [active]);

    useEffect(() => {
        const handleResize = () => {
            if (itemsRef.current) {
                containerWidthRef.current = itemsRef.current.offsetWidth;
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const animate = (now: number) => {
        let timeFraction = (now - firstFrameTime.current) / duration;
        if (timeFraction <= 1) {
            setProgress(timeFraction * 100);
            frame.current = requestAnimationFrame(animate);
        } else {
            timeFraction = 1;
            setProgress(0);
            setActive((active + 1) % items.length);
        }
    };

    return (
        <div className="w-1/2 max-w-5xl mx-auto text-center">
            {/* Item image */}
            <div className="transition-all duration-150 delay-300 ease-in-out">
                <div className="relative flex flex-col m-auto" ref={itemsRef}>
                    {items.map((item, index) => (
                        <Transition
                            key={index}
                            show={active === index}
                            enter="transition ease-in-out duration-500 delay-200 order-first"
                            enterFrom="opacity-0 scale-105"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in-out duration-300 absolute"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className='text-white pb-[20px]'>
                                <h2 className='text-2xl'>{item.title}</h2>
                                <p className=''>{item.desc}</p>
                            </div>
                            <Image
                                src={item.img}
                                width={500}
                                alt={item.title}
                                className='m-auto'
                            />
                        </Transition>
                    ))}
                </div>
            </div>
            {/* Buttons */}
            <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {items.map((item, index) => (
                    <button
                        key={index}
                        className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
                        onClick={() => {
                            setActive(index);
                            setProgress(0);
                        }}
                    >
                        <span className={`text-center flex flex-col items-center ${active === index ? '' : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'}`}>
                            <span className="flex items-center justify-center relative w-10 bg-indigo-100 mb-2">
                                <Image src={item.buttonIcon} alt={item.title} />
                            </span>
                            <span className="block text-sm font-medium text-white mb-2">{item.title}</span>
                            <span className="block relative w-full bg-slate-200 h-1 rounded-full" role="progressbar" aria-valuenow={active === index ? progress : 0}>
                                <span className="absolute inset-0 bg-indigo-500 rounded-[inherit]" style={{ width: active === index ? `${progress}%` : '0%' }}></span>
                            </span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FeaturesCarousel;
