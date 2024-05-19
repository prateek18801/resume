import { FaMapLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex flex-col justify-between mb-5 md:flex-row print:flex-row">
            <div>
                <div className="text-2xl font-semibold font-montserrat md:text-3xl">PRATEEK CHAURASIA</div>
                <div className="mb-1 text-base font-semibold text-gray-600">Software Developer</div>
                <a className="flex items-center mb-0.5 font-medium" href="https://maps.app.goo.gl/XK16j7aB3cP7B5J39" target="_blank">
                    <FaMapLocationDot className="mr-1 text-accent-color" />: Ghaziabad, Uttar Pradesh, IN
                </a>
                <div className="flex flex-col font-medium gap-x-6 md:flex-row print:flex-row">
                    <a className="flex items-center" href="mailto:prateek18801@gmail.com">
                        <FaEnvelope className="my-auto mr-1 text-accent-color" />: prateek18801@gmail.com
                    </a>
                    <a className="flex items-center" href="tel:+918726127335">
                        <IoCallSharp className="my-auto mr-1 text-accent-color" />: (+91) 87261 27335
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-y-1 md:pt-7 print:pt-7">
                <a className="flex font-medium hover:underline" href="https://linkedin.com/in/prateekchaurasia/" target="_blank">
                    <FaLinkedin className="my-auto mr-1 text-accent-color" />
                    <div>linkedin.com/in/prateekchaurasia</div>
                </a>
                <a className="flex font-medium hover:underline" href="https://prateek18801.github.io/portfolio/" target="_blank">
                    <FaGlobe className="my-auto mr-1 text-accent-color" />
                    <div>prateek18801.github.io/portfolio</div>
                </a>
                <a className="flex font-medium hover:underline" href="https://github.com/prateek18801/" target="_blank">
                    <FaGithub className="my-auto mr-1 text-accent-color" />
                    <div>github.com/prateek18801</div>
                </a>
            </div>
        </div>
    );
}

export default Header;
