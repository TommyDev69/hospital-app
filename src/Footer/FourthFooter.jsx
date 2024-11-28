import logo1 from '../images/img-4.png';
import logo2 from '../images/img-5.png';


const FourthFooter = () => {
    return ( 
        <div className="pl-2 md:pl-20 lg:pl-0">
        <div className="flex items-center py-16 ">
          <div className="bg-blue-500 w-14 md:w-10 lg:w-16  lg:h-16 md:h-10 h-14 rounded-full"></div>
          <p className="font-bold uppercase text-[28px] pl-4 text-white">
            news
          </p>
        </div>
  
        <div className="pl-0 lg:pl-4">
          <img src={logo1} alt = "" className='pb-5 '/>
          <img src={logo2} alt = "" />

        </div>
      </div>
     );
}
 
export default FourthFooter;