import React, { useState } from "react"
import { navlinks } from "../constants"
import {SiBlockchaindotcom} from 'react-icons/si'
import { useNavigate } from "react-router"

const NavItem = ({ name, icon: Icon, link, disabled, isActive, onClick }) => {
  const active = isActive === name
  return (
    <div
      onClick={onClick}
      className={`${
        active && "bg-gray-border/50"
      } ${disabled && 'opacity-50'} p-2 text-gray-text hover:text-warm-white hover:bg-gray-border/50 rounded-md relative group flex items-center transition-all duration-200`}
    >
      <Icon size={25} />
      <span className="text-xs bg-dark-alt p-2 absolute ml-10 rounded-sm hidden group-hover:flex">
        {name}
      </span>
    </div>
  )
}

const Sidebar = () => {
  const [isActive, setIsActive] = useState("dashboard")
  const navigate = useNavigate()

  return (
    <div className="p-3">
      <div className="flex flex-col items-center gap-5">
        <div className="py-3 text-accent">
            <SiBlockchaindotcom size={20}/>
        </div>
        {navlinks.map((item) => (
          <NavItem
           key={item.name} 
           {...item} 
           isActive={isActive}
           onClick={() => {
            if(!item.disabled) {
                setIsActive(item.name)
                navigate(item.link)
            }
           }}
         />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
