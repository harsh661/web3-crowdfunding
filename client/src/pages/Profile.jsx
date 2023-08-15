import React, { useEffect, useState } from "react"
import { useContractContext } from "../context"
import CampaignsGrid from "../components/campaigns/CampaignsGrid"
import Heading from "../components/Heading.jsx"
import Button from "../components/Button"

const Profile = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const { address, contract, getCampaigns } = useContractContext()

  const fetchCampaigns = async () => {
    setLoading(true)
    const campaigns = await getCampaigns()
    setData(campaigns.filter((item) => item.owner === address))
    setLoading(false)
  }

  useEffect(() => {
    if (contract) {
      fetchCampaigns()
    }
  }, [address, contract])

  if(!address) {
    return (
      <div className="flex flex-col items-center justify-center fixed -z-10 inset-0 top-16">
        <Heading title={'You are not signed in'} subtitle={'Connect wallet to get started'} centered/>
      </div>
    )
  }

  return (
    <div className="p-5 max-w-7xl mx-auto">
        <Heading title="My Campaigns" subtitle="Discover all campaings you started"/>
        <CampaignsGrid data={data} loading={loading} />
    </div>
  )
}

export default Profile
