import React, { useEffect } from 'react';

import transfer1 from '../img/print/print-01-transfer.png';
import transfer2 from '../img/print/print-02-transfer.png';
import transfer3 from '../img/print/print-03-transfer.png';

import remax1 from '../img/print/print-01-remax.png';

import telam1 from '../img/print/print-01-video.png';
import telam2 from '../img/print/print-02-video.png';

import farmerz1 from '../img/print/print-01-farmerz.png';

import cbac1 from '../img/print/print-01-cbac.png';
import cbac2 from '../img/print/print-02-cbac.png';

import bankcard1 from '../img/print/print-01-bankcard.png';

import Pager from '../components/Pager';

const Print = () => {
    const scrollToTop = () => {
        const contentContainer = document.querySelector('.content-container');
        if (contentContainer) {
          contentContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToTop();
        document.title = 'Print - Design Kreativ';
    }, []);

    return (
        <div className='content-container md:mx-14 font-kumbh m-auto snap-start snap-always'>
            <div className='flex justify-center flex-col mx-12 z-50 py-36'>
                <h1 className='text-5xl text-black font-kumbh uppercase tracking-widest font-bold pb-36'>Print design</h1>

                {/* Xtransfer */}
                <div className='flex w-full flex-col md:flex-row snap-start snap-always h-screen pt-12'>
                    <div className='w-1/4 ml-20 font-kumbh text-left flex flex-col flex-wrap justify-center'>
                        <div className='pb-20 md:pr-10 md:pb-0'>
                            <h3 className='pb-12 text-3xl'>XTransfer</h3>
                            <p>Business card for premium transfer service around Garda Lake</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-3/4'>
                        <div className='flex flex-row pt-20'>
                            <div className='w-[80%] text-right z-0'>
                                <img src={transfer1} alt="XTransfer - Business card front" className='w-full md:w-[80%]  shadow-xl' />
                            </div>
                            <div className='text-left relative right-40 top-20 z-20'>
                                <img src={transfer2} alt="XTransfer - Business card back" className='w-full md:w-auto shadow-xl' />
                            </div>
                        </div>
                        <div className='flex justify-center relative bottom-20 z-40'>
                            <img src={transfer3} alt="XTransfer - Business card design details" className='w-full md:w-auto shadow-xl' />
                        </div>
                    </div>
                </div>

                {/* Remax */}
                <div className='flex w-full flex-col md:flex-row snap-start snap-always h-screen pt-2'>
                    <div className='flex flex-col w-2/4'>
                        <img src={remax1} alt="RE/MAX Ad Campaign" className='w-full md:w-auto shadow-xl' />
                    </div>
                    <div className='w-2/4 ml-20 font-kumbh text-left flex flex-col flex-wrap justify-center items-center'>
                        <div className='pb-20 md:pr-10 md:pb-0'>
                            <h3 className='pb-12 text-3xl'>RE/MAX</h3>
                            <p className='pb-20'>Ad campaign for RE/MAX as they marked the start of something new and very special – connecting 40 years of franchising success to a bright future filled with vast possibilities for growth and expansion.</p>
                        </div>
                    </div>
                </div>

                {/* Video conference */}
                <div className='flex w-full flex-col md:flex-row snap-start snap-always h-screen pt-4 mt-20'>
                    <div className='w-2/4 ml-20 font-kumbh text-left flex flex-col flex-wrap justify-center z-10'>
                        <div className='pb-20 md:pr-10 md:pb-0 w-3/4'>
                            <h3 className='pb-12 text-3xl'>Wireless Video Conference Camera</h3>
                            <p className='pb-20'>Logo and poster for Telam. Create an immersive hybrid meeting experience in any space with the intelligent camera, mic and speaker that gets smarter over time.</p>
                        </div>
                        <div className='flex flex-col w-full'>
                            <img src={telam2} alt="Telam - Poster" className='w-full md:w-auto shadow-xl' />
                        </div>
                    </div>
                    <div className='flex flex-col w-4/5 relative right-20 z-0'>
                        <img src={telam1} alt="Telam - Logo and poster details" className='w-full md:w-auto shadow-xl' />
                    </div>
                </div>

                {/* Farmers */}
                <div className='flex w-full flex-col md:flex-row snap-start snap-always h-screen pt-2'>
                    <div className='flex flex-col w-2/4'>
                        <img src={farmerz1} alt="Egg Farmers of Canada Campaign" className='w-full md:w-auto shadow-xl' />
                    </div>
                    <div className='w-2/4 ml-20 font-kumbh text-left flex flex-col flex-wrap justify-center items-center'>
                        <div className='pb-20 md:pr-10 md:pb-0'>
                            <h3 className='pb-12 text-3xl'>Egg Farmers of Canada</h3>
                            <p className='pb-20'>Part of a campaign to position the Canadian egg industry as a leader in Canada’s agricultural future through sustainable growth, continuous improvement, and social responsibility.</p>
                        </div>
                    </div>
                </div>

                {/* CBAC */}
                <div className='flex w-full flex-col md:flex-row snap-start snap-always h-screen pt-4 mt-40'>
                    <div className='w-2/4 ml-20 font-kumbh text-left flex flex-col justify-center z-10'>
                        <div className='pb-20 md:pr-10 md:pb-0'>
                            <h3 className='pb-12 text-3xl'>The Canadian Biotechnology Advisory Committee (CBAC)</h3>
                            <p className='pb-20'>Visual communication within government and the private sector is increasingly important. This graphic identification manual provides guidelines to assist communicators in achieving maximum visibility by standardizing the formats in various applications of the CBAC corporate identity.</p>
                        </div>
                        <div className='flex flex-col h-80 relative left-72 bottom-30'>
                            <img src={cbac1} alt="CBAC - Graphic Identification Manual" className='w-full md:w-auto h-80 object-contain' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <img src={cbac2} alt="CBAC - Corporate Identity Applications" className='w-full md:w-auto' />
                    </div>
                </div>

                {/* Bank card */}
                <div className='flex w-full flex-col md:flex-col snap-start snap-always h-screen pt-4 mt-20'>
                    <div className='w-full flex justify-center'>
                        <img src={bankcard1} alt="Sleek and Modern Bank Card Design" className='w-full md:w-2/3' />
                    </div>

                    <div className='w-full font-kumbh text-left flex justify-center'>
                        <div className='py-10 md:pb-0 text-center'>
                            <p>We designed a sleek and modern bank card for our client, perfectly tailored to their brand and audience</p>
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

export default Print;
