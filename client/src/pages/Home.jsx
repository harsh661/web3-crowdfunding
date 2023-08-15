import React, { useEffect, useState } from "react"
import { useContractContext } from "../context"
import CampaignsGrid from "../components/campaigns/CampaignsGrid"
import Heading from "../components/Heading.jsx"

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const { address, contract, getCampaigns } = useContractContext()

  const fetchCampaigns = async () => {
    setLoading(true)
    const campaigns = await getCampaigns()
    setData(campaigns)
    setLoading(false)
  }

  useEffect(() => {
    if (contract) {
      fetchCampaigns()
    }
  }, [address, contract])

  return (
    <div className="p-5 max-w-7xl mx-auto">
        <Heading title="All Campaigns" subtitle="Discover all ongoing campaings and donate"/>
        <CampaignsGrid data={data} loading={loading} />
    </div>
  )
}

export default Home
