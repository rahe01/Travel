import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navLink = (
    <>
      <div className="flex gap-7 flex-col md:flex-row">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold text-[16px]"
              : " text-black font-bold text-[16px]"
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/explore"}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold text-[16px]"
              : " text-black font-bold text-[16px]"
          }
        >
          Explore
        </NavLink>

        <NavLink
          to={"/pricing"}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold text-[16px]"
              : " text-black font-bold text-[16px]"
          }
        >
          Pricing Plans
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold text-[16px]"
              : " text-black font-bold text-[16px]"
          }
        >
          About
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="container mx-auto ">
      <div className="navbar bg-transparent fixed z-[10]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow rounded-box  "
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl"> <img src="https://iili.io/Jr9pF4f.png" /><span className="font-bold">WiseTrips</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          
        </div>
      </div>
    </div>
  );
};

export default Nav;
