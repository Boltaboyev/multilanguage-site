import React from "react"
import {useTranslation} from "react-i18next"

// img
import car from "../../assets/img/1.png"
import cat from "../../assets/img/3.png"
import user from "../../assets/img/user/1.png"
import user2 from "../../assets/img/user/2.png"
import user3 from "../../assets/img/user/3.png"

const GridCards = () => {
    const {t} = useTranslation()
    return (
        <section className="py-[10px]">
            <div className="container2">
                <div className="grid grid-cols-2 gap-[25px] max-[1090px]:grid-cols-1">
                    {/* left side */}
                    <div className="grid grid-cols-1 gap-[25px]">
                        {/* left side top */}
                        <div className="flex justify-between items-center  bg-white gap-[10px] rounded-xl relative h-[260px] max-[485px]:h-fit">
                            <div className="flex flex-col justify-between items-start gap-[10px] p-[15px] h-full">
                                <p className="font-medium text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#6e99ae]">
                                    {t("cars2")}
                                </p>
                                <p className="font-bold ro text-[25px] leading-[120%] text-[#262d33] max-[495px]:text-[17px]">
                                    {t("cars_headline2")}
                                </p>
                                <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] lo">
                                    {t("cars_description")}
                                </p>
                            </div>

                            <div className="h-full flex justify-center items-center max-[485px]:hidden">
                                <img
                                    src={car}
                                    alt=""
                                    className="h-full object-contain"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-[25px] max-[610px]:grid-cols-1">
                            <div className="flex flex-col bg-white rounded-xl overflow-hidden">
                                <img src={cat} alt="" />
                                <div className="flex justify-center items-center gap-[10px] p-[10px]">
                                    <p className="font-bold text-[16px] leading-[156%] text-[#262d33]">
                                        {t("cats_headline")}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 h-full gap-[25px]">
                                <div className="flex  justify-between flex-col gap-[10px] bg-white p-[10px] rounded-xl">
                                    <p className="font-bold text-[16px] leading-[156%] text-[#262d33]">
                                        {t("coffee_headline")}
                                    </p>
                                    <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                                        {t("coffee_description")}
                                    </p>
                                    <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                        Oct 15
                                    </p>
                                </div>

                                <div className="flex  justify-between flex-col gap-[10px] bg-white p-[10px] rounded-xl">
                                    <p className="font-bold text-[16px] leading-[156%] text-[#262d33]">
                                        {t("stress_headline")}
                                    </p>
                                    <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                                        {t("stress_description")}
                                    </p>
                                    <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                        Oct 14
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="grid grid-cols-2 gap-[25px] max-[555px]:grid-cols-1">
                        <div className=" grid grid-cols-1 gap-[25px]">
                            <div className="flex flex-col justify-between hand items-start  bg-amber-300 gap-[10px] p-[10px] rounded-xl">
                                <p className="text-white bg-green-400 rounded-md p-[3px_5px] text-[13px]">
                                    {t("popular")}
                                </p>

                                <div className="flex flex-col gap-[10px]">
                                    <h1 className="font-bold text-[16px] leading-[156%] tracking-[0.03em] uppercase text-white max-[485px]:text-[13px]">
                                        {t("tattoo_headline")}
                                    </h1>

                                    <div className="flex justify-start items-center gap-[4px]">
                                        <img src={user} alt="" />
                                        <div className="flex flex-col leading-[100%]">
                                            <p className="text-[14px] text-white">
                                                By Sarah Jenkins
                                            </p>
                                            <p className="text-[13px] text-white opacity-50">
                                                Sept 26
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 h-full gap-[25px]">
                                <div className="flex  justify-between flex-col gap-[10px] bg-white p-[10px] rounded-xl">
                                    <p className="font-bold text-[16px] leading-[156%] text-[#262d33]">
                                        {t("manufacture_headline")}
                                    </p>
                                    <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                                        {t("manufacture_description")}
                                    </p>
                                    <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                        Oct 15
                                    </p>
                                </div>

                                <div className="flex  justify-between flex-col gap-[10px] bg-white p-[10px] rounded-xl">
                                    <p className="font-bold text-[16px] leading-[156%] text-[#262d33]">
                                        {t("lemon_headline")}
                                    </p>
                                    <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                                        {t("lemon_description")}
                                    </p>
                                    <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                        Oct 14
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 bg-[#6e99ae] rounded-xl overflow-hidden *:border-gray-100">
                            <div className="flex flex-col justify-center gap-[20px] items-start  border-b p-[15px]">
                                <h1 className="font-bold text-[20px] leading-[125%] text-white max-[485px]:text-[15px]">
                                    {t("architecture_headline")}
                                </h1>

                                <div className="flex justify-start items-center gap-[5px]">
                                    <img src={user2} alt="" />
                                    <div className="flex flex-col leading-[100%]">
                                        <p className="text-[14px] text-white">
                                            David Williams
                                        </p>
                                        <p className="text-[13px] text-white opacity-50">
                                            Architect
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center gap-[20px] items-start  border-b p-[15px]">
                                <h1 className="font-bold text-[20px] leading-[125%] text-white max-[485px]:text-[15px]">
                                    {t("details_headline")}
                                </h1>

                                <div className="flex justify-start items-center gap-[5px]">
                                    <img src={user3} alt="" />
                                    <div className="flex flex-col leading-[100%]">
                                        <p className="text-[14px] text-white">
                                            Alexandra Green
                                        </p>
                                        <p className="text-[13px] text-white opacity-50">
                                            Interior designer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center gap-[20px] items-start  border-b p-[15px]">
                                <h1 className="font-bold text-[20px] leading-[125%] text-white max-[485px]:text-[15px]">
                                    {t("life_headline")}
                                </h1>

                                <div className="flex justify-start items-center gap-[5px]">
                                    <img src={user2} alt="" />
                                    <div className="flex flex-col leading-[100%]">
                                        <p className="text-[14px] text-white">
                                            Olivia Thompson
                                        </p>
                                        <p className="text-[13px] text-white opacity-50">
                                            Coacher
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GridCards
