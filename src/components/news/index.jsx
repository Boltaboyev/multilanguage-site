import React from "react"

// img
import card1 from "../../assets/img/card/1.png"
import card2 from "../../assets/img/card/2.png"
import card3 from "../../assets/img/card/3.png"
import card4 from "../../assets/img/card/4.png"
import card5 from "../../assets/img/card/5.png"
import card6 from "../../assets/img/card/6.png"

// icons
import {FaRegBookmark} from "react-icons/fa"

const News = () => {
    return (
        <section className="py-[20px]">
            <div className="container2">
                <div className="grid grid-cols-1 gap-[20px]">
                    <div className="flex justify-between items-center gap-[20px] p-[15px] bg-white rounded-2xl max-[670px]:flex-col">
                        <div className="flex justify-center items-center h-[200px] flex-1/2 max-[670px]:w-full">
                            <img
                                src={card1}
                                alt=""
                                className="rounded-xl h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-[10px] justify-between items-start w-full h-full">
                            <div className="flex justify-between items-center gap-[10px] w-full">
                                <p className="font-normal text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#4592ff]">
                                    Flights
                                </p>

                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                Passengers Suffer as Crowded Field Puts Pressure
                                on Europe’s Airlines
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                Weaker carriers have fallen by the wayside amid
                                fierce competition, while others have been hit
                                by bad luck. The result: thousands of canceled
                                flights.
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Aug 6
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-[20px] p-[15px] bg-white rounded-2xl max-[670px]:flex-col">
                        <div className="flex justify-center items-center h-[200px] flex-1/2 max-[670px]:w-full">
                            <img
                                src={card2}
                                alt=""
                                className="rounded-xl h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-[10px] justify-between items-start w-full h-full">
                            <div className="flex justify-between items-center gap-[10px] w-full">
                                <p className="font-normal text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#4592ff]">
                                    Food
                                </p>

                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                Three Courses, 20 Euros: The Affordable Dining
                                Renaissance in Paris
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                The Los Angeles area, for all of its culinary
                                diversity, has not historically been thought of
                                as a haven for bread lovers. The area has a
                                reputation as a place where gluten fears to
                                tread.
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Oct 7
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-[20px] p-[15px] bg-white rounded-2xl max-[670px]:flex-col">
                        <div className="flex justify-center items-center h-[200px] flex-1/2 max-[670px]:w-full">
                            <img
                                src={card3}
                                alt=""
                                className="rounded-xl h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-[10px] justify-between items-start w-full h-full">
                            <div className="flex justify-between items-center gap-[10px] w-full">
                                <p className="font-normal text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#4592ff]">
                                    Science
                                </p>

                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                Watch the High-Flying Physics of a Plant’s
                                Exploding Fruits
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                Three undergradute physics majors and their
                                professor worked out how the hairyflower wild
                                petunia shoots tiny seeds more than 20 feet
                                through the air
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Aug 11
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-[20px] p-[15px] bg-white rounded-2xl max-[670px]:flex-col">
                        <div className="flex justify-center items-center h-[200px] flex-1/2 max-[670px]:w-full">
                            <img
                                src={card4}
                                alt=""
                                className="rounded-xl h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-[10px] justify-between items-start w-full h-full">
                            <div className="flex justify-between items-center gap-[10px] w-full">
                                <p className="font-normal text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#4592ff]">
                                    Health
                                </p>

                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                How the Shape of Your Ears Affects What You Hear
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                We’re able to locate sound because our brains
                                grasp the shape of our ears. When that shape
                                changes, we need time and practice to adapt.
                                Ears are a peculiarly individual piece of
                                anatomy.
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Oct 19
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-[20px] p-[15px] bg-white rounded-2xl max-[670px]:flex-col">
                        <div className="flex justify-center items-center h-[200px] flex-1/2 max-[670px]:w-full">
                            <img
                                src={card5}
                                alt=""
                                className="rounded-xl h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-[10px] justify-between items-start w-full h-full">
                            <div className="flex justify-between items-center gap-[10px] w-full">
                                <p className="font-normal text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#4592ff]">
                                    Science
                                </p>

                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                Forests Protect the Climate. A Future With More
                                Storms Would Mean Trouble.
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                With an increase in extreme weather expected in
                                the years to come, forests could be changed
                                permanently as the world continues to warm
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Oct 22
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-[20px] p-[15px] bg-white rounded-2xl max-[670px]:flex-col">
                        <div className="flex justify-center items-center h-[200px] flex-1/2 max-[670px]:w-full">
                            <img
                                src={card6}
                                alt=""
                                className="rounded-xl h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-[10px] justify-between items-start w-full h-full">
                            <div className="flex justify-between items-center gap-[10px] w-full">
                                <p className="font-normal text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#4592ff]">
                                    Art & Design
                                </p>

                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                New Contemporary Institute Reverberates in
                                Richmond’s Historic Landscape
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                The center, which will open in April, takes a
                                bold look at race and other social issues that
                                still resonate in the region as well as the
                                nation. A new Institute for Contemporary Art is
                                set to open.
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Oct 26
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
