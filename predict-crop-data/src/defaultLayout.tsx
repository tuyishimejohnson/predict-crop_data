import { Outlet, NavLink } from "react-router-dom";

const activeLinks = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-blue-500" : undefined;

const DefaultLayout = () => {
  return (
    <div>
      <nav className="flex justify-between py-6 px-32 font-noto items-center">
        <div>
          <NavLink to={"/"}>Grow Initiative</NavLink>
        </div>

        <div className="flex justify-between gap-5 w-1/3 items-center">
          <div className="flex gap-10">
            <NavLink to={"/dashboard"} className={activeLinks}>
              Dashboard
            </NavLink>
            <NavLink to={"/predict"} className={activeLinks}>
              Predict
            </NavLink>
            <NavLink to={"/contacts"} className={activeLinks}>
              Contacts
            </NavLink>
          </div>

          <div className="flex gap-3 items-center">
            <NavLink to={"/faqs"} className={activeLinks}>
              FAQs
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
