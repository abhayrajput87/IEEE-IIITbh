import React from "react";
import Hero from "../../components/shared/Hero";
import Bottom from "../../components/shared/Bottom";
import Registration from "../../components/papers/registration";
import OtherInfo from "../../components/papers/registration/OtherInfo";

function RegistrationPage() {
  return (
    <div>
      <Hero>registration</Hero>
      <Registration />
      <OtherInfo/>

      <Bottom />
    </div>
  );
}

export default RegistrationPage;
