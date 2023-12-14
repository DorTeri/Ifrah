'use client'
import { FEATURES_DESC } from '@/constants'
import React, { useEffect, useState } from 'react'

type Props = {
    type: any
}

const Info = ({ type }: Props) => {

    const [idx, setIdx] = useState(0)

    useEffect(() => {
        switch (type) {
            case 'curteins':
                setIdx(0)
                break;

            default:
                break;
        }
    }, [type])
    return (
        <div className='w-full text-right'>
            {
                FEATURES_DESC[idx].map(info => (
                    <div>
                        <h2 className='font-bold'>{info.key}</h2>
                        <p>{info.value}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Info