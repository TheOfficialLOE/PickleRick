import Instagram from "./icons/footer/Instagram";
import Dribbble from "./icons/footer/Dribbble";
import Behance from "./icons/footer/Behance";
import ComponentPropType from "../util/ComponentPropType";

const Footer = ({ className }: ComponentPropType) => {
    return (
        <ul className={className}>
            <li className="inline-block mr-6">
                <a href="http://instagram.com/kostyastupar" target="_blank" rel="noreferrer">
                    <Instagram />
                </a>
            </li>
            <li className="inline-block mr-6">
                <a href="https://www.behance.net/k1ngcreative" target="_blank" rel="noreferrer">
                    <Dribbble />
                </a>
            </li>
            <li className="inline-block mr-6">
                <a href="https://www.behance.net/k1ngcreative" target="_blank" rel="noreferrer">
                    <Behance />
                </a>
            </li>
        </ul>
    )
};

export default Footer;