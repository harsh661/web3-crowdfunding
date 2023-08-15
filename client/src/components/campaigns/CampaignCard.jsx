import React from "react"
import { daysLeft } from "../../utils"

const CampaignCard = ({
  owner,
  title,
  description,
  image,
  target,
  deadline,
  amountCollected,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline)
  return (
    <div
      onClick={handleClick}
      className="border border-gray-border bg-dark-alt/70 text-warm-white rounded-xl px-2"
    >
      <div className="flex flex-col gap-1 p-3 overflow-hidden">
        <span className="text-xs text-white">Started by</span>
        <span className="text-xs text-gray-text truncate">{owner}</span>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full aspect-video object-cover rounded-xl border border-gray-border"
      />
      <div className="p-3">
        <h2 className="text-white line-clamp-1 font-medium">{title}</h2>
        <p className="text-xs text-gray-text line-clamp-2 mt-1">
          {description}
        </p>
      </div>
      <div className="p-3 flex items-center justify-between">
        <div className="flex flex-col gap-0">
          <h2 className="text-lg font-bold text-white">
            {amountCollected} ETH
          </h2>
          <p className="text-xs text-gray-text">Collected of {target} ETH</p>
        </div>
        <div className="flex flex-col gap-0">
          <h2 className="text-lg font-bold text-white">
            {remainingDays} {remainingDays > 1 ? "days" : "day"}
          </h2>
          <p className="text-xs text-gray-text">Remaining</p>
        </div>
      </div>
    </div>
  )
}

export default CampaignCard
