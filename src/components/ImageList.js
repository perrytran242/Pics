import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = ({ images }) => {
    const renderImages = images.map( (image) => {
        return <ImageCard key={image.id} image={image}/>
    });
    return (
        <div className="image-list">
            {renderImages}     
        </div>
    )
}

export default ImageList;