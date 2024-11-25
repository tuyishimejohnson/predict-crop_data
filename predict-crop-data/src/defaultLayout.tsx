import { Outlet, Link } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <nav className="bg-red-400 flex justify-between py-6 px-32 font-noto">
        <div>
          <Link to={"/"}>Grow Initiative</Link>
        </div>

        <div className="flex justify-between gap-5 w-1/3">
          <div className="flex gap-10">
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/contacts"}>Contacts</Link>
          </div>

          <div className="flex gap-3">
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Sign Up</Link>
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
