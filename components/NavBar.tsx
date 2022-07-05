import ThumbUp from "./icons/navbar/ThumbUp";
import Bookmark from "./icons/navbar/Bookmark";
import Share from "./icons/navbar/Share";
import ComponentPropType from "../util/ComponentPropType";

const NavBar = ({ className }: ComponentPropType) => {
    return (
        <ul className={className}>
            <li className="inline-block mr-8 md:mr-16">
                <Share />
            </li>
            <li className="inline-block mr-8 md:mr-16">
                <Bookmark />
            </li>
            <li className="inline-block mr-4 md:mr-16">
                <ThumbUp />
            </li>
        </ul>
    )
};

export default NavBar;