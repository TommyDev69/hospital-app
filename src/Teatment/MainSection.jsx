import MainOperation from "./MainOperation";

const MainSection  = () => {
    let heading = 'hospital treatment';
    return (  
        <div className="container-fluid pt-[70px] pb-[70px] pl-20 pr-32">
            <h1 className="font-bold md:text-[45px] text-[34px] w-full text-center capitalize pb-20 ">{heading}</h1>
            <MainOperation />
        </div>
    );
}
 
export default MainSection ;