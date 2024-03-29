import { FaLocationDot } from 'react-icons/fa6';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='flex flex-col justify-between mb-5 md:flex-row print:flex-row'>
            <div>
                <div className='mb-1 text-3xl font-medium md:text-4xl'>Prateek Chaurasia</div>
                <div className='mb-1 text-lg font-medium text-gray-600'>Web Developer</div>
                <a className='flex mb-1 font-medium' href='https://maps.app.goo.gl/XK16j7aB3cP7B5J39' target='_blank'>
                    <FaLocationDot className='my-auto mr-1 text-orange-500' />
                    Ghaziabad, Uttar Pradesh
                </a>
                <div className='flex flex-col md:flex-row print:flex-row'>
                    <a className='flex mb-1 mr-4 font-medium' href='mailto:prateek18801@gmail.com'>
                        <FaEnvelope className='my-auto mr-1 text-orange-500' />
                        prateek18801@gmail.com
                    </a>
                    <a className='flex mb-1 font-medium' href='tel:+918726127335'>
                        <BsTelephoneFill className='my-auto mr-1 text-orange-500' />
                        +91 87261 27335
                    </a>
                </div>
            </div>
            <div className='flex flex-col'>
                <a className='flex mb-1 font-medium md:mt-8 print:mt-8' href='https://github.com/prateek18801/' target='_blank'>
                    <FaGithub className='my-auto mr-1 text-orange-500' />
                    <div>github.com/prateek18801</div>
                </a>
                <a className='flex mb-1 font-medium' href='https://linkedin.com/in/prateekchaurasia/' target='_blank'>
                    <FaLinkedin className='my-auto mr-1 text-orange-500' />
                    <div>linkedin.com/in/prateekchaurasia</div>
                </a>
                <a className='flex font-medium' href='https://prateek18801.github.io/portfolio/' target='_blank'>
                    <FaGlobe className='my-auto mr-1 text-orange-500' />
                    <div>prateek18801.github.io/portfolio</div>
                </a>
            </div>
        </div>
    );
}

export default Header;
