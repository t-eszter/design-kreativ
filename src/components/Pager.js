import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Pager() {
    const location = useLocation();
    return (
        <ul className='w-full flex flex-row gap-8 justify-center'>
            {location.pathname !== '/print' && (
            <Link to="/print">
                <li className='anim1 h-24 flex items-center px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivamagenta-300 border-vivamagenta-900 font-kumbh font-bold uppercase text-m tracking-wider text-vivamagenta-900 bg-white hover:bg-vivamagenta-900 hover:text-white'>Print</li>
            </Link>
            )}
            {location.pathname !== '/socialmarketing' && (
            <Link to="/socialmarketing">
                <li className='anim2 h-24 flex items-center  px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivapink-300 border-vivapink-900 font-kumbh font-bold uppercase text-m tracking-wider text-vivapink-900 bg-white hover:bg-vivapink-900 hover:text-white'>Marketing & Social</li>
            </Link>
            )}
            {location.pathname !== '/uiux' && (
            <Link to="/uiux">
                <li className='anim3 h-24 flex items-center px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivapurple-300 border-vivapurple-900 font-kumbh font-bold uppercase text-m tracking-wider text-vivapurple-900 bg-white hover:bg-vivapurple-900 hover:text-white'>UI/UX</li>
            </Link>
            )}
            {location.pathname !== '/webmobile' && (
            <Link to="/webmobile">
                <li className='anim4 h-24 flex items-center px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivaviolet-300 border-vivaviolet-900 font-kumbh font-bold uppercase text-m tracking-wider text-vivaviolet-900 bg-white hover:bg-vivaviolet-900 hover:text-white'>Web</li>
            </Link>
            )}
            {location.pathname !== '/branding' && (
            <Link to="/branding">
                <li className='anim5 h-24 flex items-center px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivanautica-300 border-vivanautica-900 font-kumbh font-bold uppercase text-m tracking-wider text-vivanautica-900 bg-white hover:bg-vivanautica-900 hover:text-white'>Branding</li>
            </Link>
            )}
            {location.pathname !== '/illustrations' && (
            <Link to="/illustrations">
                <li className='anim6 h-24 flex items-center px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivamidnight-300 border-vivamidnight-900 font-kumbh font-bold uppercase text-m tracking-wider text-vivamidnight-900 bg-white hover:bg-vivamidnight-900 hover:text-white'>Illustrations</li>
            </Link>
            )}
            {location.pathname !== '/photos' && (
            <Link to="/photos">
                <li className='anim7 h-24 flex items-center px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-gray-300 border-gray-950 font-kumbh font-bold uppercase text-m tracking-wider text-gray-950 hover:bg-gray-800 hover:text-white'>Photos</li>
            </Link>
            )}
            



        </ul>
    )
}

export default Pager;
