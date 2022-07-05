import Instagram from "./icons/footer/Instagram";
import Dribbble from "./icons/footer/Dribbble";
import Behance from "./icons/footer/Behance";

const Footer = ({ className }: { className: string }) => {
    return (
        <ul className={className}>
            <li className="inline-block mr-6">
                <a href="http://instagram.com/kostyastupar" target="_blank">
                    <Instagram />
                </a>
            </li>
            <li className="inline-block mr-6">
                <a href="https://www.behance.net/k1ngcreative" target="_blank">
                    <Dribbble />
                </a>
            </li>
            <li className="inline-block mr-6">
                <a href="https://www.behance.net/k1ngcreative" target="_blank">
                    <Behance />
                </a>
            </li>
        </ul>
    )
};

export default Footer;