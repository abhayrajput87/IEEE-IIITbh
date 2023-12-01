import React from "react";
import Update from "../components/To_be_updated_soon/Update";
import Navbar from "../components/Navbar";
function UpdatePage({ name }) {
  return (
    <div>
      <Navbar />
      <Update name={name} />
    </div>
  );
}

export default UpdatePage;
