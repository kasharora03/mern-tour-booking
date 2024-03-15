import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Galleryimages from './Galleryimages';

const MasonryGallry = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{200:1,350:2,768:3,992:4}}>
    <Masonry gutter='1rem'>
    {
        Galleryimages.map((item, index) =>(
            <img src={item} key={index} alt='no gallery img' className='masimg'/>
        ))
    }
    </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryGallry;
