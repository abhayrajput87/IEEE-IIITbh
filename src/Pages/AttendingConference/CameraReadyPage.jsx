import React from 'react'
import Hero from '../../components/shared/Hero'
import Bottom from '../../components/shared/Bottom'
import CameraReadyGuidelines from '../../components/CameraReadyGuidelines'

function CameraReadyPage() {
  return (
    <div>
      <Hero>registration</Hero>
      <CameraReadyGuidelines />
      <Bottom />
    </div>
  )
}

export default CameraReadyPage