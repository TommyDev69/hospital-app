
import FormOperations from "./FormOperations";
import Receipt from "./Receipt";

const BookingCard = () => {
    return (  
    

        <div className="relative  md:min-h-[350px] min-h-[478px] container-fluid h-[300px] pb-[40px]">

            <div className="shadow-2xl md:ml-[22px] ml-[45px] rounded-xl absolute bg-yellow-700 top-[-190px] md:w-[90%] shadow-[#0cb7d6] w-2/3  my-10 ">
                {/* <Receipt /> */}
                <FormOperations />
                
            </div>
        </div>
        
    );
}
 
export default BookingCard;