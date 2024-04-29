import Sofa from "../Imgs/SofaDiscount.png"
function DiscountSection (){
    return(
    <div className="grid grid-cols-3" >
        <img src={Sofa} className="col-span-2 ml-60"/>
        <div className="">
        <h1 className="mt-40 text-2xl uppercase ">Super <span className="text-[#142B7B] text-base">Saving </span></h1>
        <p className="text-[#142B7B] text-lg">Sale Up to 40% off +12 months Financing</p>
        <p className="text-sm ">Create a room that's welcoming with a sofa or a section couach.</p>
        <p className="text-sm">Tp help you go the extra mile for comfort and style</p>
        
         <button className="bg-black text-white px-10 py-2 mt-8 rounded">Shop Now</button>
         </div>
    </div>
    
    
    
    );
}
export default DiscountSection