import React from "react";
import CallForPapers from "../../components/papers/callForPapers";
import Hero from "../../components/shared/Hero";
import ImpDates from "../../components/slidingText/ImpDates";
import Bottom from "../../components/shared/Bottom";

function CallForPapersPage() {
  return (
    <div>
      <Hero>callforpapers</Hero>
      <ImpDates>Paper submission starts: 20th December 2023</ImpDates>
      <CallForPapers />
      <Bottom />
    </div>
  );
}

export default CallForPapersPage;
