import Instagram from "./icons/footer/Instagram";
import Dribbble from "./icons/footer/Dribbble";
import Behance from "./icons/footer/Behance";

export default ({ className }: { className: string }) => {
    return (
        <ul className={className}>
            <li className="inline-block mr-6">
                <a href="http://instagram.com/kostyastupar">
                    <Instagram />
                </a>
            </li>
            <li className="inline-block mr-6">
                <a href="https://www.behance.net/k1ngcreative">
                    <Dribbble />
                </a>
            </li>
            <li className="inline-block mr-6">
                <a href="https://www.behance.net/k1ngcreative">
                    <Behance />
                </a>
            </li>
        </ul>
    )
};