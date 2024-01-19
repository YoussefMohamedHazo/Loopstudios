const Hero = () => {
  const links = [
    { id: 1, text: "About" },
    { id: 2, text: "Careers" },
    { id: 3, text: "Events" },
    { id: 4, text: "Products" },
    { id: 5, text: "Support" },
  ];

  return (
    <section id="Hero">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center justify-between text-white">
          <h1 className="font-bold text-violet-300 text-4xl">Loopstudios</h1>
          <div className=" hidden  md:flex items-center space-x-8 text-white font-alata ">
            {links.map((item) => {
              return (
                <div className=" group" key={item.id}>
                  <a href="#" >
                    {item.text}
                  </a>
                  <div className=" mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
                </div>
              );
            })}
          </div>
        </nav>
        <div className=" text-white font-bold my-32 border-2 max-w-lg p-4 md:p-10 uppercase font-sans text-4xl md:text-6xl ">
        Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
};

export default Hero;
