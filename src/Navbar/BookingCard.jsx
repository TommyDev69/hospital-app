import Form from "./formBooking/Form";

const BookingCard = () => {
    return (  
    

        <div className="relative md:pl-[21px] lg:pl-[58px] pl-[14%] md:pr-[30px] pr-0 md:min-h-[350px] min-h-[478px] container-fluid h-[300px] pb-[40px]">

            <div className="shadow-2xl rounded-xl absolute bg-white top-[-190px] md:w-[90%] shadow-[#0cb7d6] w-2/3  my-10 ">
                <Form />
            </div>
        </div>
        
    );
}
 
export default BookingCard;