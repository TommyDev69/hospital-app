
import FormOperations from "./FormOperations";
import Receipt from "./Receipt";

const BookingCard = () => {
    return (  
    

        <div className="relative min-w-full bg-blue-800  z-1 md:pl-[45px] lg:pl-[58px] px-[0px] mmd:pr-[3m0px]  md:min-h-[350px] min-h-[478px] container-fluid h-[300px] pb-[40px]">

            <div className="shadow-2xl rounded-xl z-1 absolute overnflow-x-hidden bg-fuchsia-800 left-2 top-[-190px] md:w-[90%] shadow-[#0cb7d6] w-[95%]  my-10 ">
                <Receipt />
                {/* <FormOperations /> */}
                
            </div>
        </div>
        
    );
}
 
export default BookingCard;