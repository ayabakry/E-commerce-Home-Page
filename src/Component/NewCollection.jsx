import { Fragment } from "react";
import chairr from "../Imgs/chair.jpg"
import Gchairr from "../Imgs/Gchair.jpg"
import Tabluu from "../Imgs/tablu.jpg"
import decor from "../Imgs/sofadecor.jpg"
import living from "../Imgs/Livingroom.jpg"

function NewCollection() {
    return (
        <Fragment>
            <div className=" ml-60">
                <h1 className="uppercase text-2xl ">New <span className="text-[#BB8493] text-xl lg:w-48">Collection</span></h1>
                <div className="grid grid-cols-3 ">
                    <img className="row-span-2 w-80 mt-2 mb-6 " src={chairr} />
                    <img className="w-80 mt-2 mb-6  bg-blue-600 transition-opacity duration-300 hover:opacity-40" src={Gchairr} />
                    <img className="w-80 mt-2 mb-6 " src={Tabluu} />
                    <img className="w-80 mt-2 mb-6 " src={decor} />
                    <img className="w-80 mt-2 mb-6 " src={living} />



                </div>
            </div>

        </Fragment>
    );
}
export default NewCollection