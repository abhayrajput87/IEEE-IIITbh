import AboutHerous from '../../assets/About/aboutus.png';
const AboutHero = () => {
  return (
    <div className="relative" style={{background:"#000"}}>
      {/* Background Image */}
      <img
        src={AboutHerous}

        alt="Background"
        className="w-full h-80 md:h-375 object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-75 text-white font-fontawesome">
        <h1 className="text-6xl text-center font-bold mb-4 mt-5">About The Institute</h1>
      </div>
    </div>

  );
};

export default AboutHero;
