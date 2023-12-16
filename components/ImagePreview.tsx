import React from 'react'

type Props = {
    url: any,
    
}

const ImagePreview = ({url}: Props) => {
    return (
        <img
            className="max-w-full h-full object-cover rounded-lg"
            src={url}
            alt={`Image`}
        />
    )
}

export default ImagePreview