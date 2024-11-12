import React from 'react';

const CameraReadyGuidelines = () => {
  return (
    <div className="p-8 bg-gray-100 text-gray-900">
      <div className="border border-gray-300 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Camera-ready submission guidelines</h1>

        <p className="mb-4">
          Since compromising the quality may result in exclusion of the paper to be published in IEEE Xplore, we sincerely request you to update the paper strictly as per IEEE format. Without that, your paper may not be qualified to be included in IEEE Xplore for publication. The following things must be done before submitting the final round of camera-ready submission:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>References should strictly follow IEEE format.</li>
          <li>Paper should be in IEEE format.</li>
          <li>
            The camera-ready version must be in PDF format compiled from IEEE PDF eXpress TM with Conference ID - <strong>62191X</strong>.
          </li>
          <li>
            The camera-ready manuscript must comply with all the requirements of IEEE, with a similarity index limited to 20% including references.
          </li>
          <li>
            Also generate IEEE copyright form by visiting Microsoft CMT account login.
          </li>
          <li>
            Please submit the updated camera-ready version incorporating all comments in Microsoft CMT account by <strong>20<sup>th</sup> November 2024</strong>.
          </li>
        </ul>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Helpful Links:</h2>
          <p>
            For help regarding IEEE PDF eXpress, please visit:{" "}
            <a
              href="https://ieee-pdf-express.org/External/UsingIEEEPDFeXpress"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              IEEE PDF eXpress Help
            </a>
          </p>
          <p>
            For help regarding camera-ready submission, please visit:{" "}
            <a
              href="https://cmt3.research.microsoft.com/docs/help/author/camera-ready-submission.html"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Camera-Ready Submission Guide
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CameraReadyGuidelines;
