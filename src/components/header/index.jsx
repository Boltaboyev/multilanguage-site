import React from "react"

// img
import add from "../../assets/img/header.png"
import header from "../../assets/img/header-2.png"
import logo from "../../assets/img/logo.png"

// icons
import {RiMenu2Fill} from "react-icons/ri"
import {IoSearchOutline} from "react-icons/io5"
import {FaUser} from "react-icons/fa"
import {IoSunnyOutline} from "react-icons/io5"

const Header = () => {
    return (
        <header className="bg-white">
            <nav className="container2 **:border-[#00000021]">
                {/* top */}
                <nav className="flex justify-between items-center h-[35px] border-b max-[450px]:hidden">
                    <nav className="flex justify-start items-center gap-[10px] h-full">
                        <nav className="flex justify-center items-center gap-[10px] h-full pr-3 border-r">
                            <RiMenu2Fill className="opacity-40" />
                            <p className="fo font-medium text-[14px] leading-[143%] text-[#262d33]">
                                Sections
                            </p>
                        </nav>

                        <nav className="flex justify-start items-center gap-[10px] pl-3">
                            <IoSearchOutline />
                            <input
                                type="text"
                                placeholder="Search"
                                className="outline-none"
                            />
                        </nav>
                    </nav>

                    <nav className="flex justify-end items-center gap-[40px]">
                        <nav className="flex justify-center items-center gap-[10px]">
                            <button className="h-[25px] w-[25px] text-[14px] border flex justify-center items-center rounded-md hover:border-blue-300 cursor-pointer">
                                uz
                            </button>

                            <button className="h-[25px] w-[25px] text-[14px] border flex justify-center items-center rounded-md hover:border-blue-300 cursor-pointer">
                                en
                            </button>

                            <button className="h-[25px] w-[25px] text-[14px] border flex justify-center items-center rounded-md hover:border-blue-300 cursor-pointer">
                                ru
                            </button>
                        </nav>

                        <nav className="flex justify-center items-center gap-[4px] h-[30px] max-[750px]:hidden">
                            <img src={add} alt="" className="h-full" />
                            <nav className="flex flex-col gap-0 leading-[100%]">
                                <p className="text-[12px] font-bold ro">
                                    Subscribe Now
                                </p>
                                <small className="text-[12px] opacity-60 lo">
                                    3 month for $19
                                </small>
                            </nav>
                        </nav>

                        <button className="flex justify-center items-center gap-[3px] text-[#bcbfc2] hover:text-blue-400 cursor-pointer max-[750px]:hidden">
                            <FaUser />
                            Sign In
                        </button>
                    </nav>
                </nav>

                {/* bottom */}
                <nav className="flex justify-between items-center gap-[20px] overflow-hidden p-[10px]">
                    <nav className="flex justify-start items-center gap-[20px] cursor-pointer **:hover:text-blue-400 max-[770px]:hidden">
                        <img src={header} alt="" className="h-[35px]" />
                        <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                            Boston and New York Bear Brunt
                        </p>
                    </nav>

                    <img src={logo} alt="" className="w-[120px]" />

                    <nav className="flex justify-center items-center gap-[40px] max-[750px]:hidden">
                        <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                            Monday, January 1, 2018
                        </p>
                        <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] flex justify-center items-center gap-[3px]">
                            <IoSunnyOutline />- 23 °C
                        </p>
                    </nav>

                    <nav className="hidden max-[450px]:flex justify-center items-center gap-[10px]">
                        <button className="h-[25px] w-[25px] text-[14px] border flex justify-center items-center rounded-md hover:border-blue-300 cursor-pointer">
                            uz
                        </button>

                        <button className="h-[25px] w-[25px] text-[14px] border flex justify-center items-center rounded-md hover:border-blue-300 cursor-pointer">
                            en
                        </button>

                        <button className="h-[25px] w-[25px] text-[14px] border flex justify-center items-center rounded-md hover:border-blue-300 cursor-pointer">
                            ru
                        </button>
                    </nav>
                </nav>
            </nav>
        </header>
    )
}

export default Header
