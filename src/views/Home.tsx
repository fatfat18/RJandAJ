import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(faEnvelope);

const Home: React.FC = () => {
  return (
    <>
      <div className="flex xl:flex-row flex-col  items-center justify-center  w-screen h-screen  overflow-hidden">
        <div className="xl:w-1/2 w-full flex flex-col items-center justify-center  h-full xl:p-10 p-3 gap-4">
          <div className=" w-full flex items-center justify-start xl:text-6xl text-3xl font-black" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
            Find the Best, Shop the Rest – Only at GoodFinds!
          </div>
          <div className=" w-full flex items-center justify-start font-medium xl:text-2xl text-md" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
            Shop Smart, Shop Stylish , Live Better – Find Your Favorites Online!
          </div>
          <div className=" w-full flex items-center justify-start gap-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
            <div className="xl:w-1/2 w-full relative">
              <input type="email" className=" p-4 rounded-xl pl-12 w-full border-2 border-gray-300" placeholder="Enter your email" />
              <FontAwesomeIcon icon={faEnvelope} className="absolute text-2xl left-3 top-4 text-gray-500" />
            </div>

            <button className="p-4 px-8 rounded-xl bg-blue-800 text-white xl:w-1/5 w-1/2">Subscribe</button>
          </div>
        </div>

        <div className="xl:w-1/2 w-full flex items-center justify-center  xl:h-full h-max" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
          <img src="../../src/assets/images/front2.jpg" className="xl:h-[90%] h-60  xl:w-full w-60 object-cover object-bottom rounded-md" />
        </div>
      </div>
    </>
  );
};

export default Home;
