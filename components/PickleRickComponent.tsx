import Image from 'next/image'
import PickleRick from "../public/pickle-rick.gif";

export default ({ className }: { className: string }) => {
    return (
        <Image
            src={PickleRick}
            alt="Pickle Rick"
            className={className}
        />
    );
};
