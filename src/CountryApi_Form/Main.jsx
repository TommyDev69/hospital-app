import FormOperate from "./FormOperate";
import Map from "./Map";

const Main = () => {
    return ( 
        <div className="py-20">
            <h1 className="text-[34px] md:text-[45px] font-bold uppercase pl-[20%] w-full">get in touch</h1>
        <div className="grid md:grid-cols-2">

            <FormOperate />
            <div>

            <Map/>
            </div>
        </div>
        </div>
     );
}
 
export default Main;