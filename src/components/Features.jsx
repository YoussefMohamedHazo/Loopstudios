
import image from '../assets/images/desktop/image-interactive.jpg';
const Features = () => {
  return (
    <section id="feature">
    <div className="container max-w-6xl mx-auto my-32 px-6 flex flex-col md:flex-row text-gray-900 relative md:px-0">
      <img src={image} alt="" />
      <div className=' md:absolute top-48 bg-white md:py-20 md:right-0 md:pl-20 pr-0'>
        <h2 className='text-4xl md:text-5xl uppercase font-sans text-gray-900 mt-10 mb-6 max-w-lg md:mt-0 text-center md:text-left'>  The leader in interactive VR</h2>
        <p className=' text-center max-w-md md:text-left'>  Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.</p>
      </div>
    </div>
    </section>
  );
}

export default Features;
