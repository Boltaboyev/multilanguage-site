import React from "react"

// img
import card1 from "../../assets/img/showcase-top/1.png"
import card2 from "../../assets/img/showcase-top/2.png"
import card3 from "../../assets/img/showcase-top/3.png"
import card4 from "../../assets/img/showcase-top/4.png"
import user from "../../assets/img/showcase-top/user.png"

// icons
import {FaArrowRightLong} from "react-icons/fa6"

const Showcase = () => {
    return (
        <section className="showcase py-[15px]">
            <div className="container2">
                <div className="**:cursor-pointer **:hover:text-blue-400 text-[#fff] font-medium text-[14px] leading-[143%] lo tracking-[0.04em] uppercase flex justify-between items-center gap-[10px] pb-[10px] max-[910px]:hidden">
                    <p>News</p>
                    <p>Opinion</p>
                    <p>Science</p>
                    <p>Life</p>
                    <p>Travel</p>
                    <p>Moneys</p>
                    <p>Art & Design</p>
                    <p>Sports</p>
                    <p>People</p>
                    <p>Health</p>
                    <p>Education</p>
                </div>

                <div className="grid grid-cols-4 max-[1240px]:grid-cols-2 max-[650px]:grid-cols-1 *:max-[400px]:flex-col-reverse *:max-[400px]:items-start *:rounded-xl *:max-[1240px]:border max-[1240px]:gap-[20px] *:max-[1240px]:border-[#85838346] max-[1240px]:bg-transparent bg-[#30363d] rounded-xl p-[10px] my-[20px]">
                    <div className="flex justify-between items-center gap-[8px] p-[20px]">
                        <p className="font-medium leading-[136%] text-white ro">
                            25 Songs That Tell Us Where Music Is Going
                        </p>
                        <img
                            src={card1}
                            alt=""
                            className="max-[400px]:rounded-full max-[400px]:h-[50px] max-[400px]:w-[50px] max-[400px]:object-cover"
                        />
                    </div>

                    <div className="flex justify-between items-center gap-[8px] p-[20px]">
                        <p className="font-medium leading-[136%] text-white ro">
                            These Ancient Assassins Eat Their Own Kind
                        </p>
                        <img
                            src={card2}
                            alt=""
                            className="max-[400px]:rounded-full max-[400px]:h-[50px] max-[400px]:w-[50px] max-[400px]:object-cover"
                        />
                    </div>

                    <div className="flex justify-between items-center gap-[8px] p-[20px]">
                        <p className="font-medium leading-[136%] text-white ro">
                            How Do You Teach People to Love Difficult Music?
                        </p>
                        <img
                            src={card3}
                            alt=""
                            className="max-[400px]:rounded-full max-[400px]:h-[50px] max-[400px]:w-[50px] max-[400px]:object-cover"
                        />
                    </div>

                    <div className="flex justify-between items-center gap-[8px] p-[20px]">
                        <p className="font-medium leading-[136%] text-white ro">
                            International Soccer’s Man of Mystery
                        </p>
                        <img
                            src={card4}
                            alt=""
                            className="max-[400px]:rounded-full max-[400px]:h-[50px] max-[400px]:w-[50px] max-[400px]:object-cover"
                        />
                    </div>
                </div>

                <div className="flex justify-between overflow-hidden rounded-xl max-[1111px]:flex-col max-[500px]:rounded-none">
                    <div className="showcase-bg flex flex-col gap-[10px] justify-between p-[40px] flex-1/1 max-[500px]:p-[20px] max-[500px]:mb-4 ">
                        <div className="flex justify-start items-center gap-[8px] max-[1111px]:mb-5">
                            <img src={user} alt="" />
                            <div className="flex flex-col leading-[100%]">
                                <p className="font-normal text-[14px] leading-[143%] text-white">
                                    Benjamin Turner
                                </p>
                                <p className="font-normal text-[12px] opacity-40 leading-[143%] text-white">
                                    Traveler
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[25px]">
                            <p className="lo font-black text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#4592ff]">
                                Destinations
                            </p>

                            <h1 className="ro font-bold text-[40px] leading-[125%] text-white max-[670px]:text-[30px] max-[400px]:text-[16px]">
                                In Southeast England, White Cliffs and Fish
                            </h1>

                            <div className="flex justify-start items-center gap-[50px]">
                                <button className="flex justify-center items-center gap-[5px] cursor-pointer active:scale-98 p-[5px_10px] rounded-full text-white bg-[#4592ff] max-[380px]:w-full">
                                    Read more <FaArrowRightLong  className="text-[12px]"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white **:border-gray-200 flex-1/4 max-[500px]:gap-[10px] max-[500px]:bg-transparent *:max-[500px]:bg-[#fff] *:max-[500px]:shadow-md *:max-[500px]:rounded-lg *:max-[500px]:border *:max-[500px]:border-blue-400">
                        <div className="border-b flex justify-center items-center p-[10px]">
                            <p className="font-medium text-[14px] leading-[143%] tracking-[0.04em] uppercase text-[#262d33]">
                                Recommended for you
                            </p>
                        </div>
                        <div className="border-b p-[15px] flex flex-col gap-[3px]">
                            <p className="font-medium text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#3bbdc4]">
                                Food
                            </p>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                                For Chicken-Fried Steak, Too Much Is Just Enough
                            </p>
                        </div>

                        <div className="border-b p-[15px] flex flex-col gap-[3px]">
                            <p className="font-medium text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#3bbdc4]">
                                Cars
                            </p>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                                Storm Has Car Dealers Doing Swift Business
                            </p>
                        </div>

                        <div className="border-b p-[15px] flex flex-col gap-[3px]">
                            <p className="font-medium text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#3bbdc4]">
                                Movies
                            </p>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                                War Is Hell? In New Military Dramas, It’s
                                One-Dimensional
                            </p>
                        </div>

                        <div className="border-b p-[15px] flex flex-col gap-[3px]">
                            <p className="font-medium text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#3bbdc4]">
                                NFL
                            </p>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                                11 surprising stat rankings for active NFL
                                players
                            </p>
                        </div>

                        <div className="border-b p-[15px] flex flex-col gap-[3px]">
                            <p className="font-medium text-[12px] leading-[125%] tracking-[0.04em] uppercase text-[#3bbdc4]">
                                Tech Reviews
                            </p>

                            <p className="font-normal text-[14px] leading-[143%] text-[#4b5157]">
                                The bookcases you can buy online and assemble
                                yourself
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
