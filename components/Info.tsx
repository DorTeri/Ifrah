'use client'
import { FEATURES_DESC } from '@/constants'
import React, { useEffect, useState } from 'react'

type Props = {
    type: any
}

const Info = ({ type }: Props) => {

    const [idx, setIdx] = useState(0)
    const [title, setTitle] = useState('מרכב וילונות')
    const [subTitle, setSubTitle] = useState('')

    useEffect(() => {
        switch (type) {
            case 'curteins':
                setIdx(0)
                setTitle('מרכב וילונות')
                setSubTitle("במרכב זה בנוי מדפנות ברזנט וגג המיועד להובלה בכל תנאי מזג האוויר המאפשר להוביל בנוחות מטענים או סחורה ממקום למקום עם אפשרות לפתיחה מלאה של דפנות המרכב לגישה מהירה ונוחה")
                break;
            case 'open':
                setIdx(1)
                setTitle('מרכב פתוח')
                setSubTitle("במרכב זה בנוי לרוב משטח עמסה וקיר קידמי המאפשר להוביל באוויר הפתוח מטענים גדולים, כלי צמה, מכולה ימית(קונטיינר), חומרי בניין ועוד")
                break;

            case 'dry':
                setIdx(2)
                setTitle('מרכב יבש')
                setSubTitle("במרכב זה בנוי מדפנות פליווד עם מעטפת אלומיניום מעוגל המיועד להובלה בכל תנאי מזג האוויר המאפשר להוביל בנוחות מטענים או סחורה ממקום למקום")
                break;

            case 'service':
                setIdx(3)
                setTitle('מרכב לניידת שירות')
                setSubTitle("במרכב זה מותקנים תריסי גלילה אלומיניום תוצרת אנגליה בדפנות המרכב אשר יותקנו לפי דרישת הלקוח בתכנון קפדני מול מחלקת ההנדסה לקבלת מענה מקיף לכל הצרכים להם מיועדת ניידת השירות")
                break;
            default:
                break;
        }
    }, [type])
    return (
        <div className="bg-gradient-to-b from-white to-gray-100 mb-10">
            <section id="features" className="relative block px-6 py-10 pt-2 md:pb-20 md:px-10 border-b border-neutral-900 bg-neutral-900/30">
                <div className="relative mx-auto max-w-5xl text-center">
                    <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mx-auto my-4 w-full max-w-xl text-black text-center font-medium leading-relaxed tracking-wide">
                        {subTitle}
                    </p>
                </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        FEATURES_DESC[idx].map(info => (
                            <div key={info.value} className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow duration-300 hover:opacity-80 hover:border-black">
                                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ backgroundColor: "#ca2828", borderColor: "black" }}>
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

                                <h3 className="mt-6 text-black font-semibold">{info.key}</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">{info.value}</p>
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