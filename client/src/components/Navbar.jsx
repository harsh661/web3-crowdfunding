import React, { useState } from "react"
import { SiBlockchaindotcom } from "react-icons/si"
import { IoMenuOutline } from "react-icons/io5"
import Button from "./Button"
import { navlinks } from "../constants"
import Search from "./Search"

const NavItem = ({ name, icon: Icon, link, disabled }) => {
  return (
    <div className="p-3 text-gray-text flex items-center border-b border-gray-border">
      <Icon size={20} />
      <span className="text-sm bg-dark-alt p-2 absolute ml-10 rounded-sm">
        {name}
      </span>
    </div>
  )
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    // Wrapper for navbar
    <div className="w-full relative h-16">
      {/* Navbar */}
      <div className="px-3 md:px-5 lg:px-10 h-16 flex items-center justify-between fixed md:static w-full z-50 bg-dark-main border-b border-gray-border">
        <div className="text-accent md:hidden">
          <SiBlockchaindotcom size={20} />
        </div>

        <div className="max-w-md w-full hidden md:flex">
          <Search placeholder={'Search for a campaign'}/>
        </div>

        {/* Hamburger icon to toggle menu */}
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex md:hidden text-warm-white p-2 hover:bg-gray-border/50 rounded-md relative group transition-all duration-200"
        >
          <IoMenuOutline size={25} />
        </div>

        <div className="hidden md:flex">
          <Button label={"Connect your wallet"} />
        </div>
      </div>

      {/* Navmenu which slides in */}
      <div
        className={`absolute left-0 top-[100%] md:hidden flex flex-col gap-3 bg-dark-alt p-5 w-full transition-all duration-500 ${
          !menuOpen ? "-translate-y-[100%]" : "translate-y-0"
        }`}
      >
        {navlinks.map((item) => (
          <NavItem {...item} />
        ))}
        <div className="pt-2">
          <Button label={"Create a campaign"} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
