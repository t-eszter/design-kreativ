import React, { useEffect } from 'react';

import illu01 from '../img/illu/illu-01-cukisag.gif';
import illu02 from '../img/illu/illu-02-teszter.gif';
import illu03 from '../img/illu/illu-03-felmaszom.jpg';
import illu04 from '../img/illu/illu-04-kiprobaltuk.jpg';
import illu05 from '../img/illu/illu-05-mouse.jpg';
import illu06 from '../img/illu/illu-06-wm500.gif';
import illu07 from '../img/illu/illu-07-wm404.gif';
import illu08 from '../img/illu/illu-08-skd.jpg';
import illu09 from '../img/illu/illu-09-skd.jpg';
import illu10 from '../img/illu/illu-10-wm.png';

import Pager from '../components/Pager';

const Illustrations = () => {
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
                <h1 className='text-5xl text-black font-kumbh uppercase tracking-widest font-bold pb-36'>Illustrations</h1>

                <div className="gap-8 columns-2">
                    <img src={illu01} alt="Illustration - Cukisag" className='w-full object-contain mb-6 rounded-lg' />
                    <img src={illu02} alt="Illustration - Teszter" className='w-full object-contain mb-6 rounded-lg' />
                    <img src={illu03} alt="Illustration - Felmaszom" className='w-full object-contain mb-6 rounded-lg' />
                    <img src={illu04} alt="Illustration - Kiprobaltuk" className='w-full object-contain mb-6 rounded-lg' />
                    <img src={illu05} alt="Illustration - Mouse" className='w-full object-contain mb-6 rounded-lg' />
                    <img src={illu06} alt="Illustration - WM500" className='w-full object-contain mb-6 rounded-lg' />
                    <img src={illu07} alt="Illustration - WM404" className='w-full object-contain mb-6 rounded-lg' />
                    <img src={illu08} alt="Illustration - SKD" className='w-full object-contain mb-6 rounded-lg' />
                    <img src={illu09} alt="Illustration - SKD" className='w-full object-contain mb-6 rounded-lg' />
                    <img src={illu10} alt="Illustration - Wm" className='w-full object-contain mb-6 rounded-lg' />
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

export default Illustrations;
