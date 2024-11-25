import { Outlet, NavLink } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <nav className="bg-red-400 flex justify-between py-6 px-32 font-noto items-center">
        <div>
          <NavLink to={"/"}>Grow Initiative</NavLink>
        </div>

        <div className="flex justify-between gap-5 w-1/3 items-center">
          <div className="flex gap-10">
            <NavLink
              to={"/about"}
              style={({ isActive }) => ({
                color: isActive ? "blue" : undefined,
              })}
            >
              About
            </NavLink>
            <NavLink
              to={"/services"}
              style={({ isActive }) => ({
                color: isActive ? "blue" : undefined,
              })}
            >
              Services
            </NavLink>
            <NavLink
              to={"/contacts"}
              style={({ isActive }) => ({
                color: isActive ? "blue" : undefined,
              })}
            >
              Contacts
            </NavLink>
          </div>

          <div className="flex gap-3 items-center">
            <NavLink
              to={"/login"}
              style={({ isActive }) => ({
                color: isActive ? "blue" : undefined,
              })}
            >
              Login
            </NavLink>
            <NavLink
              to={"/signup"}
              style={({ isActive }) => ({
                color: isActive ? "blue" : undefined,
              })}
              className={`bg-blue-600 px-5 py-2 rounded-md`}
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
