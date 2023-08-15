import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"
import Heading from "../components/Heading"
import ProgressBar from "../components/campaigns/ProgressBar.jsx"
import { FiUsers, FiClock } from "react-icons/fi"
import { daysLeft } from "../utils"
import Button from "../components/Button"
import { useContractContext } from "../context"
import {toast} from 'react-hot-toast'

const CampaignPage = () => {
  const { state } = useLocation()
  const remainingDays = daysLeft(state.deadline)
  const [amount, setAmount] = useState(0.01)
  const [supporters, setSupporters] = useState([])

  const { fundCampaign, getSupporters } = useContractContext()

  useEffect(() => {
    fetchSupporters()
  }, [])

  const fetchSupporters = async () => {
    const data = await getSupporters(state.id)

    setSupporters(data)
  }

  const handleDonation = async () => {
    toast.loading('Processing payment')
    await fundCampaign(state.id, amount)
    toast.dismiss()
    toast.success('Thank you for donating')
  }

  return (
    <div className="p-5 max-w-5xl mx-auto">
      <Heading title={state.title} />
      <img
        src={state.image}
        className="w-full max-h-[500px] object-cover rounded-xl mb-10"
      />

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-gray-text text-sm">Raised so far</span>
          <span className="text-white font-medium text-4xl">
            {state.amountCollected}{" "}
            <span className="text-gray-text text-sm">ETH</span>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-gray-text text-sm">Target</span>
          <span className="text-white font-medium text-4xl">
            {state.target} <span className="text-gray-text text-sm">ETH</span>
          </span>
        </div>
      </div>

      <div className="py-5">
        <ProgressBar goal={state.target} raisedAmount={state.amountCollected} />
      </div>

      <div className="flex items-center gap-10 py-5 text-gray-text">
        <div className="flex items-center gap-2">
          <FiUsers color="gray" />
          <span className="font-medium">{supporters.length}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiClock color="gray" />
          <span className="font-medium">
            {remainingDays} {remainingDays > 1 ? "days" : "day"} remaining
          </span>
        </div>
      </div>

      <Heading title={"Our Story"} />
      <p className="text-gray-text">{state.description}</p>

      <div className="flex flex-col gap-10 p-10 bg-dark-alt rounded-xl my-10">
        <Heading
          title={"Be a Force for Good"}
          subtitle={
            "Your Generous Donation Has the Power to Create Meaningful and Lasting Positive Change"
          }
        />
        <div className="flex items-center gap-5">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step={0.01}
            className="bg-transparent p-2 text-xl w-full max-w-lg outline-none border border-gray-text/50 rounded-md"
            min={0.01}
          />
          <Button onClick={handleDonation} label={"Support"} large/>
        </div>
      </div>
    </div>
  )
}

export default CampaignPage
