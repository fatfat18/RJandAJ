import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(faEnvelope);

const Home: React.FC = () => {
  return (
    <>
      <div className="flex xl:flex-row flex-col  items-center justify-center  w-screen xl:h-[90vh] h-max xl:mt-0 mt-8  overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-pink-500">
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
              <input type="email" className=" p-3 rounded-xl pl-12 w-full border-2 border-gray-300 font-medium text-slate-950" placeholder="Enter your email" />
              <FontAwesomeIcon icon={faEnvelope} className="absolute text-2xl left-3 top-[.85rem] text-gray-500" />
            </div>

            <button className="p-3 px-8 rounded-xl font-black border border-cyan-400 transition duration-500 bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text  ">
              Subscribe
            </button>
          </div>
        </div>

        <div className="xl:w-1/2 w-full flex items-center justify-center  xl:h-full h-max  " data-aos="fade" data-aos-duration="1000" data-aos-delay="700">
          <img src="../../src/assets/images/front2.jpg" className="xl:h-[90%] h-60  xl:w-full w-3/4 object-cover object-bottom xl:rounded-l-3xl rounded-md" />
        </div>
      </div>

      <div className="h-screen w-full bg-gradient-to-t from-cyan-500 via-cyan-500 to-pink-500 pt-20">
        <div className="w-full flex flex-col text-center justify-center items-center ">
          <div className="w-full flex text-center justify-center items-center mb-20">
            <p className="text-7xl font-black w-full">Why GoodFinds?</p>
          </div>
          <div className="w-full flex text-center justify-center items-center gap-20 ">
            <div className="w-96 h-80 rounded-3xl bg-white text-slate-900 p-10">
              <div className="w-full flex items-center justify-center h-1/4 text-5xl font-bold ">Text</div>
              <div className="w-full flex items-center justify-center h-3/4 text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="w-96 h-80 rounded-3xl bg-white text-slate-900 p-10">
              <div className="w-full flex items-center justify-center h-1/4 text-5xl font-bold ">Text</div>
              <div className="w-full flex items-center justify-center h-3/4 text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="w-96 h-80 rounded-3xl bg-white text-slate-900 p-10">
              <div className="w-full flex items-center justify-center h-1/4 text-5xl font-bold ">Text</div>
              <div className="w-full flex items-center justify-center h-3/4 text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
