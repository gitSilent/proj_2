'use client'
import quotes from "@/public/reviews/Quotes.svg"
import userMishka from "@/public/reviews/userMishka.svg"
import { IReview } from "@/src/service/models"
import Image from "next/image"
import { useState } from "react"

interface IProps {
    data: IReview
}

export default function BigReviewCard({ data }: IProps) {
    const [isOpened, setIsOpened] = useState<boolean>(false)

    return (
        <div className="big-review-card  lg:mb-[20px]">

            <Image src={quotes} alt="" className='absolute z-[0] max-w-[206px] right-0 top-[-32px] lg:top-0' />

            <section className="flex gap-[12px] z-[5] ">
                <div className="relative max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px]"> <Image fill src={data.image ? data.image : userMishka} alt="" className='w-full h-full rounded-bl-[100px] rounded-br-[100px] no-copy bg-white' /> </div>
                <div className="z-[5]">
                    <span className="block mb-[4px] leading-[20.8px] text-[#2D2D2D] text-[16px] font-extrabold lg:text-[20px] lg:mb-[8px] lg:leading-[26px] no-copy">{data.name}</span>
                    <p className={`leading-[15.6px] text-[#6C6C6C] text-[12px] ${isOpened ? '' : 'line-clamp-5'} overflow-ellipsis tracking-[-0.03em] lg:line-clamp-none lg:text-[16px] lg:leading-[20.8px] no-copy`}>{data.text}</p>
                    <span onClick={() => { setIsOpened((prev) => !prev) }} className="text-[#2d2d2d] text-[12px]/[15.6px] tracking-[-0.03em] hover:cursor-pointer lg:hidden">{isOpened ? "Скрыть" : "Читать полностью"}</span>
                </div>
            </section>

        </div>
    )
}
