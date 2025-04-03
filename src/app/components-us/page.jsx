import React from 'react'
import Helping from '@/components/Helping'
import BuseSection from '@/components/BusSection'
import TravelsSection from '@/components/TravelsSection'
import RideSection from '@/components/RideSection'
import RidesJourneysSection from '@/components/RidesJourneysSection'
import FAQ from '@/components/FAQ'

const page = () => {
  return (
    <div>
      <Helping/>
      <BuseSection/>
      <TravelsSection/>
      <RideSection/>
      <RidesJourneysSection/>
      <FAQ/>
    </div>
  )
}

export default page
