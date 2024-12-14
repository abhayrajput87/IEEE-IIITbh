import React from "react";

const DayTwoSchedule = () => {
  const sessions = [
    {
      time: "11:15 – 12:30",
      sessionTitleA: "Session 2A: Intelligent Computing Systems",
      chairsA: "Prof. Suvendu Rup, NIT, Raipur Prof. Muktikanta Sahu, IIIT Bhubaneswar",
      papersA: [
        {id: 105, title: "Automated Decision Making System for Bank Loan Approval with Real-Life Dataset"},
  {id: 108, title: "Data Analysis in Wireless Sensor Networks with Distributed Self Organizing Map"},
  {id: 111, title: "Brain Tumor Detection and Segmentation using SAM integrated YOLOv9 Scheme"},
  {id: 118, title: "Enhancing Crop Yield Prediction Accuracy in Precision Agriculture: A Comparative Analysis"},
  {id: 126, title: "Diabetic Retinopathy Detection using DWT and NGTDM Features with PCA-Based Feature Reduction Approach"},
      ],
      sessionTitleB: "Session 2B: Communication Systems and Beyond Wireless Communication",
      chairsB: "Prof. B. Acharya, NIT Raipur, Prof. Sanjeev Kumar Meena, IIIT Bhubaneswar",
      papersB: [
        { id: 60, title: "Performance Analysis of UAVAssisted FSO Links in Presence of Hovering Fluctuations" },
        { id: 63, title: "Eye Disease Classification using CNN and Vision Transformers" },
        { id: 74, title: "Performance Analysis of Advanced Modulation Schemes for Optical Networks Using Machine Learning" },
        { id: 81, title: "Optimizing Sensor Node Placement in Wireless Sensor Networks Using Hybrid PSO-GWO Technique" },
        { id: 90, title: "Analysis of a Microstrip Patch Antenna with Rectangular Slots and Parasitic Structures for Ka Band Applications" },
        { id: 100, title: "Improved Real-time Yoga Pose Estimation with GAN Augmentation" },
      ],
    },
  ];
  const sessions2=[
    {
        time: "15:45 – 17:30",
        sessionTitleA: "Session 3A: Intelligent Electrical Systems",
        chairsA: "Prof. Chinna Panigrahi, KIIT, Prof. Pradeep N. Misra, IIIT Bhubaneswar",
        papersA: [
          { id: 50, title: "Investigation of Water Cycle Algorithm in Renewable based Micro Grid" },
          { id: 71, title: "Advancements in Smart Grids: Harnessing AI, IoT, and 5G Integration for Sustainable Energy Management" },
          { id: 79, title: "Investigation Analysis of a Bidirectional DC-DC Converter for EV Charging" },
          { id: 82, title: "Different Predictive Control Methods for DTC Induction Motor Drive: A Concise Review" },
          { id: 110, title: "Ridge Regression Approach with Randomized Search CV Technique in Wind Power Forecasting" },
          { id: 120, title: "Impact of DG Penetration Level on the Sustainable Operation of Smart Power Distribution Network Under Various Load Conditions" }
        ]
        ,
        sessionTitleB: "Session 3B: Embedded Systems & IoT",
        chairsB: "Prof. Satyajit Nanda, NMHIT Jaipur, Prof. Suresh Kumar, IIT Bhubaneswar",
        papersB:[
          { id: 38, title: "Implementation of optical lock through visible light communication using AES" },
          { id: 66, title: "Hybrid Laplace-Gaussian Differential Privacy to Secure Data Aggregation in Edge-IoT Systems" },
          { id: 86, title: "Advancing Color Perception: An IoT-driven Pedagogical System for Visually Impaired Children" },
          { id: 115, title: "Embedded System for Efficient Brain Stroke Prediction using CSML on PYNQ-Z2" },
          { id: 116, title: "Cluster Head Selection in IoT Networks Using Salp Swarm Optimization" }
        ]
        ,
      },
  ]

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
        {/*Middle Section*/}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-1 border border-black p-2">12:30 – 13:30</div>
          <div className="col-span-2 border border-black p-2">
          Women in Engineering Session
Event Co-ordinator: Prof. Puspanjali Mohapatra, IIIT Bhubaneswar, Prof.
Bharati Mishra, IIIT Bhubaneswar
Invited Talk: Prof. Devashree Tripathy, IIT Bhubaneswar
Topic: Large Language Model Optimization
          </div>
          <div className="col-span-1 border border-black p-2">13:30 – 14:30
</div>
          <div className="col-span-2 border border-black p-2">
          Lunch Break
          </div>
          <div className="col-span-1 border border-black p-2">14:30 – 15:30</div>
          <div className="col-span-2 border border-black p-2">
          Keynote Talk 4:
Speaker: Prof. Linga Reddy Cenkeramaddi, Professor, University of Agder,
Norway
Topic: mmWave Radar-based Sensing and Applications
          </div>
          <div className="col-span-1 border border-black p-2">15:30 – 15:45</div>
          <div className="col-span-2 border border-black p-2">
          Tea Break
          </div>
        </div>
        {/* Parallel Sessions */}
        {sessions2.map((session, idx) => (
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
          <div className="col-span-1 border border-black p-2">18:30</div>
          <div className="col-span-2 border border-black p-2">
          Cultural Program followed by Banquet Dinner
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayTwoSchedule;
