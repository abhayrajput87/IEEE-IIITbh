import React from "react";
import Hero from "../../components/shared/Hero";
import Bottom from "../../components/shared/Bottom";
import Registration from "../../components/papers/registration";

function RegistrationPage() {
  return (
    <div>
      <Hero>registration</Hero>
      <Registration />

      <Bottom />
    </div>
  );
}

export default RegistrationPage;
