import ThumbUp from "./icons/ThumbUp";
import Bookmark from "./icons/Bookmark";
import Share from "./icons/Share";

export default ({ className }: { className: string }) => {
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