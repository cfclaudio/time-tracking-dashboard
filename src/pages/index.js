import React, { useState } from 'react'
import { TimeCard } from 'components'
import Head from 'next/head'
import { Box } from 'theme-ui'

import data from 'data/data'

export default function Home() {
  const [timeframe] = useState('daily')

  const styling = {
    work: { color: 'work', icon: 'icon-work.svg' },
    play: { color: 'play', icon: 'icon-play.svg' },
    study: { color: 'study', icon: 'icon-study.svg' },
    exercise: { color: 'exercise', icon: 'icon-exercise.svg' },
    social: { color: 'social', icon: 'icon-social.svg' },
    'self care': { color: 'selfCare', icon: 'icon-self-care.svg' },
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>

      <Box as="main" sx={{ margin: ['2em', '2em', '5em'] }}>
        <Box className="time-card-grid" variant="grids.time">
          {data.map(({ title, timeframes }, i) => {
            const name = title.toLowerCase()
            return (
              <TimeCard
                key={i}
                title={title}
                current={timeframes[timeframe].current}
                previous={timeframes[timeframe].previous}
                color={styling[name].color}
                icon={styling[name].icon}
              />
            )
          })}
        </Box>
      </Box>
    </div>
  )
}
