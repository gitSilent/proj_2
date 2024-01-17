'use client'
import arrow from "@/public/arrow.svg"
import Image from "next/image"
import ReviewCard from "../ReviewCard"

import React, { useRef } from 'react'
import Marquee from "react-fast-marquee"

import { IReview } from "@/src/service/models"
import Link from 'next/link'

interface IProps {
    reviews: IReview[]
}

export default function ReviewsComponent({ reviews }: IProps) {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>

    return (
        <div className="relative overflow-hidden flex flex-col items-center xs:max-md:mb-[70px] xs:max-md:mt-[70px] mb-[125px] mt-[125px]">

            <div className="mx-auto w-full max-w-[1220px] relative mb-[30px] lmg:mb-[40px]">

                <div className="flex xs:flex-col xs:items-start xs:max-md:px-[20px] xs:gap-[20px] md:max-lmg:px-[40px] lmg:flex-row lmg:items-start lmg:gap-[118px] lmg:px-[20px]">

                    <div className="prevSpan relative ">
                        <span className="block">Отзывы</span>
                        <span className="absolute tracking-[-0.03em] xs:left-[72px] xs:text-[12px]/[15] md:top-[5px] xs:-top-[85px] md:left-[90px] md:text-[16px]/[20.8px]">{reviews.length}</span>
                    </div>

                    <div className="flex flex-col xs:gap-[30px] lmg:gap-[40px] items-start z-[1]">
                        <div className="max-w-[668px] relative">
                            <span className="titleSpan">Насколько сильно <br /> Нас любят клиенты?</span>
                        </div>
                    </div>
                </div>
            </div>

            <Marquee autoFill={true} direction="left" pauseOnHover={true}>
                {reviews.map((item, idx) => {
                    return (
                        <ReviewCard key={idx} data={item} />
                    )
                })}

            </Marquee>

            <div className="max-w-[1220px] w-full lx:px-0 xs:max-md:pl-[60px] mx-auto">
                <div className="flex xs:flex-col xs:items-start xs:max-md:px-[20px] xs:gap-[20px] md:max-lmg:px-[40px] lmg:flex-row lmg:items-start lmg:gap-[118px] lmg:px-[20px]">
                    <div className="w-[87px]"></div>
                    <Link href={"/products"}>
                        <div className="flex items-center md:mt-[60px] xs:max-md:gap-[26px] gap-[30px] h-[63px]">
                            <span className="postSpan">Смотреть все</span>
                            <Image src={arrow} alt="arrow image" />
                        </div>
                    </Link>
                </div>
            </div>

        </div>

    )
}
