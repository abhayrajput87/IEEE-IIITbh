import React from "react";
import CallForPapers from "../../components/papers/callForPapers";
import Hero from "../../components/shared/Hero";
import ImpDates from "../../components/slidingText/ImpDates";
import Bottom from "../../components/shared/Bottom";

function CallForPapersPage() {
  return (
    <div>
      <Hero>callforpapers</Hero>
      <ImpDates>Important Dates 19th to 21st December 2024</ImpDates>
      <CallForPapers />
      <Bottom />
    </div>
  );
}

export default CallForPapersPage;
