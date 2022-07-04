import PickleRick from "../components/PickleRick";
import NavBar from "../components/NavBar";


const Main = () => {
    return (
        <div className="h-screen md:mx-5 md:py-6 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
            <div className="row-[2] md:row-span-2 flex flex-row">
                <NavBar className="ml-auto mt-4"/>
            </div>
            <PickleRick
                className="row-[1] md:row-span-1 my-auto h-full md:rounded-3xl md:object-cover place-self-center"/>
        </div>
    );
};

export default Main;