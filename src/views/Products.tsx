const Products: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center  w-screen h-screen font-black xl:px-14">
        <div className="w-full h-full flex flex-col items-start justify-start">
          <p className="xl:text-4xl text-xl text-center w-full" data-aos="fade-down" data-aos-duration="1000">
            Browse Categories
          </p>

          <div className="w-full flex justify-center items-center flex-wrap gap-4 mt-10 text-slate-950 xl:px-20">
            <div
              className="xl:h-80 xl:w-80 h-24 w-24 bg-zinc-50 rounded-3xl flex flex-col items-center justify-center gap-4 border-4 border-zinc-50 hover:border-pink-500 transition duration-500"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-back"
              data-aos-delay="500"
            >
              <img src="../../src/assets/icons/handbag.png" className="w-1/2" />
              <p className="xl:text-base text-xs">Bags</p>
            </div>

            <div
              className="xl:h-80 xl:w-80 h-24 w-24 bg-zinc-50 rounded-3xl flex flex-col items-center justify-center gap-4 border-4 border-zinc-50 hover:border-pink-500 transition duration-500"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-back"
              data-aos-delay="550"
            >
              <img src="../../src/assets/icons/heels.png" className="w-1/2" />
              <p className="xl:text-base text-xs">Heels</p>
            </div>

            <div
              className="xl:h-80 xl:w-80 h-24 w-24 bg-zinc-50 rounded-3xl flex flex-col items-center justify-center gap-4 border-4 border-zinc-50 hover:border-pink-500 transition duration-500"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-back"
              data-aos-delay="600"
            >
              <img src="../../src/assets/icons/jewellery.png" className="w-1/2" />
              <p className="xl:text-base text-xs">Accessories</p>
            </div>

            <div
              className="xl:h-80 xl:w-80 h-24 w-24 bg-zinc-50 rounded-3xl flex flex-col items-center justify-center gap-4 border-4 border-zinc-50 hover:border-pink-500 transition duration-500"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-back"
              data-aos-delay="650"
            >
              <img src="../../src/assets/icons/perfume.png" className="w-1/2" />
              <p className="xl:text-base text-xs">Perfumes</p>
            </div>

            <div
              className="xl:h-80 xl:w-80 h-24 w-24 bg-zinc-50 rounded-3xl flex flex-col items-center justify-center gap-4 border-4 border-zinc-50 hover:border-pink-500 transition duration-500"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-back"
              data-aos-delay="700"
            >
              <img src="../../src/assets/icons/dress.png" className="w-1/2" />
              <p className="xl:text-base text-xs">Dress</p>
            </div>

            <div
              className="xl:h-80 xl:w-80 h-24 w-24 bg-zinc-50 rounded-3xl flex flex-col items-center justify-center gap-4 border-4 border-zinc-50 hover:border-pink-500 transition duration-500"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-back"
              data-aos-delay="750"
            >
              <img src="../../src/assets/icons/sneakers.png" className="w-1/2" />
              <p className="xl:text-base text-xs">Sneakers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
