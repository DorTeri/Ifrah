'use client'
import { FEATURES_DESC } from '@/constants'
import React, { useEffect, useState } from 'react'

type Props = {
    type: any
}

const Info = ({ type }: Props) => {

    const [idx, setIdx] = useState(0)
    const [title, setTitle] = useState('מרכב וילונות')

    useEffect(() => {
        switch (type) {
            case 'curteins':
                setIdx(0)
                setTitle('מרכב וילונות')
                break;
            case 'open':
                setIdx(1)
                setTitle('מרכב פתוח')
                break;

            case 'dry':
                setIdx(2)
                setTitle('מרכב יבש')
                break;

            case 'service':
                setIdx(3)
                setTitle('מרכב שירות')
                break;
            default:
                break;
        }
    }, [type])
    return (
        <div className="container mt-10 mx-auto md:px-6">
            <section className="mb-32 text-center">
                <div className="flex justify-center">
                    <div className="max-w-[700px] text-center">
                        <h2 className="mb-20 text-center text-3xl font-bold">
                            {title}
                        </h2>
                        {/* <p className="mb-16 text-neutral-500 dark:text-neutral-300">
                           לשאול את עומרי מה לכתוב פה
                        </p> */}
                    </div>
                </div>

                <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
                    {
                        FEATURES_DESC[idx].map(info => (
                            <div key={info.value} className="mb-12 p-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="-mt-12 mb-5 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                        stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                    </svg>
                                </div>
                                <h5 className="mb-4 text-lg font-bold">{info.key}</h5>
                                <p className="text-neutral-500 dark:text-neutral-300">
                                    {info.value.split('\n').map((line, lineIndex) => (
                                        <React.Fragment key={lineIndex}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Info