import React, { useState } from "react"
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"
import Button from "./Button"
import { navlinks } from "../constants"
import {SiBlockchaindotcom} from 'react-icons/si'
import Search from "./Search"
import { useNavigate } from "react-router"
import { useContractContext } from "../context"
import { Link } from "react-router-dom"

const NavItem = ({ name, icon: Icon, link, disabled, onClick }) => {
  return (
    <Link to={link} onClick={onClick} className="p-3 text-gray-text flex items-center border-b border-gray-border">
      <Icon size={20} />
      <span className={`text-sm bg-dark-alt p-2 absolute ml-10 rounded-sm ${disabled && 'opacity-50'}`}>
        {/* Capitalize first letter */}
        {name[0].toUpperCase() + name.slice(1)}
      </span>
    </Link>
  )
}

const ProfileButton = ({address}) => {
  return (
    <Link
      to={"/profile"}
      className="flex items-center gap-2 text-xs text-gray-text bg-dark-alt hover:bg-gray-border/80 rounded-md py-2 px-3 w-60 cursor-pointer"
    >
      <img src="/metamask.svg" alt="Metamask" className="w-5 h-5" />
      <span className="flex-[2] pr-1 overflow-hidden truncate">{address}</span>
    </Link>
  )
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { address, connect } = useContractContext()
  return (
    // Wrapper for navbar
    <div className="w-full h-16 sticky top-0">
      {/* Navbar */}
      <div className="px-3 md:px-5 lg:px-10 h-16 flex items-center justify-between gap-5 fixed md:static w-full bg-dark-main border-b border-gray-border">
        <div className="md:hidden">
          {address ? (
            <ProfileButton address={address}/>
          ) : (
            <SiBlockchaindotcom className="text-accent" size={25}/>
          )}
        </div>

        <div className="max-w-md w-full hidden md:flex">
          <Search placeholder={"Search for a campaign"} />
        </div>

        {/* Hamburger icon to toggle menu */}
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex md:hidden text-warm-white p-2 rounded-md transition-all duration-200 z-50"
        >
          {menuOpen ? <IoCloseOutline size={25} />: <IoMenuOutline size={25} />}
        </div>

        <div className="hidden md:flex">
          {address ? (
            <ProfileButton address={address}/>
          ) : (
            <Button label={"Connect your wallet"} onClick={() => connect()} />
          )}
        </div>
      </div>

      {/* Navmenu which slides in */}
      <div
        className={`fixed right-0 top-16 h-[100dvh] w-full md:hidden flex flex-col gap-3 bg-dark-alt p-5 transition-all duration-500 ${
          !menuOpen ? "translate-x-[100%]" : "translate-x-0"
        }`}
      >
        {navlinks.map((item) => (
          <NavItem key={item.name} {...item} onClick={()=>setMenuOpen(false)}/>
        ))}
        <div className="pt-2">
          <Button
            label={address ? "Create a campaign" : "Connect your wallet"}
            onClick={() => {
              if (address) {
                navigate("/create")
              } else {
                connect()
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
