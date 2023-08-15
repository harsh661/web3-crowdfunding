import React from "react"
import { daysLeft } from "../../utils"
import { PiUserCircle } from "react-icons/pi"
import ProgressBar from "./ProgressBar"

const CampaignCard = ({
  owner,
  title,
  image,
  target,
  deadline,
  amountCollected,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline)
  return (
    <div className="border border-gray-border bg-dark-alt/70 text-warm-white rounded-xl px-2">
      <div className="flex items-center gap-1 p-3 overflow-hidden">
        <PiUserCircle size={20} className="text-accent" />
        <span className="text-xs text-gray-text truncate">{owner}</span>
      </div>
      <img
        onClick={handleClick}
        src={image}
        alt={title}
        className="w-full aspect-video object-cover rounded-xl border border-gray-border cursor-pointer"
      />
      <div className="p-3">
        <h2 className="text-white line-clamp-1 font-medium">{title}</h2>
      </div>

      <div className="p-3">
        <ProgressBar goal={target} raisedAmount={amountCollected} />
      </div>
      <div className="p-3 flex items-center justify-between">
        <div className="flex flex-col gap-0">
          <h2 className="text-lg font-bold text-white">
            {amountCollected} ETH
          </h2>
          <p className="text-xs text-gray-text">Collected of {target} ETH</p>
        </div>
        {remainingDays > 0 && (
          <div className="flex flex-col gap-0">
            <h2 className="text-lg font-bold text-white">
              {remainingDays} {remainingDays > 1 ? "days" : "day"}
            </h2>
            <p className="text-xs text-gray-text">Remaining</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CampaignCard
