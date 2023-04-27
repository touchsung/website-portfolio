const NAV_MENUS = ["About", "Experience", "Contact", "Resume"];
const NavBar = () => {
  return (
    <nav className="w-screen bg-white shadow">
      <section className="container flex items-center justify-between py-4 text-blue-700 ">
        <h4 className="text-heading-4 font-bold">Touchsung</h4>
        <li className="flex cursor-pointer list-none items-center gap-16 text-heading-5 font-semibold">
          {NAV_MENUS.map((item, index) => (
            <ul className="transition-colors ease-in hover:text-blue-900">
              {index === NAV_MENUS.length - 1 ? (
                <button className="btn-pushable">
                  <span className="text-pushable">{item}</span>
                </button>
              ) : (
                item
              )}
            </ul>
          ))}
        </li>
      </section>
    </nav>
  );
};

export default NavBar;
