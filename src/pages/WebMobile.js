import React, { useEffect } from 'react';

import bischof1 from '../img/webmobile/web-01-bischof.png';
import bischof2 from '../img/webmobile/web-02-bischof.png';
import pi1 from '../img/webmobile/web-01-pi.png';
import pi2 from '../img/webmobile/web-02-pi.png';
import pi3 from '../img/webmobile/web-03-pi.png';
import sametrica1 from '../img/webmobile/web-01-sametrica.png';
import sametrica2 from '../img/webmobile/web-02-sametrica.png';
import sametrica3 from '../img/webmobile/web-03-sametrica.png';
import swiza1 from '../img/webmobile/web-01-swiza.png';
import swiza2 from '../img/webmobile/web-02-swiza.png';
import swiza3 from '../img/webmobile/web-03-swiza.png';
import comitas1 from '../img/webmobile/web-01-comitas.png';
import comitas2 from '../img/webmobile/web-02-comitas.png';
import comitas3 from '../img/webmobile/web-03-comitas.png';
import skd1 from '../img/webmobile/web-01-skd.png';
import skd2 from '../img/webmobile/web-02-skd.png';
import skd3 from '../img/webmobile/web-03-skd.png';

import Pager from '../components/Pager';

const WebMobile = () => {
    const scrollToTop = () => {
        const contentContainer = document.querySelector('.content-container');
        if (contentContainer) {
          contentContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToTop();
        document.title = 'Web & Mobile - Design Kreativ';
    }, []);

    return (
        <div className='content-container md:mx-14 font-kumbh m-auto snap-start snap-always'>
            <div className='flex justify-center flex-col mx-12 z-50 py-36'>
                <h1 className='text-5xl text-black font-kumbh uppercase tracking-widest font-bold pb-36'>Webdesign</h1>

                {/* Werner Bischof */}
                <div className='flex w-full flex-col md:flex-row snap-start snap-always h-screen pt-12'>
                    <div className='flex-1 h-96 font-kumbh text-left flex flex-col flex-wrap justify-center'>
                        <div className='pb-20 md:pr-10 md:pb-0'>
                            <h3 className='pb-12 text-3xl'>Werner Bischof</h3>
                            <p>The Swiss Photographer Werner Bischof always considered himself as an artist. His humanistic approach towards existential human issues combined with his artistic talents made him a classic of black and white photography.</p>
                        </div>
                    </div>
                    <div className='flex-1 md:h-full'>
                        <img src={bischof1} alt="Werner Bischof - Swiss Photographer's website design" className='w-full md:w-auto shadow-xl' />
                    </div>
                    <div className='flex-1 md:h-full pt-12 md:relative md:right-48 md:top-48'>
                        <img src={bischof2} alt="Werner Bischof - Swiss Photographer's website design" className='w-full md:w-auto shadow-xl' />
                    </div>
                </div>

                {/* Swiza */}
                <div className='flex w-full flex-col md:mt-52 md:pt-28 md:mb-24 snap-start snap-always shrink-0 h-screen'>
                    <div className='w-full flex flex-row justify-center'>
                        <div className='h-full flex justify-right relative left-24 z-1'>
                            <img src={swiza2} alt="swiza - Daring e-commerce brand" className='shadow-xl z-10' />
                        </div>
                        <div className='h-full flex justify-left relative bottom-24 right-24 z-50'>
                            <img src={swiza1} alt="swiza - Daring e-commerce brand" className='shadow-xl' />
                        </div>
                    </div>

                    <div className='w-full h-full font-kumbh text-left flex flex-row flex-wrap justify-center relative bottom-24'>
                        <div className='w-2/3 flex justify-center relative left-24 -z-50'>
                            <img src={swiza3} alt="swiza - Daring e-commerce brand" className='shadow-xl z-6' />
                        </div>
                        <div className='w-1/3 flex flex-col pl-12 pb-14  md:pb-0'>
                            <h3 className='pt-20 pb-12  text-3xl'>swiza</h3>
                            <p>Daring, fresh and irreverent are some of the words that define the SWIZA e-commerce brand. As a digitally native vertical brand with a contemporary feel, its visual identity called for a fresh, real, and digital-first approach that escapes the rigidity of pre-established brands in the watch sector.</p>
                        </div>
                    </div>
                </div>

                {/* Sametrica */}
                <div className='flex w-full md:pt-10 flex-col md:flex-row snap-start snap-always'>
                    <div className='order-2 md:order-1 w-2/3 flex flex-col '>
                        <div className='h-full flex justify-center'>
                            <img src={sametrica3} alt="Sametrica - Data-driven website and visual design" className='shadow-xl' />
                        </div>
                        <div className='h-full flex justify-center relative md:right-32 bottom-32'>
                            <img src={sametrica2} alt="Sametrica - Data-driven website and visual design" className='shadow-xl' />
                        </div>
                        <div className='h-full flex justify-center relative md:left-32 bottom-64'>
                            <img src={sametrica1} alt="Sametrica - Data-driven website and visual design" className='shadow-xl' />
                        </div>
                    </div>

                    <div className='w-1/3 h-full font-kumbh text-left flex flex-col flex-wrap justify-center '>
                        <div className='pb-20  md:pb-0'>
                            <h3 className='pt-32 pb-12 text-3xl'>Sametrica</h3>
                            <p>Website, Art Direction, Motion Design, Visual Design, Content strategy, SaaS, Analytics, Web app design, Iconography, Illustration, Data Visualization, Analytics, Statistics, UI/UX Design, Art Direction, Content strategy, Motion Design, Visual Design</p>
                        </div>
                    </div>
                </div>

                {/* Private Investments */}
                <div className='flex w-full flex-col md:flex-row pt-10 relative bottom-32 snap-start snap-always'>
                    <div className='w-2/3 flex flex-col '>
                        <div className='h-full flex justify-center'>
                            <img src={pi1} alt="Private Investments - Sustainable Energy Transition" className='shadow-xl' />
                        </div>
                        <div className='h-full flex justify-center relative md:right-32 bottom-40'>
                            <img src={pi2} alt="Private Investments - Sustainable Energy Transition" className='shadow-xl' />
                        </div>
                        <div className='h-full flex justify-center relative md:left-32 bottom-72'>
                            <img src={pi3} alt="Private Investments - Sustainable Energy Transition" className='shadow-xl' />
                        </div>
                    </div>

                    <div className='order-first md:order-last  w-1/3 h-full font-kumbh text-left flex flex-col flex-wrap justify-center'>
                        <div className='pb-20 md:pb-12 md:relative md:right-32'>
                            <h3 className='md:pt-48 pb-12 text-3xl'>Private Investments</h3>
                            <p>Website design and Art Direction for a family-owned investment firm focused on Sustainable Energy Transition.</p>
                        </div>
                    </div>
                </div>

                {/* Comitas */}
                <div className='flex flex-row content-center self-center w-4/5 my-24 snap-start snap-always'>
                    <div className='flex flex-col w-1/2'>
                        <div className='flex flex-col md:pb-12 text-left px-12'>
                            <h3 className='py-8 text-3xl'>Comitas</h3>
                            <p>We’ve had the pleasure to work with Comitas, another leading startup in the software development industry. <br/>I teamed up with Comitas to define the new foundation and design direction of their marketing site that lives up to their vision.</p>
                        </div>

                        <div className=' flex justify-left z-50 w-[130%]'>
                            <img src={comitas2} alt="Comitas - Software development industry website design" className='drop-shadow-xl w-full' />
                        </div>
                    </div>

                    <div className='flex flex-col w-1/2'>
                        <div className=''>
                            <img src={comitas1} alt="Comitas - Software development industry website design" className='drop-shadow-xl z-6' />
                        </div>
                        <div className='relative right-12'>
                            <img src={comitas3} alt="Comitas - Software development industry website design" className='drop-shadow-xl z-10' />
                        </div>
                    </div>
                </div>

                {/* SKD */}
                <div className='flex flex-col content-center self-center w-4/5 my-24 snap-end snap-always h-screen overflow-clip '>
                    <div className='flex flex-row'>
                        <div className=' flex justify-left z-50 w-[150%] relative right-10'>
                            <img src={skd1} alt="SKD Bilingual Daycare - High-quality education and care" className='drop-shadow-xl w-full' />
                        </div>
                        <div className='flex flex-col pt-8 text-left'>
                            <h3 className='py-12 text-3xl'>SKD Bilingual Daycare</h3>
                            <p>SKD prides itself on providing high-quality education and care in a warm, nurturing environment. <br/>I worked with them to create a unique brand to facilitate their ambitious undertakings.</p>
                        </div>
                    </div>
                    <div className='relative bottom-24'>
                        <img src={skd2} alt="SKD Bilingual Daycare - High-quality education and care" className='drop-shadow-xl z-6' />
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

export default WebMobile;
