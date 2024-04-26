import React from "react";

function ConferenceBox() {
  return (
    <div className="flex flex-col md:hidden  bg-green-700  rounded-xl justify-center m-16 mb-0 p-4">
      <p className="text-2xl font-bold ">Conference Record #62191</p>
      <a
        className=" font-bold underline"
        href="http://conferences.ieee.org/conferences_events/conferences/conferencedetails/62191%7C"
      >
        Click on the Link
      </a>
    </div>
  );
}

export default ConferenceBox;
