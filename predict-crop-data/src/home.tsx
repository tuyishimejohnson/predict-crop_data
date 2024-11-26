import irrigation from "./assets/images/erwan-hesry-1q75BReKpms-unsplash.jpg";

const Home = () => {
  return (
    <div className="relative text-white font-noto">
      <div className="absolute z-10">
        <div className="px-10">
          <p className="text-2xl mt-24">
            Lorem ipsum dolor sait amet consectetur adipisicing elit. Officia
            rerum impedit id perspiciatis atque, nostrum fuga voluptatem
            possimus! In cupiditate sunt aspernatur nisi molestias assumenda
            architecto cumque rerum tempore maiores?
          </p>
          <button className="mt-10 border px-8 py-4 rounded-full">Predict Now</button>
        </div>
      </div>
      <div className="">
        <img
          src={irrigation}
          alt="crops inside the green house"
          className="w-full h-96 object-cover brightness-25"
        />
      </div>
    </div>
  );
};

export default Home;
