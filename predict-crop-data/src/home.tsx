import irrigation from "./assets/images/erwan-hesry-1q75BReKpms-unsplash.jpg";
import Button from "./components/button";
import Footer from "./components/footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-noto">
      <div className="relative">
        <div className="absolute z-10 text-white">
          <div className="px-10">
            <p className="text-2xl mt-24">
              Lorem ipsum dolor sait amet consectetur adipisicing elit. Officia
              rerum impedit id perspiciatis atque, nostrum fuga voluptatem
              possimus! In cupiditate sunt aspernatur nisi molestias assumenda
              architecto cumque rerum tempore maiores?
            </p>
            <Button><NavLink to={"/predict"}>Predict Now!</NavLink></Button>
          </div>
        </div>
        <div className="">
          <img
            src={irrigation}
            alt="crops inside the green house"
            className="w-full h-96 object-cover brightness-25"
          />
        </div>
        <div className="px-24 bg-gradient-to-r from-gray-500 from-50% to-blue-500 to-70% flex">
          <div className="">
            <h1 className="text-3xl font-semibold">This is the first head</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              similique asperiores nulla fugiat, obcaecati, nihil sequi at amet
              neque necessitatibus repellendus, autem impedit vitae quis velit
              inventore repudiandae ab delectus.
            </p>
          </div>
          <div>
          <h1>Graph</h1>
          <p>
            This is where the graphs will be.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum unde
            odit quo voluptatum quibusdam error labore enim dicta, omnis
            dolores, totam iusto incidunt cum nostrum ad quam deleniti! Debitis,
            laudantium?
          </p>
        </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
