import React from "react";

const ProgramSchedule = () => {
  const sessions = [
    {
      sessionTitle: "Session 1A: Intelligent Computing Systems",
      chairs: "Prof. Niranjan Ray, KIIT, Prof. Rakesh C. Balabantaray, IIIT Bhubaneswar",
      papers: [
        { id: 68, title: "Ethereum Fraud Detection: A comparative analysis of supervised learning approach" },
        { id: 69, title: "Skin Cancer Detection Using CNN and Ensemble Learning" },
        { id: 85, title: "An optimized Grid computing based Feature selection approaches from Brain Image dataset using Pretrained models" },
        { id: 103, title: "Autoencoder Integrated Feedforward Neural Network based Intrusion Detection System" },
        { id: 127, title: "Dual Random Phase Encoding Encryption Using Fractional Fourier Transform" },
      ],
    },
    {
      sessionTitle: "Session 1B: Multidimensional Signal Processing",
      chairs: "Prof. Deepika Agarwal, NIT, Raipur, Prof. Rajat Kumar Giri, IIIT Bhubaneswar",
      papers: [
        { id: 84, title: "Novel IoSWC System Design Using Hybrid Diversity Technique" },
        { id: 92, title: "FPGA implementation of AIQ based Daubechies filter Bank for Medical Image Retrieval" },
        { id: 94, title: "Fault Analysis of Aircraft Systems Indicated on a Cockpit Panel by using Image Processing" },
        { id: 155, title: "Sign Language Recognition using GLCM and ResNet50 features with PPCA-based Feature Reduction Approach" },
        { id: 121, title: "Performance Improvement of FSO System with OAM Spatial Modulation" },
      ],
    },
  ];

  return (
    <div className="text-black" >
    <div>
    <h1 className="my-8 font-extrabold underline-offset-1 text-center mx-auto text-black text-4xl" > ASPCC 2024 Program Schedule</h1>
    <div className="px-28 flex flex-col text-blue-800 font-semibold" >
    <a href="https://drive.google.com/file/d/1Y9esKXloFooVxv5ZW2YYvl9D0NBT5JAF/view?usp=sharing"  className="underline">Download Schedule Pdf</a>
    <a href="https://docs.google.com/presentation/d/1SQkKeTvuooSjkMfnlVRjcV9a5TdLX-l6/edit?usp=sharing&ouid=110828040866843815675&rtpof=true&sd=true" className="underline" >Download Presentation Format</a>
    </div>
    </div>
    <div className="p-6 bg-white text-black min-h-screen">
      <div className="max-w-5xl mx-auto border border-black p-4">
        {/* Header Section */}
        <div className="text-center border-b border-black pb-4 mb-6">
          <h1 className="text-2xl font-semibold">Day 1: 19th December 2024 (Thu)</h1>
        </div>

        {/* Event Timings */}
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="col-span-1 border border-black p-2">08:30 – 10:30</div>
            <div className="col-span-2 border border-black p-2">Delegate Arrival, Registration</div>

            <div className="col-span-1 border border-black p-2">10:30 – 11:30</div>
            <div className="col-span-2 border border-black p-2">Inaugural Event</div>

            <div className="col-span-1 border border-black p-2">11:30 – 12:00</div>
            <div className="col-span-2 border border-black p-2">High Tea</div>

            <div className="col-span-1 border border-black p-2">12:00 – 13:00</div>
            <div className="col-span-2 border border-black p-2">
              Keynote Talk 1: <br />
              <span className="font-semibold">Prof. Ram Bilas Pachori, IIT Indore</span>
              <br />
              Topic: Multi-channel signal processing methods and their applications in Brain signal classification
            </div>

            <div className="col-span-1 border border-black p-2">13:00 – 14:30</div>
            <div className="col-span-2 border border-black p-2">Lunch Break</div>

            <div className="col-span-1 border border-black p-2">14:30 – 15:30</div>
            <div className="col-span-2 border border-black p-2">
              Keynote Talk 2: <br />
              <span className="font-semibold">Prof. Sanjeev Panda, NUS, Singapore</span>
              <br />
              Topic: Single/Three-phase inverter control techniques for interfacing renewable energy sources
            </div>

            <div className="col-span-1 border border-black p-2">15:30 – 15:45</div>
            <div className="col-span-2 border border-black p-2">Tea Break</div>
          </div>
        </div>

        {/* Parallel Sessions (Adjusted Layout) */}
        <div className="grid grid-cols-3 gap-4">
          {/* Left Column for Timing */}
          <div className="col-span-1 border border-black p-2 text-center">
            15:45 – 17:30
          </div>

          {/* Right Column for Sessions */}
          <div className="col-span-2 grid grid-cols-2 gap-8">
            {sessions.map((session, idx) => (
              <div key={idx} className="border border-black p-4">
                <h3 className="text-lg font-semibold mb-2">{session.sessionTitle}</h3>
                <p className="text-sm mb-4 italic">{session.chairs}</p>

                <table className="w-full border-collapse border border-black text-sm">
                  <thead>
                    <tr>
                      <th className="border border-black px-2 py-1">Paper ID</th>
                      <th className="border border-black px-2 py-1">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {session.papers.map((paper) => (
                      <tr key={paper.id}>
                        <td className="border border-black px-2 py-1">{paper.id}</td>
                        <td className="border border-black px-2 py-1">{paper.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProgramSchedule;
