import PickleRick from "../components/PickleRick";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Details from "../components/Details";

const Main = () => {
    return (
        <div className="h-screen md:mx-5 md:py-6 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4">
            <div className="row-[2] md:row-span-2 flex flex-col">
                <NavBar className="ml-auto mt-4"/>
                <Details />
                <Footer className="ml-12"/>
            </div>
            <PickleRick
                className="row-[1] my-auto h-full md:rounded-3xl md:object-cover place-self-center"/>
        </div>
    );
};

export default Main;