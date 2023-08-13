import React from "react"
import { Controller, useForm } from "react-hook-form"
import Heading from "../components/Heading"
import Input from "../components/Input"
import Button from "../components/Button"

const Create = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
          textArea
          label={"Description"}
          register={register}
          errors={errors}
          name="description"
          validation={{
            minLength: {
              value: 10,
              message: "Please enter at least 10 characters",
            },
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
          <Input
            label={"Target"}
            register={register}
            errors={errors}
            name="target"
            validation={{
              
            }}
          />
          <Input
            label={"Deadline"}
            register={register}
            errors={errors}
            name="deadline"
            validation={{
              
            }}
          />
        </div>
        <Button type="submit" label={"Create campaign"} />
      </form>
    </div>
  )
}

export default Create
