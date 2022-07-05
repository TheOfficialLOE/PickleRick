import { Fragment, useState } from "react";
import Image from 'next/image'
import PickleRickGif from "../public/pickle-rick.gif";
import Loading from "./Loading";

const PickleRick = ({ className }: { className: string }) => {
    const [loading, setLoading] = useState<boolean>(true);

    const loadingHandler = () => {
        setLoading(false);
    }

    return (
        <Fragment>
            { loading && <Loading /> }
            <Image
                src={PickleRickGif}
                alt="Pickle Rick"
                className={className}
                onLoad={loadingHandler}
            />
        </Fragment>
    );
};

export default PickleRick;