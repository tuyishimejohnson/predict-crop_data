import irrigation from "./assets/images/erwan-hesry-1q75BReKpms-unsplash.jpg";
import Button from "./components/button";

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
            <Button>Predict Now!</Button>
          </div>
        </div>
        <div className="">
          <img
            src={irrigation}
            alt="crops inside the green house"
            className="w-full h-96 object-cover brightness-25"
          />
        </div>
        <div className="bg-slate-400 px-24">
          <div className="w-1/2">
            <h1 className="text-3xl font-semibold">This is the first head</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              similique asperiores nulla fugiat, obcaecati, nihil sequi at amet
              neque necessitatibus repellendus, autem impedit vitae quis velit
              inventore repudiandae ab delectus.
            </p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
