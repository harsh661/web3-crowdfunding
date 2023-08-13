import React from "react"

const Input = ({
  label,
  name,
  register,
  errors,
  type,
  validation,
  textArea,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-gray-text">
        {label}
      </label>
      {textArea ? (
        <textArea
          type={type}
          id={name}
          {...register(name, validation)}
          className="bg-transparent p-5 text-sm w-full outline-none border border-gray-border h-40 rounded-md"
          required
        />
      ) : (
        <input
          type={type}
          id={name}
          {...register(name, validation)}
          className="bg-transparent p-2 text-sm w-full outline-none border border-gray-border rounded-md"
          required
        />
      )}
    </div>
  )
}

export default Input
