import React from "react"
import CampaignCard from "./CampaignCard"
import Skeleton from "../Skeleton"
import { useNavigate } from "react-router"

const CampaignsGrid = ({ data, loading }) => {
  const navigate = useNavigate()
  
  const handleClick = (data) => {
    navigate(`/campaign/${data.title}`, { state: data })
  }
  
  if (loading) return <Skeleton />

  return (
    <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item) => (
        <CampaignCard key={item.id} {...item} handleClick={() => handleClick(item)}/>
      ))}
    </div>
  )
}

export default CampaignsGrid
