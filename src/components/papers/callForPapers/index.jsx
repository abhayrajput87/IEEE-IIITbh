import React from "react";
import qrcode from "../../../assets/Papers/qrcode.png";

function CallForPapers() {
  return (
    <div className="my-24 w-[80%] mx-auto text-black">
      <div>
        <h1 className="font-bold text-2xl ">
          Contributions are sought in the following areas:
        </h1>
        <ul className="px-8 mt-4 list-disc font-semibold space-y-2">
          <li> Multidimensional Signal Processing</li>
          <li>Intelligent Electrical Systems</li>
          <li>Communication Systems and Beyond Wireless Communication</li>
          <li>Intelligent Computing Systems</li>
          <li> Embedded Systems & IoT</li>
        </ul>
        <div className=" flex-row md:flex  items-center justify-center mt-8 font-medium">
          <div className=" md:w-2/3 md:pr-8">
            <p>
              ASPCC technical program will include contributed papers and
              contributions from invited speakers. It will have
              pre-conferencetutorials, keynotes, plenary talks, technical
              sessions, special sessions, expert panels, and student research
              forum. The detail information regarding this conference can be
              obtained by scanning the QR code or by clicking the website link:
              <a
                className="text-blue-700 underline"
                href=" https://aspcc-iiitbbsr.com/"
              >
                https://aspcc-iiitbbsr.com/
              </a>
            </p>
          </div>
          <div className=" mt-8 md:mt-0 mx-auto flex justify-center items-center md:w-1/3 md:px-8 ">
            <img
              className="object-cover w-[80%] border-2 border-black rounded-lg "
              src={qrcode}
              alt=""
            />
          </div>
        </div>
        <div className="mt-16">
          <h1 className="font-bold text-2xl ">Paper submission guidelines:</h1>
          <p className=" mt-4 list-disc font-semibold space-y-2">
            Manuscripts offering high quality original and unpublished research,
            case studies and implementations are solicited. Full paper
            manuscripts must be in English of maximum 6 pages as per IEEE double
            column format. All the submitted papers shall undergo double-blind
            review process. ASPCC will follow no show policy, i.e., accepted
            papers are to be registered and presented, otherwise the paper will
            not be included in the conference proceedings. Authors are required
            to submit their paper using the following link:
            <a
              className="text-blue-700 underline"
              href="https://cmt3.research.microsoft.com/ASPCC2024"
            >
              https://cmt3.research.microsoft.com/ASPCC2024
            </a>
          </p>
          <h1 className="text-lg my-4 font-bold">
            The Proceeding of this conference will be submitted to IEEE for
            publication(under consideration)
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CallForPapers;
