import React from 'react'
import { useLocation } from "react-router"

const CampaignPage = () => {
  const {state} = useLocation()
  return (
    <div className="p-5 max-w-7xl mx-auto">
      Campaign
    </div>
  )
}

export default CampaignPage