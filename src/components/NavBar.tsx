import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
const NAV_MENUS = ["About", "Experience", "Contact", "Resume"];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-screen bg-white shadow fixed z-20">
      <section className="container flex items-center justify-between py-4 text-blue-700 md:px-md px-10">
        <h4 className="text-heading-4  tracking-widest z-20">Touchsung</h4>
        <ul
          className={`flex flex-col gap-20 py-10  text-heading-5 bg-white w-full absolute left-0 items-center z-10 rounded-b-3xl shadow-xl mt-24  ${
            click ? "translate-y-48" : "-translate-y-[500px]"
          } ease-in-out duration-300 md:flex-row md:translate-y-0 md:relative md:shadow-none md:w-fit md:z-0 md:mt-0 md:py-0 md:gap-10 lg:gap-20`}
        >
          {NAV_MENUS.map((item, index) => (
            <li
              className="w-full text-center ease-in-out duration-300 hover:text-blue-500"
              onClick={() => {
                closeMenu();
                scrollToSection(item);
              }}
            >
              {index === NAV_MENUS.length - 1 ? (
                <button className="btn-pushable">
                  <span className="text-pushable">{item}</span>
                </button>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>

        <div
          className=" text-primary-text-color text-3xl md:hidden z-20"
          onClick={handleClick}
        >
          {click ? <AiOutlineClose /> : <FiMenu />}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
