import Hero from "../components/Home/Hero";
import React from 'react'

function HeroPage() {
 
    const impDates=[
        {
            heading:'lorem ipsum',
            content:'01 sept 2023'
        },
        {
            heading:'lorem ipsum',
            content:'01 sept 2023'
        },
        {
            heading:'lorem ipsum',
            content:'01 sept 2023'
        },
        {
            heading:'lorem ipsum',
            content:'01 sept 2023'
        },
        {
            heading:'lorem ipsum',
            content:'01 sept 2023'
        }
    ]

  return (
    <div>
        <Hero dates={impDates} />
    </div>
  )
}

export default HeroPage;