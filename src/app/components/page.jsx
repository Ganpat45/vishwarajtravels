import React from 'react'
import TravelsSection from '@/components/TravelsSection'
import RideSection from '@/components/RideSection'
import RidesJourneysSection from '@/components/RidesJourneysSection'
import FAQ from '@/components/FAQ'

const page = () => {
  return (
    <div>
      <TravelsSection/>
      <RideSection/>
      <RidesJourneysSection/>
      <FAQ/>
    </div>
  )
}

export default page
