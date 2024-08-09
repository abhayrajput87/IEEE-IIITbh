import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="p-6 mt-8 rounded-lg max-w-lg mx-auto ">
      <h2 className=" text-black text-4xl font-semibold mb-4 text-center">
        Contact Information
      </h2>
      <div className="">
        <div className="text-black items-center mb-2">
          <p className=" font-bold text-2xl">Dr. Pradyut Kumar Biswal</p>
          <p className=" mx-2 italic">(Organizing Chair, ASPCC-2024)</p>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-gray-700" />
          <a href="mailto:aspcc@iiit-bh.ac.in" className="text-blue-600">
            aspcc@iiit-bh.ac.in
          </a>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-2 text-gray-700" />
          <span className="text-gray-700">
            IIIT Bhubaneswar, Gothapatna, Po: Malipada Bhubaneswar - 751003.
            INDIA
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
