import logo from '../images/logo.svg';

import face from '../images/icon-facebook.svg';
import twit from '../images/icon-twitter.svg';
import insta from '../images/icon-instagram.svg';

function Footer () {
    return (
        <>
        <div className='font-BaiJamjuree bg-Cinza py-8 grid gap-12 lg:grid-cols-3 justify-items-center'>
            <div className='flex flex-col items-center space-y-4'>
                <img className='w-12' src={logo} />
            </div>

            <ul className='grid grid-cols-3 gap-x-8 gap-y-4 text-gray-600 text-center'>
                <li className="hover:text-black cursor-pointer">FAQs</li>
                <li className="hover:text-black cursor-pointer">Privacy Policy</li>

                <li className="hover:text-black cursor-pointer">Install Guide</li>
                <li className="hover:text-black cursor-pointer">Contact Us</li>
                
                <li className="hover:text-black cursor-pointer">Press Kit</li>
            </ul>

            <div className='flex space-x-6 justify-center'>
                <img className="w-6 h-6 hover:opacity-80 transition-opacity duration-200" src={face} />
                <img className="w-6 h-6 hover:opacity-80 transition-opacity duration-200" src={twit} />
                <img className="w-6 h-6 hover:opacity-80 transition-opacity duration-200" src={insta} />
            </div>
        </div>
        </>
    )
}

export default Footer;