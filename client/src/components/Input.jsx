import React from "react"

const Input = ({
  label,
  name,
  register,
  errors,
  type,
  validation,
  textarea,
  step,
  min
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className={`text-sm text-gray-text`}>
        {label}
      </label>
      {textarea ? (
        <textarea
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
          step={step}
          min={min}
          {...register(name, validation)}
          className="bg-transparent p-2 text-sm w-full outline-none border border-gray-border rounded-md"
          required
        />
      )}
    </div>
  )
}

export default Input
