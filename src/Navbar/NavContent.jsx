const NavContent = ({ navLink, navLinks, isOpen }) => {
  return (
    <nav
      id="primary-navigation"
      className={`${isOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full mt-3 flex-col gap-3 bg-[#087f95] px-4 py-4 text-lg text-white shadow-lg md:static md:mt-0 md:flex md:flex-row md:items-center md:justify-around md:bg-transparent md:px-0 md:py-10 md:text-[18px] lg:text-[22px] md:shadow-none`}
    >
      <ul className="flex flex-col md:flex-row">
        {navLink}
     
      </ul>
      <ul className="flex flex-col md:flex-row">{navLinks}</ul>
    </nav>
  );
};

export default NavContent;
