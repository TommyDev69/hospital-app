
import FormOperations from "./FormOperations";
import Receipt from "./Receipt";

const BookingCard = () => {
    return (  
    

        <div className="relative min-w-full md:pl-[21px] lg:pl-[58px] pl-[32px]  md:min-h-[350px] min-h-[478px] container-fluid h-[300px] pb-[40px]">

            <div className="shadow-2xl rounded-xl overflow-x-hidden absolute bg-red-800 top-[-190px] md:w-[90%] shadow-[#0cb7d6] w-[80%]  my-10 ">
                <Receipt />
                {/* <FormOperations /> */}
                
            </div>
        </div>
        
    );
}
 
export default BookingCard;