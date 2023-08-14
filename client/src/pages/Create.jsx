import React from "react"
import { Controller, useForm } from "react-hook-form"
import Heading from "../components/Heading"
import Input from "../components/Input"
import Button from "../components/Button"
import { useContractContext } from "../context"
import { ethers } from "ethers"
import { checkIfImage } from "../utils"
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router"

const Create = () => {
  const navigate = useNavigate()
  const { createCampaign } = useContractContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    checkIfImage(data.image, async (exists) => {
      if (exists) {
        toast.loading('Publishing campaign')
        await createCampaign({
          ...data,
          target: ethers.utils.parseUnits(data.target, 18),
        })
        toast.dismiss()
        toast.success('Campaign published')
        navigate('/')
      } else {
        toast.error('Image link is invalid')
      }
    })
  }

  return (
    <div className="mx-auto max-w-7xl p-5">
      <Heading title={"Create a new campaign"} />
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
          <Input
            label={"Name"}
            register={register}
            errors={errors}
            name="name"
            validation={{
              minLength: {
                value: 3,
                message: "Please enter at least 3 characters",
              },
            }}
          />
          <Input
            label={"Title"}
            register={register}
            errors={errors}
            name="title"
            validation={{
              minLength: {
                value: 10,
                message: "Please enter at least 10 characters",
              },
            }}
          />
        </div>
        <Input
          textarea
          label={"Description"}
          register={register}
          errors={errors}
          name="description"
          validation={{
            minLength: {
              value: 20,
              message: "Please enter at least 20 characters",
            },
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5 pb-10">
          <Input
            label={"Target"}
            type={"number"}
            step={"0.1"}
            min={0.1}
            register={register}
            errors={errors}
            name="target"
            validation={{}}
          />
          <Input
            label={"Deadline"}
            type={"date"}
            register={register}
            errors={errors}
            name="deadline"
            validation={{}}
          />
          <Input
            label={"Image Link"}
            type={"url"}
            register={register}
            errors={errors}
            name="image"
            validation={{}}
          />
        </div>
        <Button type="submit" label={"Create campaign"} />
      </form>
    </div>
  )
}

export default Create
