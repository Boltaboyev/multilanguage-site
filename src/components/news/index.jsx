import React from "react"
import {useTranslation} from "react-i18next"
import {FaRegBookmark} from "react-icons/fa"

// Import images
import card1 from "../../assets/img/card/1.png"
import card2 from "../../assets/img/card/2.png"
import card3 from "../../assets/img/card/3.png"
import card4 from "../../assets/img/card/4.png"
import card5 from "../../assets/img/card/5.png"
import card6 from "../../assets/img/card/6.png"

const News = () => {
    const {t} = useTranslation()

    return (
        <section className="py-[20px]">
            <div className="container2">
                <div className="grid grid-cols-1 gap-[20px]">
                    {/* Card 1 */}
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
                                    {t("flights")}
                                </p>
                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                {t("flights_title")}
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                {t("flights_description")}
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Aug 6
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
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
                                    {t("food")}
                                </p>
                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                {t("food_title")}
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                {t("food_description")}
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Oct 7
                            </p>
                        </div>
                    </div>

                    {/* card3 */}
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
                                    {t("science")}
                                </p>
                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                {t("science_title")}
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                {t("science_description")}
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Oct 7
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
                                    {t("health")}
                                </p>
                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                {t("health_title")}
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                {t("health_description")}
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Oct 7
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
                                    {t("forest")}
                                </p>
                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                {t("forests_title")}
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                {t("forests_description")}
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Oct 7
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
                                    {t("art_design")}
                                </p>
                                <FaRegBookmark className="opacity-50" />
                            </div>

                            <h1 className="font-bold text-[20px] leading-[125%] text-[#262d33] max-[350px]:text-[16px]">
                                {t("art_title")}
                            </h1>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157] max-[350px]:text-[14px]">
                                {t("art_description")}
                            </p>

                            <p className="font-normal text-[12px] leading-[125%] text-[#939699]">
                                Oct 7
                            </p>
                        </div>
                    </div>

                    {/* Repeat for other cards... */}
                </div>
            </div>
        </section>
    )
}

export default News
