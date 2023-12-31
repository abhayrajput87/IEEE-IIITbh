import image from "../../assets/UpdatePage/aboutus.png";
const Update = ({ name }) => {
  return (
    <div className="relative" style={{ background: "#000" }}>
      {/* Background Image */}
      <img
        src={image}
        alt="Background"
        className=" h-screen w-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-75 text-white font-fontawesome">
        <h1 className="text-6xl text-center font-bold mb-4 mt-5">
          {" "}
          {name} page will be updated soon
        </h1>
      </div>
    </div>
  );
};

export default Update;
