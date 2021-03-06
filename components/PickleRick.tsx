import { Fragment, useState } from "react";
import Image from 'next/image'
import Loading from "./Loading";
import ComponentPropType from "../util/ComponentPropType";

const PickleRick = ({ className }: ComponentPropType) => {
    const [loading, setLoading] = useState<boolean>(true);

    const loadingHandler = () => {
        setLoading(false);
    }

    return (
        <Fragment>
            { loading && <Loading /> }
            <Image
                src="https://i.ibb.co/30pgMWf/pickle-rick-small.gif"
                loader={() => "https://i.ibb.co/30pgMWf/pickle-rick-small.gif"}
                width={1400}
                height={1050}
                alt="Pickle Rick"
                className={className}
                onLoad={loadingHandler}
            />
        </Fragment>

    );
};

export default PickleRick;