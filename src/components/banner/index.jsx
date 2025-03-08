import React from "react"

import {FaArrowRightLong} from "react-icons/fa6"

const Banner = () => {
    return (
        <section className="my-[20px] py-[20px] banner">
            <div className="container2 flex justify-center flex-col gap-[10px] items-center ">
                <h1 className="font-bold text-[40px] leading-[125%] text-center text-white max-[760px]:text-[26px] max-[480px]:text-[16px]">
                    The Big Bloom or «How Flowering <br /> Plants Changed the
                    World»
                </h1>

                <button className="flex justify-center items-center gap-[5px] cursor-pointer active:scale-98 p-[5px_10px] rounded-full text-white bg-[#4592ff] max-[380px]:w-full max-[480px]:w-full">
                    Read more <FaArrowRightLong className="text-[12px]" />
                </button>
            </div>
        </section>
    )
}

export default Banner
