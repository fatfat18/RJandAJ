import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(faEnvelope);

const Home: React.FC = () => {
  return (
    <>
      <div className="flex xl:flex-row flex-col  items-center justify-center  w-screen xl:h-[90vh] h-max xl:mt-0 mt-8  overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-pink-500">
        <div className="xl:w-1/2 w-full flex flex-col items-center justify-center  xl:h-full h-max xl:p-10 p-6 gap-4 ">
          <div
            className=" w-full flex items-center justify-start xl:text-6xl text-3xl font-black bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Find the Best, Shop the Rest – Only at GoodFinds!
          </div>
          <div className=" w-full flex items-center justify-start font-medium xl:text-xl text-md text-white" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
            Shop Smart, Shop Stylish , Live Better – Find Your Favorites Online!
          </div>
          <div className=" w-full flex items-center justify-start gap-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
            <div className="xl:w-1/2 w-full relative">
              <input type="email" className=" p-3 rounded-xl pl-12 w-full border-2 border-gray-300 font-medium" placeholder="Enter your email" />
              <FontAwesomeIcon icon={faEnvelope} className="absolute text-2xl left-3 top-[.85rem] text-gray-500" />
            </div>

            <button className="p-3 px-8 rounded-xl bg-blue-800 text-white hover:bg-transparent border-2 transition duration-500 hover:bg-gradient-to-r from-cyan-500 to-pink-500 hover:text-transparent hover:bg-clip-text  ">
              Subscribe
            </button>
          </div>
        </div>

        <div className="xl:w-1/2 w-full flex items-center justify-center  xl:h-full h-max  " data-aos="fade" data-aos-duration="1000" data-aos-delay="700">
          <img src="../../src/assets/images/front2.jpg" className="xl:h-[90%] h-60  xl:w-full w-3/4 object-cover object-bottom xl:rounded-l-3xl rounded-md" />
        </div>
      </div>

      <div className="h-screen w-full bg-gradient-to-t from-cyan-500 via-cyan-500 to-pink-500">test </div>
    </>
  );
};

export default Home;
