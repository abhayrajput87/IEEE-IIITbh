import React from 'react'
import Hero from "../../components/shared/Hero";
import Bottom from '../../components/shared/Bottom';
import ProgramSchedule from '../../components/program/ProgramSchedule';
import DayTwoSchedule from '../../components/program/DayTwoSchedule';
import DayThreeSchedule from '../../components/program/DayThreeSchedule';
function ProgramSchedulePage() {
  return (
    <>
          <Hero>Program Schedule</Hero>
          <ProgramSchedule/>
          <DayTwoSchedule/>
          <DayThreeSchedule/>
        
      <Bottom/>
    </>
  )
}

export default ProgramSchedulePage;