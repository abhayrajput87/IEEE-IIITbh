import React from "react";
import Committees from "../components/committees/Index";
import Hero from "../components/shared/Hero";
import Bottom from "../components/shared/Bottom";

const TpcCommitteePage = () => {
  const data = [
    {
      dept: "Multimedia and Signal Processing",
      name: [
        "Dr. M. S. Manikandan, IIT Palakkad",
        "Dr. Suvendu Rup, NIT Raipur",
        "Dr. Ratnakar Das, NIT Rourkela",
        "Dr. Subrata Kumar Mohanty, IIIT Bhubaneswar",
      ],
    },
    {
      dept: "Power, Energy, and Control",
      name: [
        "Dr. Chandrasekhar Perumalla, IIT Bhubaneswar",
        "Dr. Siv Kumar Mishra, CUPGS, BPUT, Rourkela",
        "Dr. Umamani Subudhi, IIIT Bhubaneswar",
      ],
    },
    {
      dept: "Communication Systems",
      name: [
        "Dr. Suman Dey, NIT Rourkela",
        "Dr. Deepika Agrawal, NIT Raipur",
        "Dr. Bijayananda   Patnaik, NIT Raipur",
        "Dr. Rajat Kumar Giri, IIIT Bhubaneswar",
      ],
    },
    {
      dept: "Intelligent Computing Systems",
      name: [
        "Dr. Jitendra Kumar Rout, NIT Raipur",
        "Dr. Deepak Ranjan Nayak, MNIT Jaipur",
        "Dr. Deepak   Singh, NIT Raipur",
        "Dr. Sabyasachi Patra, IIIT Bhubaneswar",
      ],
    },
    {
      dept: "System Design",
      name: [
        "Dr. Kishor Sarawadekar, IITBHU",
        "Dr. B. Naresh Kumar Reddy, NIT Trichy",
        "Dr. Sanjeev Kumar Mishra, IIIT Bhubaneswar",
        "Prof. Sudhakar  Pandey, NIT Raipur",
      ],
    },
  ];
  return (
    <div>
      <Hero>Technical Program Committee</Hero>
      <Committees data={data} heading="Technical Program Committee" />
      <div className="text-black w-[80%] md:w-[70%] py-12 mx-auto px-2 md:px-6 ">
        <h2 className="font-extrabold text-3xl mb-4">Keynote Speakers:</h2>
        <ol className="list-decimal text-xl text-semibold inline-block text-left">
          <li>Dr. Ram Bilas Pachori, IIT Indore </li>
          <li>Dr. Debabrata Das, IIIT Bangalore </li>
          <li>Dr. M.N.S. Swamy, Concordia University, Canada</li>
          <li>Dr. Surender Reddy Salkuti, Woosong University, South Korea</li>
          <li>Dr. Bidyadhar Subudhi, NIT Warangal </li>
        </ol>
      </div>
      <Bottom />
    </div>
  );
};

export default TpcCommitteePage;
