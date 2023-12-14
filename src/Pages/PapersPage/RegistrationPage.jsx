import React from "react";
import Navbar from "../../components/shared/Navbar";

import Hero from "../../components/shared/Hero";

import Bottom from "../../components/shared/Bottom";
import Registration from "../../components/papers/registration";

function RegistrationPage() {
  return (
    <div>
      <Navbar />
      <Hero>registration</Hero>
      <Registration />

      <Bottom />
    </div>
  );
}

export default RegistrationPage;
