import { Outlet, NavLink } from "react-router-dom";


const activeLinks = ({ isActive }: { isActive: boolean }) => isActive ? 'text-blue-500' : undefined; 

const DefaultLayout = () => {
  return (
    <div>
      <nav className="flex justify-between py-6 px-32 font-noto items-center">
        <div>
          <NavLink to={"/"}>Grow Initiative</NavLink>
        </div>

        <div className="flex justify-between gap-5 w-1/3 items-center">
          <div className="flex gap-10">
            <NavLink
              to={"/about"}
              className={activeLinks}
            >
              About
            </NavLink>
            <NavLink
              to={"/services"}
              className={activeLinks}
            >
              Services
            </NavLink>
            <NavLink
              to={"/contacts"}
              className={activeLinks}
        
            >
              Contacts
            </NavLink>
          </div>

          <div className="flex gap-3 items-center">
            <NavLink
              to={"/login"}
              className={activeLinks}
              
            >
              Login
            </NavLink>
            <NavLink
              to={"/signup"}
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
