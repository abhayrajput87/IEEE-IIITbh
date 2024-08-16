import React from "react";
import Committees from "../components/committees/Index";
import Hero from "../components/shared/Hero";
import Bottom from "../components/shared/Bottom";

const TpcCommitteePage = () => {
  const data = [
    {
      dept: "Multidimensional Signal Processing",
      name: [
        "Dr. M. S. Manikandan, IIT Palakkad",
        "Dr. Suvendu Rup, NIT Raipur",
        "Dr. Ratnakar Das, NIT Rourkela",
        "Dr. Subrata Kumar Mohanty, IIIT Bhubaneswar",
        "Dr. Bijayananda   Patnaik, NIT Raipur",
      ],
    },
    {
      dept: "Intelligent Electrical Systems",
      name: [
        "Dr. Chandrasekhar Perumalla, IIT Bhubaneswar",
        "Dr. Siv Kumar Mishra, CUPGS, BPUT, Rourkela",
        "Dr. Umamani Subudhi, IIIT Bhubaneswar",
      ],
    },
    {
      dept: "Communication Systems and Beyond Wireless Communication",
      name: [
        "Prof. Sudhakar  Pandey, NIT Raipur",
        "Dr. Suman Dey, NIT Rourkela",
        "Dr. Deepika Agrawal, NIT Raipur",
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
      dept: "Embedded Systems & IoT",
      name: [
        "Dr. Kishor Sarawadekar, IITBHU",
        "Dr. B. Naresh Kumar Reddy, NIT Trichy",
        "Dr. Sanjeev Kumar Mishra, IIIT Bhubaneswar",
        "Dr. Lalatendu Behera, Dr. B.R. Ambedekar National Institute of Technology, Jalandhar",
      ],
    },
  ];
  return (
    <div>
      <Hero>Technical Program Committee</Hero>
      <Committees data={data} heading="Technical Program Committee" />
      <Bottom />
    </div>
  );
};

export default TpcCommitteePage;
