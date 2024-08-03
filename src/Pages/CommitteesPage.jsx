import React from "react";
import Committees from "../components/committees/Index";
import Hero from "../components/shared/Hero";
import Bottom from "../components/shared/Bottom";

const CommitteesPage = () => {
  const data = [
    {
      dept: "Patron",
      name: ["Prof. Ashish Ghosh, Director, IIIT Bhubaneswar"],
    },
    {
      dept: "General Chair",
      name: [
        "Dr. Akshya K. Swain, University Of Auckland, New Zealand",
        "Dr. Ram Bilas Pachori, IIT Indore",
      ],
    },
    {
      dept: "Program Chair",
      name: [
        "Dr. Kailash Chandra Ray, IIT Patna",
        "Dr. Surender Reddy Salkuti, Woosong University, SouthKorea",
        "Dr. Badri Narayan Subudhi, IIT Jammu",
      ],
    },
    {
      dept: "Conference Chair",
      name: [
        "Dr. Debasish Jena, IIIT Bhubaneswar",
        "Dr. Pradyut Kumar Biswal, IIIT Bhubaneswar",
        "Dr. Debani Prasad Mishra, IIIT Bhubaneswar",
      ],
    },
    {
      dept: "Finance Chair",
      name: [
        "Dr. Rakesh Chandra Balabantaray, IIIT Bhubaneswar",
        "Dr. Sanjeev Kumar Mishra, IIIT Bhubaneswar",
        "Mr. Aswini Rath, Batoi System",
      ],
    },
    {
      dept: "Publication Chair",
      name: [
        "Dr. Umamani Subudhi, IIIT Bhubaneswar",
        "Dr. Tanmoy Roy Choudhury, NIT Rourkela",
        "Dr. Satchidananda Dehuri, F.M. University, Balasore",
        "Dr. Surya Prakash Singh, IIIT Bhubaneswar",
        "Dr. Ram Narayan Patro, Mathworks Inc. (Agreed)",
        "Dr. Md. Shohel Rana, BUET, Bangladesh",
      ],
    },
    {
      dept: "Publicity Chair",
      name: [
        "Dr. Usha Rani Rout, IIIT Bhubaneswar",
        "Prof. V. Sridhar T, IIIT Bhubaneswar",
        "Dr. Srinvasrao Chintangunta, NIT Calicut",
        "Dr. Debasmita Panda, NIT Warangal",
        "Dr. Linga Reddy Cenkeramaddi, UiA, Norway",
      ],
    },
    {
      dept: "Sponsorship Chair",
      name: [
        "Dr. Sanjeev Kumar Mishra, IIIT Bhubaneswar",
        "Dr. Subrata Kumar Mohanty, IIIT Bhubaneswar",
        "Prof. Saroj Kumar Mishra, IIIT Bhubaneswar",
        "Mr. Mohar Mishra, Inovaare Clouds Solutions Pvt. Ltd.,Bhubaneswar",
        "Dr. Vivek Sharma, Global Foundries, Bangalore",
      ],
    },
    {
      dept: "Web Chair",
      name: [
        "Dr. Sabyasachi Patra, IIIT Bhubaneswar",
        "Dr. Bharati Mishra, IIIT Bhubaneswar",
        "Prof. V. Sridhar T, IIIT Bhubaneswar",
      ],
    },
    {
      dept: "Registration Chair",
      name: [
        "Dr. Usha Rani Rout, IIIT Bhubaneswar",
        "Dr. Rajat Kumar Giri, IIIT Bhubaneswar",
        "Prof. Kshirod Kumar Rout, IIIT Bhubaneswar",
      ],
    },
    {
      dept: "Student Research Forum",
      name: [
        "Dr. Zheng Jianying, Soochow University, South Korea",
        "Dr. Samaresh Bera, IIT Jammu",
        "Dr. Lalat Indu Giri, NIT Goa",
        "Dr. Deepak Kumar Rout, IIIT Bhubaneswar",
        "Dr. Somnath Pradhan, IIT Patna",
        "Prof. Jayanta Kumar Sahu, IIIT Bhubaneswar",
        "Prof. Laxmidhar Biswal, IIIT Bhubaneswar",
        "Prof. Biswa Ranjan Nayak, IIIT Bhubaneswar",
      ],
    },
    {
      dept: "Local Arrangement Chair",
      name: [
        "Dr. Rajat Kumar Giri, IIIT Bhubaneswar",
        "Dr. Arun Kumar Sahoo, IIIT Bhubaneswar",
      ],
    },
    {
      dept: "Industry Liaison Chair",
      name: [
        "Dr. Kali Prasad Vittala, Informatica, Bangalore",
        "Dr. Bimal Chandra Nayak, Ultimate Kronos Group, U.P.",
        "Mr. Vijaya Meher, Intel India, Bangalore.",
        "Mr. Jitendra Kumar Khilar, NALCO, Anugul, Odisha",
        "Mr. Neeraj Joshi, Adani Cement Group, Kymore, M.P",
      ],
    },
    {
      dept: "International Liaison Chair",
      name: [
        "Dr. Akshaya Kumar Moharana, Powertech Labs Inc., Canada",
        "Mr. Ko Junseog, KIND, South Korea",
        "Dr. Suvendu Mohapatra, Foxconn, Taiwan",
        "Mr. Vedanta Prusty, Apple Inc., U.S.A",
        "Dr. Binayak Kar, NTUST, Taiwan",
      ],
    },
    {
      dept: "Tutorial Chair",
      name: [
        "Dr. Bibudhendu Pati, RDWU, Bhubaneswar",
        "Dr. Subhankar Dhar, University of San Jose, USA",
        "Dr. Anandarup Mukharjee, University of Cambridge, UK",
      ],
    },
    {
      dept: "IEEE Liaison Committee",
      name: [
        "Dr. Atanu Kundu IEEE Kolkata Section",
        "Dr. Pradipta Roy, ITR Chandipur",
        "Dr. Ranjeeta  Patel (IEEE Bhubaneswar commison)",
      ],
    },
  ];
  return (
    <div>
      <Hero>committees</Hero>
      <Committees data={data} heading="Organising Committee" />
      <Bottom />
    </div>
  );
};

export default CommitteesPage;
