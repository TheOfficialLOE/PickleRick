import { Fragment, useEffect, useRef, useState } from "react";
import Loading from "./Loading";

const PickleRick = ({ className }: { className: string }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const imgRef = useRef<HTMLImageElement>(null);

    const loadingHandler = () => {
        console.log("loaded")
        setLoading(false);
    }

    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            loadingHandler();
        }
    }, [imgRef]);

    return (
        <Fragment>
            {loading && <Loading/>}
            <img
                src="/pickle-rick.gif"
                alt="Pickle Rick"
                className={className}
                ref={imgRef}
                onLoad={loadingHandler}
            />
        </Fragment>

    );
};

export default PickleRick;