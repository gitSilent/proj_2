'use client'
import quotes from "@/public/reviews/Quotes.svg"
import userMishka from "@/public/reviews/userMishka.svg"
import Image from "next/image"
import { useState } from "react"
import { IReview } from "../service/models"
import ModalLeaveReview from "./Modals/ModalLeaveReview/ModalLeaveReview"
import ModalReview from "./Modals/ModalReview/ModalReview"

interface IProps {
    data: IReview
}
export default function ReviewCard({ data }: IProps) {
    const [isModalReviewActive, setIsModalReviewActive] = useState<boolean>(false)
    const [isModalLeaveReviewActive, setIsModalLeaveReviewActive] = useState<boolean>(false)

    return (
        <>

            {isModalReviewActive
                ? <ModalReview active={isModalReviewActive} setActive={setIsModalReviewActive} setIsModalLeaveReviewActive={setIsModalLeaveReviewActive} data={data} />
                : <></>
            }
            {isModalLeaveReviewActive
                ? <ModalLeaveReview active={isModalLeaveReviewActive} setActive={setIsModalLeaveReviewActive} />
                : <></>
            }
            <div className="review-card cursor-pointer ml-[20px]" onClick={() => { setIsModalReviewActive(true) }}>
                <Image src={quotes} alt="" className='absolute z-[0] max-w-[206px] right-0 top-[-32px] lmg:top-0' />

                <section className="flex gap-[12px] z-[5] ">
                    <div className="relative max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px]"> <Image fill src={data.image ? data.image : userMishka} alt="" className=' w-full h-full rounded-bl-[100px] rounded-br-[100px] no-copy bg-white' /> </div>
                    <div className="z-[5]">
                        <span className="block mb-[4px] leading-[20.8px] text-[#2D2D2D] text-[16px] font-extrabold lmg:text-[20px] lmg:mb-[8px] lmg:leading-[26px] no-copy">{data.name}</span>
                        <p className="leading-[15.6px] text-[#6C6C6C] text-[12px] line-clamp-5 overflow-ellipsis tracking-[-0.03em] lmg:text-[16px] lmg:leading-[20.8px] no-copy">{data.text}</p>
                    </div>
                </section>
            </div>
        </>
    )
}
