import React from "react";

const DayThreeSchedule = () => {
  const sessions = [
    {
      time: "11:15 – 13:00",
      sessionTitleA: "Session 4A: Intelligent Electrical Systems",
      chairsA: "Prof. Ajit Kumar Barisal, OUTR Bhubaneswar, Prof. Usharani Rout, IIIT Bhubaneswar",
      papersA: [
        { id: 101, title: "Chebyshev polynomial based Harmonic Estimation for Solar Photovoltaic System" },
        { id: 104, title: "Design of Battery and Ultra Capacitor for stability improvement of Microgrid in contrast to secondary Controller" },
        { id: 102, title: "Solar-powered nine-level quadruple boost inverter with fuzzy logic control" },
        { id: 151, title: "RGConNETA: Hybrid Hierarchical Image Classification Model for Extracting Deep Features with Improved Accuracy" },
        { id: 138, title: "Enhancement of Performance of Elevated Current Density: Effects of Transverse Roughness and Layering" },
        { id: 154, title: "Integration of VLSI with Traditional PID Controller for Temperature Control in Electronic Devices" },
      ],
      sessionTitleB: "Session 4B: Communication Systems and Beyond Wireless Communication",
      chairsB: "Prof. Tapas Kumar Patra, OUTR Bhubaneswar, Prof. Surya Prakash Singh, IIIT Bhubaneswar",
      papersB: [
        { id: 15, title: "Super Resolution based Semi-adaptive Gamma correction for Dark Image Enhancement" },
        { id: 95, title: "Performance Analysis of Hybrid PSO-FR Link under Diverse Atmospheric Conditions" },
        { id: 109, title: "Study of MIMO-OFDM System for future Mobile Communication" },
        { id: 113, title: "An Approach for DFU Classification using VGG-19 and 2D-SSA" },
        { id: 119, title: "Effect of Substrate-height on the property of ultra wideband Wilkinson Power Divider" },
        { id: 122, title: "A CPW-fed Hexagonal Broadband CP Antenna for WiMax and WLAN Application" },
      ],
    },
    {
      time: "11:15 – 13:00",
      sessionTitleA: "Session 4C: Intelligent Computing Systems",
      chairsA: "Prof. Subhasish Patra, IIIT Bhubaneswar, Prof. Sanjay Saxena, IIIT Bhubaneswar",
      papersA: [
        { id: 61, title: "Speech emotion recognition using light weight mobilenetv2" },
        { id: 77, title: "DCB administration to reduce power system inefficiencies" },
        { id: 107, title: "Monte Carlo Simulation of Underwater Optical Communication System with Optimized Coefficients" },
        { id: 112, title: "Optimal Voltage Regulation and Energy Efficiency in Photovoltaic Grid system" },
        { id: 123, title: "Optimizing Economic Load Dispatch in Thermal Power Plants with Artificial Intelligence and Curve Fitting" },
      ],
    },
  ];

  return (
    <div className="p-6 bg-white text-black min-h-screen">
      <div className="max-w-5xl mx-auto border border-black p-4">
        {/* Header Section */}
        <div className="text-center border-b border-black pb-4 mb-6">
          <h1 className="text-2xl font-semibold">Day 3: 21st December 2024 (Sat)</h1>
        </div>

        {/* Event Timings */}
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="col-span-1 border border-black p-2">09:00 – 10:00</div>
            <div className="col-span-2 border border-black p-2">
              Keynote Talk 5: <br />
              <span className="font-semibold">Dr. Sudhir Dixit</span>
              <br />
              Topic: Towards the Internet of Senses: Integrating Human mind, Body, and IoT in 6G!
            </div>

            <div className="col-span-1 border border-black p-2">10:00 – 11:00</div>
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

              {session.sessionTitleB && (
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
              )}
            </div>
          </div>
        ))}

        {/* Lunch and Closing Section */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="col-span-1 border border-black p-2">13:00 – 14:30</div>
          <div className="col-span-2 border border-black p-2">Lunch Break</div>

          <div className="col-span-1 border border-black p-2">14:30 – 15:30</div>
          <div className="col-span-2 border border-black p-2">
            Student Poster Presentation Competition and Membership Drive Program
          </div>

          <div className="col-span-1 border border-black p-2">15:30 – 16:30</div>
          <div className="col-span-2 border border-black p-2">Awards and Closing Ceremony</div>
        </div>
      </div>
    </div>
  );
};

export default DayThreeSchedule;
