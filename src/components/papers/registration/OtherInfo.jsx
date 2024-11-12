import React from 'react';

const OtherInfo = () => {
  return (
    <div className="p-8 bg-gray-100 text-gray-900">
      <div className="border border-gray-300 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Bank Account Information for Registration</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Bank Details:</h2>
          <p><strong>Bank Account Number:</strong> 173112010000861</p>
          <p><strong>Beneficiary Name:</strong> ASPCC IIIT BHUBANESWAR</p>
          <p><strong>Address:</strong> IIIT BHUBANESWAR, GOTHAPATNA, KHORDHA, INDIA, PIN:751003</p>
          <p><strong>Bank Name:</strong> Union Bank of India</p>
          <p><strong>IFSC Code:</strong> UBIN0817317</p>
          <p><strong>SWIFT Code:</strong> UBININBBBHUB</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Instructions for Registration:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Every accepted paper can have up to 6 pages in the final PDF. If needed, additional pages (maximum 2 more) can be added with extra charge of INR 1000 per page at the time of author registration payment.</li>
            <li>At least one of the authors of every accepted paper must register for the conference and present the paper.</li>
            <li>Non-refundable registration fee must be paid prior to submitting the final IEEE formatted, camera-ready version of the paper and e-copyright form.</li>
            <li>After payment, please fill the following Google form: <a href="https://docs.google.com/forms/d/e/1FAIpQLScMrTZWB1-Jg5ZGhK9FzLTRq8iqu830_r-cM5nlF53Q6lUiCw/viewform?usp=sf_link " className="text-blue-500 underline">Registration Form</a></li>
            <li>Each registration entitles the author to present one accepted paper only.</li>
            <li>If more than one author attends, all authors must register separately by paying applicable fees.</li>
            <li>At least one author must present the accepted paper for inclusion on IEEE Xplore.</li>
            <li>Additional authors cannot be added after manuscript submission.</li>
            <li>Registration fee includes publication fees, registration kit, conference lunch, and taxes.</li>
            <li>Extra certificates are available on request for INR 500 (6$).</li>
            <li>Student registrants need to upload their Institute ID proof.</li>
            <li>IEEE members need to upload their valid IEEE Membership card.</li>
            <li>Limited accommodation is available in the guest house on prior request.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Important Notes:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Registration category should be chosen appropriately from the aforementioned table.</li>
            <li>Payment gateway charges along with applicable taxes or levies, if any, will have to be borne by the registrant.</li>
            <li>Registration fees are not refundable or transferable.</li>
            <li>Please keep a copy of the generated transaction ID by the payment gateway and by your bank for tracking payments.</li>
            <li>ASPCC 2024 organizing committee will not be responsible for any financial loss caused by improper transactions during the registration process.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
