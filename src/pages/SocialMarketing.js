import React, { useEffect } from 'react';

import social01 from '../img/socialmarketing/socialmarketing-01-zk.png';
import social02 from '../img/socialmarketing/socialmarketing-02-zk.png';
import social03 from '../img/socialmarketing/socialmarketing-02-llg.png';
import social04 from '../img/socialmarketing/socialmarketing-01-llg.gif';
import social05 from '../img/socialmarketing/socialmarketing-01-fuji.png';

import Pager from '../components/Pager';

const SocialMarketing = () => {
    const scrollToTop = () => {
        const contentContainer = document.querySelector('.content-container');
        if (contentContainer) {
          contentContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToTop();
        document.title = 'Social Media & Marketing - Design Kreativ';
    }, []);

    return (
        <div className='content-container md:mx-14 font-kumbh m-auto snap-start snap-always'>
            <div className='flex justify-center flex-col mx-12 z-50 py-36'>
                <h1 className='text-5xl text-black font-kumbh uppercase tracking-widest font-bold pb-36'>Social Media & Marketing</h1>

                {/* Zürich Kids */}
                <div className='flex w-full flex-col md:flex-row snap-start snap-always h-screen pt-12'>
                    <div className='font-kumbh text-left flex flex-row flex-wrap justify-center py-20'>
                        <div className='pb-20 md:pr-10 md:pb-0 w-1/5 self-center'>
                            <h3 className='pb-12 text-3xl'>Zürich Kids</h3>
                            <p>Branding and Instagram content creation for a Zürich based social media group for parents</p>
                        </div>
                        <div className='flex flex-row w-2/5 relative top-40 left-20'>
                                <img src={social01} alt="XTransfer - Business card front" className='object-fill w-full h-fit shadow-xl' />
                        </div>
                        <div className='flex justify-center w-2/5'>
                            <img src={social02} alt="XTransfer - Business card design details" className='object-fill w-full h-fit shadow-xl' />
                        </div>
                    </div>
                </div>

                {/* Listen and Learn German */}
                <div className='flex w-full flex-col md:flex-row snap-start snap-always h-screen py-24'>
                    <div className='font-kumbh flex flex-col w-3/5'>
                        <div className='flex justify-end'>
                                <img src={social03} alt="XTransfer - Business card front" className='w-[120%] h-fit shadow-xl' />
                        </div>
                        <div className='flex justify-end relative bottom-48 left-12'> {/* Adjusted this line */}
                            <img src={social04} alt="XTransfer - Business card design details" className='h-fit w-4/5 self-end shadow-xl ' />
                        </div>
                    </div>
                    <div className='pl-20 pt-48 w-2/5 text-left'>
                            <h3 className='text-3xl'>Listen & Learn - German</h3>
                            <p>Branding and video content creation for a language learning Youtube channel using AI services such as ChatGPT, Speechify and ElevenLabs</p>
                        </div>
                </div>

                  {/* Art Banners */}
                  <div className='flex w-4/5 flex-col md:flex-col snap-start snap-always h-screen pt-4 mt-20 self-center'>
                    <div className='w-full flex justify-center self-center'>
                        <img src={social05} alt="Sleek and Modern Bank Card Design" className='w-full md:w-2/3' />
                    </div>

                    <div className='w-full font-kumbh text-left flex justify-center'>
                        <div className='pt-4 md:pb-0 text-center'>
                            {/* <h3 className='text-3xl'>Art banners</h3> */}
                            <p>Ad banners for an online art gallery</p>
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

export default SocialMarketing;
