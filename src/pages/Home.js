import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../logo.svg';

const Home = () => {
    useEffect(() => {
        document.title = 'Design Kreativ - Contact us for custom design, we are online!';
    }, []);

    return (
    <div className='relative'>
      <div className='flex justify-center flex-col md:flex-row mx-12 z-50'>
            <div class='my-20 md:my-0 w-full md:h-screen md:w-1/3 flex items-center'>
                <img className='md:transform md:-rotate-90' src={logo} alt="Logo" />
                {/* <h1 class='font-kumbh font-extrabold text-5xl text-vivamagenta-900 transform -rotate-90'>
                    DESIGN KREATIV
                </h1> */}
            </div>
            <ul className='w-full md:w-1/3 flex flex-col gap-8 py-8'>
                <Link to="/print">
                <li className='anim1 px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivamagenta-300 border-vivamagenta-900 font-kumbh font-bold uppercase text-xl tracking-wider text-vivamagenta-900 bg-white hover:bg-vivamagenta-900 hover:text-white'>Print</li>
                </Link>
                <Link to="/socialmarketing">
                <li className='anim2 px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivapink-300 border-vivapink-900 font-kumbh font-bold uppercase text-xl tracking-wider text-vivapink-900 bg-white hover:bg-vivapink-900 hover:text-white'>Social Media</li>
                </Link>
                <Link to="/uiux">
                <li className='anim3 px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivapurple-300 border-vivapurple-900 font-kumbh font-bold uppercase text-xl tracking-wider text-vivapurple-900 bg-white hover:bg-vivapurple-900 hover:text-white'>UI/UX</li>
                </Link>
                <Link to="/webmobile">
                <li className='anim4 px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivaviolet-300 border-vivaviolet-900 font-kumbh font-bold uppercase text-xl tracking-wider text-vivaviolet-900 bg-white hover:bg-vivaviolet-900 hover:text-white'>Web</li>
                </Link>
                <Link to="/branding">
                <li className='anim5 px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivanautica-300 border-vivanautica-900 font-kumbh font-bold uppercase text-xl tracking-wider text-vivanautica-900 bg-white hover:bg-vivanautica-900 hover:text-white'>Branding</li>
                </Link>
                <Link to="/illustrations">
                <li className='anim6 px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-vivamidnight-300 border-vivamidnight-900 font-kumbh font-bold uppercase text-xl tracking-wider text-vivamidnight-900 bg-white hover:bg-vivamidnight-900 hover:text-white'>Illustrations</li>
                </Link>
                <Link to="/photos">
                <li className='anim7 px-10 py-4 border-4 hover:ring-8 hover:ring-offset-4 hover:ring-gray-300 border-gray-950 font-kumbh font-bold uppercase text-xl tracking-wider text-gray-950 hover:bg-gray-800 bg-white hover:text-white'>Photos</li>
                </Link>
            </ul>
            <div className='w-full md:w-1/3 flex'>
                <h3 className='font-gloria text-3xl self-end w-full text-center my-14 md:mb-14 md:mt-0'>Drop us a line here ></h3>
            </div>
        </div>
        <div className='fixed top-0 left-0 w-screen h-screen -z-40'>
            <p className='font-kumbh absolute right-96 bottom-96 w-full h-screen text-vivamidnight-50 text-xl  origin-center leading-10 -rotate-45'>
• digital design • creativity • pixels • visuals • colors • typography • images • user interfaces • experiences • user experience design • ☺ • user-friendly research • wireframes • usability testing • interactions • web design • html • css • javascript • responsive layouts • desktops • tablets • smartphones • graphic design • logos • banners • ☺ • social media graphics ☺ • animation • motion designers • keyframes • timelines • characters • icons • augmented reality • virtual reality • industry-standard • adobe creative suite • ☺ • ui/ux design ☺ • prototyping tools • maestros • digital masterpieces • collaboration • developers • marketers • product managers • communication • artificial intelligence • ☺ • design automation ☺ • algorithms • layouts • copy • human creativity • machine intelligence • future design realm • artists • technologists • captivating canvas • narratives • human expression • technology interface • ☺ • happiness ☺ • user journey • aesthetics • branding • composition • ☺ • responsive typography • ☺ • information architecture • design thinking • user research • usability • wireframing • prototyping • user-centered design • interaction design • visual design • graphic elements • color theory • design principles • design trends • ☺ • joy • design process • design patterns • data visualization • motion graphics • ☺ • illustration ☺ • digital illustration • sketching • vector graphics • raster graphics • image editing • ☺ • happiness • design software • design tools • user flows • user testing • user feedback • user personas • design iterations • design critique • design presentations • design workshops • design sprints • design documentation • design guidelines • design systems • design collaboration • design education • design portfolios • design communities • design conferences • design inspiration • ☺ • design blogs ☺ • design books • design podcasts • design resources • design awards • user interface design • user interface elements • user interface patterns • ☺ • ui design principles ☺ • ui design trends • ui design best practices • ui animations • ui microinteractions • ui prototyping • ui testing • ui patterns • ui libraries • ui frameworks • design ethics • accessibility in design • inclusive design • responsive design • ☺ • mobile-first design ☺ • user onboarding • ☺ • joy • ux research • ux design methodologies • ux personas • ux wireframes • ux prototyping • ux testing • ux patterns • ux principles • ux best practices • ux workshops • ux documentation • ux guidelines • ux collaboration • ux education • ux portfolios • ux communities • ux conferences • ☺ • ux inspiration • ☺ • ux blogs • ux books • ux podcasts • ux resources • ☺ • ux awards • ux design • ☺ • user empathy ☺ • user needs • user goals • user satisfaction • user emotions • user behavior • user context • user personas • user profiling • user journey mapping • user interviews • user testing • user feedback • ☺ • user experience analytics ☺ • user research tools • user-centered design • human-computer interaction • user interface • usability • heuristic evaluation • cognitive psychology • information design • design principles • design thinking • design systems • atomic design • design leadership • design management • design strategy • design innovation • design ethics • design for social impact • ☺ • inclusive design • design education • design careers • design thinking workshops • design thinking frameworks • design thinking tools • design thinking methodologies • design thinking process • ☺ • happiness • social media design • print • posters • flyers • brochures • graphic design
• digital design • creativity • pixels • visuals • colors • typography • images • user interfaces • experiences • user experience design • ☺ • user-friendly research • wireframes • usability testing • interactions • web design • html • css • javascript • responsive layouts • desktops • tablets • smartphones • graphic design • logos • banners • ☺ • social media graphics ☺ • animation • motion designers • keyframes • timelines • characters • icons • augmented reality • virtual reality • industry-standard • adobe creative suite • ☺ • ui/ux design ☺ • prototyping tools • maestros • digital masterpieces • collaboration • developers • marketers • product managers • communication • artificial intelligence • ☺ • design automation ☺ • algorithms • layouts • copy • human creativity • machine intelligence • future design realm • artists • technologists • captivating canvas • narratives • human expression • technology interface • ☺ • happiness ☺ • user journey • aesthetics • branding • composition • ☺ • responsive typography • ☺ • information architecture • design thinking • user research • usability • wireframing • prototyping • user-centered design • interaction design • visual design • graphic elements • color theory • design principles • design trends • ☺ • joy • design process • design patterns • data visualization • motion graphics • ☺ • illustration ☺ • digital illustration • sketching • vector graphics • raster graphics • image editing • ☺ • happiness • design software • design tools • user flows • user testing • user feedback • user personas • design iterations • design critique • design presentations • design workshops • design sprints • design documentation • design guidelines • design systems • design collaboration • design education • design portfolios • design communities • design conferences • design inspiration • ☺ • design blogs ☺ • design books • design podcasts • design resources • design awards • user interface design • user interface elements • user interface patterns • ☺ • ui design principles ☺ • ui design trends • ui design best practices • ui animations • ui microinteractions • ui prototyping • ui testing • ui patterns • ui libraries • ui frameworks • design ethics • accessibility in design • inclusive design • responsive design • ☺ • mobile-first design ☺ • user onboarding • ☺ • joy • ux research • ux design methodologies • ux personas • ux wireframes • ux prototyping • ux testing • ux patterns • ux principles • ux best practices • ux workshops • ux documentation • ux guidelines • ux collaboration • ux education • ux portfolios • ux communities • ux conferences • ☺ • ux inspiration • ☺ • ux blogs • ux books • ux podcasts • ux resources • ☺ • ux awards • ux design • ☺ • user empathy ☺ • user needs • user goals • user satisfaction • user emotions • user behavior • user context • user personas • user profiling • user journey mapping • user interviews • user testing • user feedback • ☺ • user experience analytics ☺ • user research tools • user-centered design • human-computer interaction • user interface • usability • heuristic evaluation • cognitive psychology • information design • design principles • design thinking • design systems • atomic design • design leadership • design management • design strategy • design innovation • design ethics • design for social impact • ☺ • inclusive design • design education • design careers • design thinking workshops • design thinking frameworks • design thinking tools • design thinking methodologies • design thinking process • ☺ • happiness • social media design • print • posters • flyers • brochures • graphic design

            </p>
        </div>
    </div>
    )
  };

export default Home;