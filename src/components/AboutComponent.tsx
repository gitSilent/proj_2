'use client'
import Image from "next/image"
import Link from 'next/link'
import aboutImage from "../../public/about/aboutImage.webp"
import arrow from "../../public/arrow.svg"
import { InView } from "react-intersection-observer"

export default function AboutComponent() {
    return (
        <InView>
            {({ inView, ref }) => (
                <div ref={ref} className={`${inView ? "fade-in" : "opacity-0"} mx-auto max-w-[1220px] w-full px-[20px] relative xs:max-md:mt-[50px] xs:max-md:mb-[70px] mt-[150px] mb-[125px]`}>

                    <Image src={aboutImage} alt="about image" className="hidden absolute lmg:block -right-[290px] -top-[60px] z-0" />


                    <div className="flex xs:flex-col items-start justify-start  xs:max:md:px-[20px] xs:gap-[20px] md:max-lmg:px-[40px] lmg:flex-row lmg:gap-[140px]">

                        <span className="prevSpan">О нас</span>

                        <div className="flex flex-col xs:gap-[30px] lmg:gap-[40px] items-start z-[1]">

                            <div className="max-w-[640px] relative">
                                <span className="titleSpan absolute -left-[25px] xs:max-md:hidden">«</span>
                                <span className="titleSpan absolute -right-[3px] xs:max-md:hidden">»</span>

                                <span className=" titleSpan md:hidden">«новые стандарты»</span>
                                <span className="titleSpan xs:max-md:hidden">новые стандарты</span>

                                <span className="titleSpan xs:max-md:ml-[30px]">для дома и офиса</span>
                            </div>

                            <p className="mainText max-w-[680px] xs:max-md:max-w-[275px] xs:max-md:ml-[45px] z-[1]">Объединяющим фактором проектов MishkaWood является минимализм и простота, а также желание органично вписаться в жизнь людей и их ежедневную деятельность, быт, работу, домохозяйство или отдых. Мы используем традиционные методы и передовые технологии для придания нашей продукции эстетичного вида в сочетании с этическими подходами, отвечающими требованиям нового времени. MishkaWood — это бренд, который создает «новые стандарты», чтобы делать комфортнее жизнь тех, кто владеет продукцией сделанной с душой</p>

                            <Link href="/about">
                                <div className="flex items-center gap-[30px] h-[65px]">
                                    <span className="postSpan xs:max-md:ml-[45px]">Подробнее</span>
                                    <Image src={arrow} alt="arrow image" />
                                </div>
                            </Link>

                        </div>
                    </div>


                </div>
            )}
        </InView>

    )
}
