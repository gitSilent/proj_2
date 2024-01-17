'use client'
import React, { useState } from 'react'
import Image from "next/image"
import quotes from "@/public/reviews/Quotes.svg"
import arrowThinBlack from "@/public/arrowThinBlack.svg"
import { IReview } from '@/src/service/models'
import BigReviewCard from './BigReviewCard'
import ModalLeaveReview from '../Modals/ModalLeaveReview/ModalLeaveReview'

interface IProps {
    reviews: IReview[]
}

export default function ReviewsPageComponent({ reviews }: IProps) {
    const [isModalLeaveReviewActive, setIsModalLeaveReviewActive] = useState<boolean>(false)


    return (
        <>
        <div className='mx-auto max-w-[1220px] px-[20px] relative pt-[20px] lg:pt-[50px] mb-[70px] lmg:mb-[125px] overflow-hidden'>
             {isModalLeaveReviewActive 
                ? <ModalLeaveReview active={isModalLeaveReviewActive} setActive={setIsModalLeaveReviewActive} />
                : <></>
            }

            <span className="prevSpan w-[62px] whitespace-nowrap lmg:whitespace-normal mb-[23px]">ОТЗЫВЫ</span>
            <span className="titleSpan mb-[40px]">Что говорят о нас клиенты</span>

            <div className='flex flex-col gap-[15px] lg:block lg:columns-2 lg:gap-x-[20px]'>
                {reviews.map((item, idx) => {
                    return (
                        <BigReviewCard key={idx} data={item}/>
                    )

                })}
            </div>
            

        </div>
            <button onClick={()=>{setIsModalLeaveReviewActive(true)}} className="z-[50] fixed bottom-0 min-h-[63px] w-full bg-[#2D2D2D] text-white text-[16px]/[19.2px] tracking-[-0.03em] uppercase py-[22px] font-semibold flex items-center justify-center mt-[30px] lmg:hidden"> Оставить отзыв  <Image src={arrowThinBlack} alt="product arrow" className="ml-[10px] w-[12px] mt-[3px]" /> </button>
        </>
    )
}
