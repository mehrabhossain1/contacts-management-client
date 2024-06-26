import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navbar bg-[#586E8D] shadow-lg rounded-lg text-white">
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
            className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/add-contacts">Add Contacts</Link>
            </li>
            <li>
              <Link to="/all-contacts">All Contacts</Link>
            </li>
          </ul>
        </div>
        <Link to="/">Contact Management</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/add-contacts">Add Contacts</Link>
          </li>
          <li>
            <Link to="/all-contacts">All Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
