import { BoltIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import Mobile from "./components/Mobile";
const Header = () => {
  return (
    <div className="bg-gray-100 px-4 sm:px-0 py-5 md:px-20 lg:px-8">
      <div className="flex justify-between items-center relative">
        {/* Logo part */}
        <Link to="/" className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 font-bold text-xl tracking-wide text-gray-800">
            nextPage
          </span>
        </Link>
        {/* Nav part  */}
        <div>
          <ul className=" items-center space-x-8 text-lg font-semibold   hidden lg:flex">
            <li>
              <NavLink
                to="/ "
                className={({ isActive }) => (isActive ? "text-blue-700" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books "
                className={({ isActive }) => (isActive ? "text-blue-700" : "")}
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about "
                className={({ isActive }) => (isActive ? "text-blue-700" : "")}
              >
                About
              </NavLink>
            </li>
          </ul>
          <Mobile />
        </div>
      </div>
    </div>
  );
};
export default Header;
