import React from "react";

const DayTwoSchedule = () => {
  const sessions = [
    {
      time: "11:15 – 12:30",
      sessionTitleA: "Session 2A: Intelligent Computing Systems",
      chairsA: "Prof. Swadesh Das, NIT Raipur, Prof. Madhusmita Sahu, IIIT Bhubaneswar",
      papersA: [
        { id: 106, title: "Automated Decision Making System using Machine Learning Algorithms for Agricultural Crops" },
        { id: 108, title: "Analysis of Water Distribution System using Data-Driven Techniques" },
        { id: 111, title: "Optimized Intrusion Detection System with Efficient Usage of Deep Learning Techniques" },
        { id: 125, title: "Dual Random Phase Encoding Encryption Using Fractional Fourier Transform" },
      ],
      sessionTitleB: "Session 2B: Communication Systems and Beyond Wireless Networks",
      chairsB: "Prof. B. Acharya, NIT Rourkela, Prof. Sanjeev Kumar Meena, IIIT Hyderabad",
      papersB: [
        { id: 96, title: "Performance Analysis of UAV-Assisted Wireless Communication System" },
        { id: 94, title: "Novel Diversity Technique for IoT Applications using Machine Learning" },
        { id: 102, title: "Performance Evaluation of Non-Orthogonal Multiple Access in Wireless Networks" },
        { id: 90, title: "Analysis of Microstrip Patch Antenna with Rectangular Slot and Performance in 5G and Beyond Networks" },
      ],
    },
    {
      time: "15:45 – 17:30",
      sessionTitleA: "Session 3A: Intelligent Electrical Systems",
      chairsA: "Prof. Chinna Panigrahi, KIIT, Prof. Pradeep N. Misra, IIIT Bhubaneswar",
      papersA: [
        { id: 50, title: "Investigation of Water-Cycled Solar Panels for Sustainable Development" },
        { id: 85, title: "An Optimized Grid Computing-based Feature Selection Approach for Brain Image Dataset" },
        { id: 110, title: "Power Grid Resilience Approach with Smart Grid Integration" },
        { id: 120, title: "Performance Analysis of Electric Vehicles in Urban Areas" },
      ],
      sessionTitleB: "Session 3B: Embedded Systems & IoT",
      chairsB: "Prof. Satyajit Nanda, NMHIT Jaipur, Prof. Suresh Kumar, IIT Bhubaneswar",
      papersB: [
        { id: 115, title: "Implementation of Optical Lenses for IoT Systems" },
        { id: 116, title: "Implementation of FPGA for AIQ-based Image Retrieval System" },
        { id: 121, title: "Sign Language Recognition with PPCA-based Feature Reduction in IoT Devices" },
        { id: 130, title: "Natural Hazard Detection in IoT Devices using AI Algorithms" },
      ],
    },
  ];

  return (
    <div className="p-6 bg-white text-black min-h-screen">
      <div className="max-w-5xl mx-auto border border-black p-4">
        {/* Header Section */}
        <div className="text-center border-b border-black pb-4 mb-6">
          <h1 className="text-2xl font-semibold">Day 2: 20th December 2024 (Fri)</h1>
        </div>

        {/* Event Timings */}
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="col-span-1 border border-black p-2">09:30 – 10:00</div>
            <div className="col-span-2 border border-black p-2">Delegate Arrival, Registration</div>

            <div className="col-span-1 border border-black p-2">10:00 – 11:00</div>
            <div className="col-span-2 border border-black p-2">
              Keynote Talk 3: <br />
              <span className="font-semibold">Dr. Pradipta Kumar Roy, ITR Chandipur</span>
              <br />
              Topic: Hardware/embedded architectures for deep neural networks
            </div>

            <div className="col-span-1 border border-black p-2">11:00 – 11:15</div>
            <div className="col-span-2 border border-black p-2">Tea Break</div>
          </div>
        </div>

        {/* Parallel Sessions */}
        {sessions.map((session, idx) => (
          <div key={idx} className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1 border border-black p-2 text-center">
              {session.time}
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-8">
              <div className="border border-black p-4">
                <h3 className="text-lg font-semibold mb-2">{session.sessionTitleA}</h3>
                <p className="text-sm mb-4 italic">{session.chairsA}</p>

                <table className="w-full border-collapse border border-black text-sm">
                  <thead>
                    <tr>
                      <th className="border border-black px-2 py-1">Paper ID</th>
                      <th className="border border-black px-2 py-1">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {session.papersA.map((paper) => (
                      <tr key={paper.id}>
                        <td className="border border-black px-2 py-1">{paper.id}</td>
                        <td className="border border-black px-2 py-1">{paper.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border border-black p-4">
                <h3 className="text-lg font-semibold mb-2">{session.sessionTitleB}</h3>
                <p className="text-sm mb-4 italic">{session.chairsB}</p>

                <table className="w-full border-collapse border border-black text-sm">
                  <thead>
                    <tr>
                      <th className="border border-black px-2 py-1">Paper ID</th>
                      <th className="border border-black px-2 py-1">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {session.papersB.map((paper) => (
                      <tr key={paper.id}>
                        <td className="border border-black px-2 py-1">{paper.id}</td>
                        <td className="border border-black px-2 py-1">{paper.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}

        {/* Closing Section */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 border border-black p-2">17:30 – 18:00</div>
          <div className="col-span-2 border border-black p-2">
            <strong>Valedictory and Closing Ceremony</strong> followed by Banquet Dinner
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayTwoSchedule;
