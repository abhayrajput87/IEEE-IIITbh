import React from "react";
import Update from "../components/shared/ToBeUpdated";
import Navbar from "../components/shared/Navbar";
function UpdatePage({ name }) {
  return (
    <div>
      <Navbar />
      <Update name={name} />
    </div>
  );
}

export default UpdatePage;
