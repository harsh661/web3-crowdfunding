import React, { useContext, createContext } from "react"

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react"
import { ethers } from "ethers"

const ContractContext = createContext()

export const ContractContextProvider = ({ children }) => {
  const { contract } = useContract("0x2C9323cEe120F35cB9de3277BDf50331fC077B32")
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  )

  const address = useAddress()
  const connect = useMetamask()

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign({
        args: [
          address,
          form.title,
          form.description,
          form.target,
          new Date(form.deadline).getTime(),
          form.image,
        ],
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns')

    const parseData = campaigns.map((campaign, index) => ({
      id: index,
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      deadline: campaign.deadline.toNumber(),
      image: campaign.image
    }))

    return parseData
  }

  return (
    <ContractContext.Provider
      value={{
        address,
        connect,
        contract,
        createCampaign: publishCampaign,
        getCampaigns,
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

export const useContractContext = () => useContext(ContractContext)
