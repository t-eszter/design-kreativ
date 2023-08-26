import React, { useEffect } from 'react';

import chickens1 from '../img/uiux/uiux-01-chickens.png';
import chickens2 from '../img/uiux/uiux-02-chickens.png';
import chickens3 from '../img/uiux/uiux-03-chickens.png';

import sametrica1 from '../img/uiux/uiux-01-sametrica.png';
import sametrica2 from '../img/uiux/uiux-02-sametrica.png';
import sametrica3 from '../img/uiux/uiux-03-sametrica.png';

import orion1 from '../img/uiux/uiux-01-orion.png';
import orion2 from '../img/uiux/uiux-02-orion.png';

import wondermags1 from '../img/uiux/uiux-01-wondermags.png';
import wondermags2 from '../img/uiux/uiux-02-wondermags.png';
import wondermags3 from '../img/uiux/uiux-03-wondermags.png';

import Pager from '../components/Pager';

const UIUX = () => {
    const scrollToTop = () => {
        const contentContainer = document.querySelector('.content-container');
        if (contentContainer) {
          contentContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToTop();
        document.title = 'UI/UX Design - Design Kreativ';
    }, []);

    return (
        <div className='content-container md:mx-14 font-kumbh m-auto snap-start snap-always'>
            <div className='flex justify-center flex-col mx-12 z-50 py-24'>
                <h1 className='text-5xl text-black font-kumbh uppercase tracking-widest font-bold pb-36'>UI/UX Design</h1>

                {/* Chickens */}
                <div className='flex h-42 w-full flex-col md:flex-row snap-start snap-always py-4'>
                    <div className='w-2/3 flex flex-col '>
                        <div className='h-full flex justify-center'>
                            <img src={chickens1} alt="Smart Poultry Health - Mobile application design for Biosecurity AI startup" className='shadow-xl' />
                        </div>
                        <div className='flex flex-row relative bottom-24'>
                            <img src={chickens3} alt="Smart Poultry Health - Mobile application design for Biosecurity AI startup" className='relative bottom-12 left-52 z-40' />
                            <img src={chickens2} alt="Smart Poultry Health - Mobile application design for Biosecurity AI startup" className='relative bottom-24 left-48 z-1' />
                        </div>
                    </div>
                    <div className='w-1/3 h-full font-kumbh text-left flex flex-col flex-wrap justify-center'>
                        <div className='pb-20  md:pb-0'>
                            <h3 className='pt-32 pb-12 text-3xl'>Smart Poultry Health</h3>
                            <p>Mobile application design for Biosecurity AI startup. With the rise of digital image processing technology and machine learning algorithms, point monitoring of poultry health status is an easy and effective way to prevent large-scale outbreaks of disease.</p>
                        </div>
                    </div>
                </div>

                {/* Sametrica */}
                <div className='flex h-42 w-full flex-col md:flex-row snap-start snap-always py-8'>
                    <div className='order-2 md:order-1 w-2/3 flex flex-col '>
                        <div className='flex justify-center'>
                            <img src={sametrica3} alt="Sametrica - Turning complex data into an interactive insurance platform" className='' />
                        </div>
                        <div className='flex justify-center relative md:right-32 bottom-32'>
                            <img src={sametrica2} alt="Sametrica - Turning complex data into an interactive insurance platform" className='' />
                        </div>
                        <div className='flex justify-center relative md:left-32 bottom-64'>
                            <img src={sametrica1} alt="Sametrica - Turning complex data into an interactive insurance platform" className='' />
                        </div>
                    </div>
                    <div className='w-1/3 font-kumbh text-left flex flex-col flex-wrap justify-center '>
                        <div className='pb-20  md:pb-0'>
                            <h3 className='pt-32 pb-12 text-3xl'>Sametrica</h3>
                            <p>How to turn complex data into an interactive insurance platform — Orion analyzed 5 hundreds of data points from 1.3 thousand users in 4 different industries. They found amazing metrics. Together with the marketing team, we worked on turning the data we collected into an interactive platform.</p>
                        </div>
                    </div>
                </div>

                {/* Orion */}
                <div className='flex flex-row content-center self-center w-4/5 my-24 snap-start snap-always'>
                    <div className='flex flex-col w-1/2'>
                        <div className='flex flex-col md:pb-12 text-left px-12'>
                            <h3 className='py-8 text-3xl'>Orion</h3>
                            <p>We’ve had the pleasure to work with Comitas, another leading startup in the software development industry. 
                            <br/>I teamed up with Comitas to define the new foundation and design direction of their marketing site that lives up to their vision.</p>
                        </div>
                        <div className=''>
                            <img src={orion1} alt="Orion - Design foundation and marketing site for Comitas" className='relative left-24 z-40' />
                        </div>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <div className='relative right-12'>
                            <img src={orion2} alt="Orion - Design foundation and marketing site for Comitas" className='z-1' />
                        </div>
                    </div>
                </div>

                {/* Wondermags */}
                <div className='flex h-42 w-full flex-col md:flex-row py-12 snap-start snap-always'>
                    <div className='w-2/3 flex flex-col '>
                        <div className='h-full flex justify-center'>
                            <img src={wondermags1} alt="Wondermags - Platform for creating and distributing digital magazines" className='shadow-xl' />
                        </div>
                        <div className='h-full flex justify-center relative md:right-32 bottom-32'>
                            <img src={wondermags3} alt="Wondermags - Platform for creating and distributing digital magazines" className='shadow-xl' />
                        </div>
                        <div className='h-full flex justify-center relative md:left-32 bottom-64'>
                            <img src={wondermags2} alt="Wondermags - Platform for creating and distributing digital magazines" className='shadow-xl' />
                        </div>
                    </div>
                    <div className='order-first md:order-last  w-1/3 h-full font-kumbh text-left flex flex-col flex-wrap justify-center'>
                        <div className='pb-20 md:pb-12 md:relative md:right-32'>
                            <h3 className='md:pt-32 pb-12 text-3xl'>Wondermags</h3>
                            <p>Wondermags is changing the rules of digital publishing. We worked together to design a platform that enabled their users to create and distribute magazines to share their stories.</p>
                        </div>
                    </div>
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

export default UIUX;
