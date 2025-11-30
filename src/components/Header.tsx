import { FaMapLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";
import t from "../config/static";

const Header = () => {
    return (
        <div className="flex md:flex-row print:flex-row flex-col justify-between mb-5">
            <div>
                <div className="font-montserrat font-semibold text-2xl md:text-3xl">{t.header.name.toUpperCase()}</div>
                <div className="mb-1 font-semibold text-gray-600 text-base">{t.header.role}</div>
                <a className="flex items-center mb-0.5 font-medium" href="https://maps.app.goo.gl/XK16j7aB3cP7B5J39" target="_blank">
                    <FaMapLocationDot className="mr-1 text-accent-color" />: {t.header.location}
                </a>
                <div className="flex md:flex-row print:flex-row flex-col gap-x-6 font-medium">
                    <a className="flex items-center" href={`mailto:${t.header.email}`}>
                        <FaEnvelope className="my-auto mr-1 text-accent-color" />: {t.header.email}
                    </a>
                    <a className="flex items-center" href={`tel:${t.header.phone}`}>
                        <IoCallSharp className="my-auto mr-1 text-accent-color" />: {t.header.phone}
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-y-1 md:pt-7 print:pt-7">
                <a className="flex font-medium hover:underline" href={`https://${t.header.links.linkedin}`} target="_blank">
                    <FaLinkedin className="my-auto mr-1 text-accent-color" />
                    <div>{t.header.links.linkedin}</div>
                </a>
                <a className="flex font-medium hover:underline" href={`https://${t.header.links.portfolio}`} target="_blank">
                    <FaGlobe className="my-auto mr-1 text-accent-color" />
                    <div>{t.header.links.portfolio}</div>
                </a>
                <a className="flex font-medium hover:underline" href={`https://${t.header.links.github}`} target="_blank">
                    <FaGithub className="my-auto mr-1 text-accent-color" />
                    <div>{t.header.links.github}</div>
                </a>
            </div>
        </div>
    );
}

export default Header;
