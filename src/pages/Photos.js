import React, { useEffect } from 'react';

import photos01 from '../img/photos/photo-01-DSC04090.jpg';
import photos02 from '../img/photos/photo-02-DSC04954.jpg';
import photos03 from '../img/photos/photo-03-IMG_6771-PANO.jpg';
import photos04 from '../img/photos/photo-04-Islisberg-Panorama.jpg';
import photos05 from '../img/photos/photo-05-DSC06756.jpg';
import photos06 from '../img/photos/photo-06-2017-10-15.jpg';



import Pager from '../components/Pager';

const Photos = () => {
    const scrollToTop = () => {
        const contentContainer = document.querySelector('.content-container');
        if (contentContainer) {
          contentContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToTop();
        document.title = 'Illustrations - Design Kreativ';
    }, []);

    return (
        <div className='content-container md:mx-14 font-kumbh m-auto snap-start snap-always'>
            <div className='flex justify-center flex-col mx-12 z-50 py-36'>
                <h1 className='text-5xl text-black font-kumbh uppercase tracking-widest font-bold pb-36'>Photos</h1>

                <div>
                    <img src={photos04} alt="Islisberg" className='w-full object-contain mb-6 -lg' />
                </div>
                <div className="gap-8 columns-2">
                    <img src={photos01} alt="Bremgarten" className='w-full object-contain mb-6 ' />
                    <img src={photos02} alt="Wheat" className='w-full object-contain mb-6 -lg' />
                    <img src={photos03} alt="Fronalpstock" className='w-full object-contain mb-6 -lg' />
                    <img src={photos05} alt="Rigi" className='w-full object-contain mb-6 -lg' />
                    <img src={photos06} alt="Seealpsee" className='w-full object-contain mb-6 -lg' />
                </div>

                <div className='w-full snap-end snap-always py-20 flex flex-col justify-items-center'>
                    <Pager/>

                    <div className='upButton m-auto mt-36 mb-12'>
                        <p className='upArrow relative top-11'>A</p>
                        <button className="h-18 w-30 flex items-center px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivaviolet-300 border-vivaviolet-900 font-kumbh font-bold uppercase text-m tracking-wider text-white bg-vivaviolet-900 hover:bg-white hover:text-vivaviolet-900"
                        onClick={scrollToTop}>
                            Back to top
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;
