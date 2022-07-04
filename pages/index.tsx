import PickleRick from "../components/PickleRickComponent";


const Main = () => {
    return (
        <div className="h-screen md:mx-5 md:py-6 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
            <p>I'm Pickle <br/> Rick</p>
            <PickleRick
                className="row-span-full md:row-span-1 md:rounded-3xl my-auto h-full md:object-cover place-self-center"/>
        </div>
    );
};

export default Main;