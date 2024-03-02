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
                setTitle('מרכב לניידת שירות')
                break;
            default:
                break;
        }
    }, [type])
    return (
        <div className="bg-black mb-10">
            <section id="features" className="relative block px-6 py-10 pt-2 md:pb-20 md:px-10 border-b border-neutral-900 bg-neutral-900/30">
                <div className="relative mx-auto max-w-5xl text-center">
                    <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                        {title}
                    </span>
                    <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        מרכב וילונות יתן הגנה מקסימלית
                    </h2>
                    <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                        מרכבי הוילונות שלנו בנויים בצורה הטובה ביותר בשבילכם על מנת לאפשר חוויה מקסימלית שתלווה אתכם לאורך כל הדרך
                    </p>
                </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        FEATURES_DESC[idx].map(info => (
                            <div key={info.value} className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ backgroundColor: "red", borderColor: "red" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                                        <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                                        <polyline points="12 8 7 3 3 7 8 12"></polyline>
                                        <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                                        <polyline points="16 12 21 17 17 21 12 16"></polyline>
                                        <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                                    </svg>
                                </div>

                                <h3 className="mt-6 text-gray-400">{info.key}</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">{info.value}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                    style={{ backgroundImage: "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)", borderColor: "rgba(92, 79, 240, 0.2)" }}>
                </div>
                <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                    style={{ backgroundImage: "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)", borderColor: "rgba(92, 79, 240, 0.2)" }}>
                </div>
            </section>
        </div>

    )
}

export default Info