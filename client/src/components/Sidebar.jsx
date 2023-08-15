import React, { useEffect, useState } from "react"
import { navlinks } from "../constants"
import {SiBlockchaindotcom} from 'react-icons/si'
import { useLocation, useNavigate } from "react-router"

const NavItem = ({ name, icon: Icon, disabled, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive && "bg-gray-border/50"
      } ${disabled ? 'opacity-50 cursor-not-allowed': 'cursor-pointer'} p-2 text-gray-text hover:text-warm-white hover:bg-gray-border/50 rounded-md relative group flex items-center transition-all duration-200`}
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
  const location = useLocation()

  useEffect(() => {
    setIsActive(location.pathname)
  }, [location.pathname])

  return (
    <div className="p-3 flex">
      <div className="flex flex-col items-center gap-5">
        <div className="py-3 text-accent">
            <SiBlockchaindotcom size={20}/>
        </div>
        {navlinks.map((item) => (
          <NavItem
           key={item.name} 
           {...item} 
           isActive={isActive === item.link}
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
