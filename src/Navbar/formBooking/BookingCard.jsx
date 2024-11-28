
import FormOperations from "./FormOperations";
import Receipt from "./Receipt";

const BookingCard = () => {
    return (  
    

        <div className="relaetive min-w-full md:min-h-[350px] min-h-[478px] container-fluid h-[300px] pb-[40px]">

            <div className="shadow-2xl mdf:mfl-[22px] mfl-[45px] rounded-xl mx-auto m absrolute bg-yellow-700 tgop-[-190px] md:w-[90%] shadow-[#0cb7d6] w-2/3  my-10 ">
                {/* <Receipt /> */}
                <FormOperations />
                
            </div>
        </div>
        
    );
}
 
export default BookingCard;