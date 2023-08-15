import React from "react"
import CampaignCard from "./CampaignCard"
import Skeleton from "../Skeleton"

const CampaignsGrid = ({ data, loading }) => {
  if (loading) return <Skeleton />

  return (
    <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item) => (
        <CampaignCard key={item.id} {...item} />
      ))}
    </div>
  )
}

export default CampaignsGrid
