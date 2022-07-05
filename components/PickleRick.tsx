import Image from 'next/image'
import PickleRickGif from "../public/pickle-rick.gif";

const PickleRick = ({ className }: { className: string }) => {
    return (
        <Image
            src={PickleRickGif}
            alt="Pickle Rick"
            className={className}
        />
    );
};

export default PickleRick;