import { Fragment, useState } from "react";
import PickleRickGif from "../public/pickle-rick.gif";
import Image from 'next/image'
import Loading from "./Loading";

const PickleRick = ({ className }: { className: string }) => {
    const [loading, setLoading] = useState<boolean>(true);
    console.log(loading)
    const loadingHandler = () => {
        console.log("loaded")
        setLoading(false);
    }

    return (
        <Fragment>
            { loading && <Loading /> }
            <Image
                src={PickleRickGif}
                // width={1400}
                // height={1050}
                alt="Pickle Rick"
                className={className}
                onLoad={loadingHandler}
            />
        </Fragment>

    );
};

export default PickleRick;