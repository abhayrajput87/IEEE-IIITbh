import React from "react";
import CallForPapers from "../../components/papers/callForPapers";
import Hero from "../../components/shared/Hero";
import ImpDates from "../../components/slidingText/ImpDates";
import Bottom from "../../components/shared/Bottom";

function CallForPapersPage() {
  return (
    <div>
      <Hero>callforpapers</Hero>
      <ImpDates>2nd round submission is open till 30th August 2024</ImpDates>
      <CallForPapers />
      <Bottom />
    </div>
  );
}

export default CallForPapersPage;
