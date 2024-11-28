const SecondFooter = () => {
  return (
    <div className="pl-2 md:pl-20 lg:pl-0">
        <div className="flex items-center py-16 ">
            <div className="bg-blue-500 w-14 md:w-10 lg:w-16  lg:h-16 md:h-10 h-14 rounded-full"></div>
            <p className="font-bold uppercase text-[28px] text-white pl-4">
              useful link
            </p>
        </div>

      <div className="w-1/2">
        <p className="font-bold capitalize text-[24px] text-white hover:text-blue-500 hover:cursor-pointer">
          home
        </p>
      </div>
      <div className="w-1/2">
        <p className="font-bold capitalize text-[24px] text-white hover:text-blue-500 hover:cursor-pointer">
          about
        </p>
      </div>

      <div className="w-1/2">
        <p className="font-bold  text-[24px] text-white hover:text-blue-500 hover:cursor-pointer">
          doctors
        </p>
      </div>

      <div className="w-1/2">
        <p className="font-bold capitalize text-white text-[24px] hover:text-blue-500 hover:cursor-pointer ">
          news
        </p>
      </div>
      <div className="w-1/2">
        <p className="font-bold capitalize text-white text-[24px] hover:text-blue-500 hover:cursor-pointer">
          teatment
        </p>
      </div>
      <div className="w-1/2">
        <p className="font-bold capitalize text-white text-[24px] hover:text-blue-500 hover:cursor-pointer">
          contact us
        </p>
      </div>
    </div>
  );
};

export default SecondFooter;
