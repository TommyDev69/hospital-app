const ThirdFooter = () => {
  return (
    <div className="pl-2 lg:pl-0 md:pl-10 ">
      <div className="flex items-center py-16 ">
        <div className="bg-blue-500 w-14 md:w-10 lg:w-16  lg:h-16 md:h-10 h-14 rounded-full"></div>
        <p className="font-bold uppercase  text-[26px] md:text-[22px] text-white pl-2">
          help & support
        </p>
      </div>

      <div className="[w-80%]">
        <p className=" capitalize text-[20px] md:text-[16px] text-white ">
          Welcome to the support services page of Linux. We are
          committed to providing not only excellent medical care but also
          comprehensive support to ensure your comfort and well-being during
          your visit. Our team is here to assist with everything from admission
          to discharge, and beyond. Whether you're a patient or a family member,
          we're here to guide you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default ThirdFooter;
