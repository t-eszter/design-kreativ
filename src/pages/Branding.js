import React, { useEffect } from 'react';

import rain1 from '../img/branding/branding-01-rain.png';
import rain2 from '../img/branding/branding-02-rain.png';

import bpi1 from '../img/branding/branding-01-bpi.png';
import bpi2 from '../img/branding/branding-02-bpi.png';

import software from '../img/branding/branding-01-software.png';

import avenro from '../img/branding/branding-01-avenro.png';

import odiq1 from '../img/branding/branding-01-odiq.png';
import odiq2 from '../img/branding/branding-02-odiq.png';

import csla from '../img/branding/branding-01-csla.png';

import Pager from '../components/Pager';

const Branding = () => {
    const scrollToTop = () => {
        const contentContainer = document.querySelector('.content-container');
        if (contentContainer) {
          contentContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToTop();
        document.title = 'Branding - Design Kreativ';
    }, []);

    return (
        <div className='content-container md:mx-14 font-kumbh m-auto snap-start snap-always'>
            <div className='flex justify-center flex-col mx-12 z-50 py-36'>
                <h1 className='text-5xl text-black font-kumbh uppercase tracking-widest font-bold pb-36'>Branding</h1>

                {/* Rain The Restaurant */}
                <div className='flex w-full flex-row md:flex-row snap-start snap-always py-20'>
                    <div className='w-1/2 flex items-center'>
                        <div className='flex justify-center'>
                            <img src={rain2} alt="Rain The Restaurant - Branding Design" />
                        </div>
                    </div>

                    <div className='w-1/2 h-full font-kumbh text-left flex flex-col flex-wrap justify-center'>
                        <div className='pb-20 md:pb-12'>
                            <img src={rain1} alt="Rain The Restaurant - Branding Design" />
                        </div>
                    </div>
                </div>

                {/* BPI */}
                <div className='flex w-full flex-row md:flex-row snap-start snap-always'>
                    <div className='w-1/2 flex items-center'>
                        <div className='flex justify-center'>
                            <img src={bpi1} alt="BPI - Branding Design" />
                        </div>
                    </div>

                    <div className='w-1/2 h-full font-kumbh text-left flex flex-col flex-wrap  items-center'>
                        <div className='h-screen justify-center flex items-center'>
                            <img src={bpi2} alt="BPI - Branding Design" />
                        </div>
                    </div>
                </div>

                {/* Software logos */}
                <div className='flex w-1/2 flex-row md:flex-row snap-start snap-always justify-center self-center py-32'>
                    <img src={software} alt="Software Logos - Branding Design" />
                </div>

                {/* Avenro */}
                <div className='flex w-4/5 flex-row md:flex-row snap-center snap-always justify-center self-center py-2'>
                    <img src={avenro} alt="Avenro - Branding Design" />
                </div>

                {/* odiq */}
                <div className='flex w-full flex-row md:flex-row snap-start snap-always'>
                    <div className='w-1/2 flex items-center flex-col justify-center'>
                        <img src={odiq1} alt="Ordre des infirmières et infirmiers du Québec - Branding Design"/>
                        <p className='pt-12'>Ordre des infirmières et infirmiers du Québec</p>
                    </div>

                    <div className='w-1/2 h-full font-kumbh text-left flex flex-col flex-wrap  items-center'>
                        <div className='h-screen justify-center flex items-center'>
                            <img src={odiq2} alt="Ordre des infirmières et infirmiers du Québec - Branding Design" />
                        </div>
                    </div>
                </div>

                {/* CSLA */}
                <div className='flex w-full flex-row md:flex-row snap-center snap-always justify-center self-center py-2'>
                    <img src={csla} alt="CSLA - Branding Design" />
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

export default Branding;
