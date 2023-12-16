import React from 'react'

type Props = {
    url: any,
    
}

const ImagePreview = ({url}: Props) => {
    return (
        <img
            className="w-full h-full object-cover rounded-lg object-center"
            src={url}
            alt={`Image`}
        />
    )
}

export default ImagePreview