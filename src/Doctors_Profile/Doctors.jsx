import { useState} from "react";
import DoctorsPro from "./DoctorPro";
import image3 from '../images/img-3.png';
import image2 from '../images/img-2.png';
import image1 from '../images/img-1.png';
import logo from '../images/icon-1.png';
import useFetch from "./useFetch";

const Doctors = () => {
  const [image] = useState([
    { id: 1, image: image3 },
    { id: 2, image: image2 },
    { id: 3, image: image1 },
  ]);

  const { Doctors: doctors, loading, error } = useFetch("http://localhost:8001/Data");

  return (
    <div>
      {loading && <div><img src={logo} className="mx-auto" alt="loading" /></div>}
      {error && <div className="px-auto bg-red-700 text-white font-bold text-[25px] text-center"><p className="text-xl">{error.message}</p></div>}
      {doctors && <DoctorsPro data={doctors} image={image} />}
    </div>
  );
};

export default Doctors;
