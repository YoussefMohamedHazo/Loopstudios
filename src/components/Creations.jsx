import img1 from "../assets/images/desktop/image-deep-earth.jpg";
import img1mob from "../assets/images//mobile/image-deep-earth.jpg";
import img2 from "../assets/images/desktop/image-night-arcade.jpg";
import img2mob from "../assets/images/mobile/image-night-arcade.jpg";
import img3 from "../assets/images/desktop/image-soccer-team.jpg";
import img3mob from "../assets/images/mobile/image-soccer-team.jpg";
import img4 from "../assets/images/desktop/image-pocket-borealis.jpg";
import img4mob from "../assets/images/mobile/image-pocket-borealis.jpg";

const Creations = () => {
  return (
    <section id="creations">
      <div className="container mx-auto my-32 max-w-6xl px-6 md:px-0 text-gray-900">
        {/* header */}
        <div className="flex justify-center md:justify-between mb-20">
          <h2 className="text-4xl text-center uppercase md:text-5xl">
            Our Creations
          </h2>
          <button className=" px-10 py-2 border-2 border-black tracking-widest hover:bg-black hover:text-white duration-300 hidden md:block font-bold uppercase font-alata">
            See all
          </button>
        </div>

        {/* items contaier */}

        <div className=" grid md:grid-cols-4 gap-8">
          {/* item 1 */}
          <div className=" group overflow-hidden relative">
            <img src={img1} alt="" className=" w-full hidden md:block" />
            <img src={img1mob} className="md:hidden" alt="" />
            <div className=" absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
            <h5 className=" absolute text-white bottom-4 md:bottom-8 px-6 w-52 group-hover:scale-110 group-hover:text-black md:px-10 duration-200">
              Deep Earth
            </h5>
          </div>
          {/* item 2 */}
          <div className=" group overflow-hidden relative">
            <img src={img2} alt="" className=" w-full hidden md:block" />
            <img src={img2mob} className="md:hidden" alt="" />
            <div className=" absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
            <h5 className=" absolute text-white bottom-4 md:bottom-8 px-6 w-52 group-hover:scale-110 group-hover:text-black md:px-10 duration-200">
              Night Arcade
            </h5>
          </div>
          {/* item 3 */}
          <div className=" group overflow-hidden relative">
            <img src={img3} alt="" className=" w-full hidden md:block" />
            <img src={img3mob} className="md:hidden" alt="" />
            <div className=" absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
            <h5 className=" absolute text-white bottom-4 md:bottom-8 px-6 w-52 group-hover:scale-110 group-hover:text-black md:px-10 duration-200">
              Soccer Team VR
            </h5>
          </div>
          {/* item 4 */}
          <div className=" group overflow-hidden relative">
            <img src={img4} alt="" className=" w-full hidden md:block" />
            <img src={img4mob} className="md:hidden" alt="" />
            <div className=" absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
            <h5 className=" absolute text-white bottom-4 md:bottom-8 px-6 w-52 group-hover:scale-110 group-hover:text-black md:px-10 duration-200">
              The Pocket{" "}
            </h5>
          </div>
          <button className="px-10 py-2 border-2 border-black tracking-widest hover:bg-black hover:text-white duration-300  md:hidden font-bold uppercase font-alata w-full">
            See all{" "}
          </button>{" "}
        </div>
      </div>
    </section>
  );
};

export default Creations;
