import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import Modal from "react-modal"

import arrowThinBlack from "@/public/mediumArrow.svg"
import ex from "@/public/modals/ex.svg"
import quotes from "@/public/reviews/Quotes.svg"
import userMishka from "@/public/reviews/userMishka.svg"

import { IReview } from '@/src/service/models'
import "../modalStyles.css"

interface IProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  setIsModalLeaveReviewActive: Dispatch<SetStateAction<boolean>>
  data: IReview

}

export default function ModalReview({ active, setActive, setIsModalLeaveReviewActive, data }: IProps) {

  function handleLeaveReview() {
    setActive(false)
    setIsModalLeaveReviewActive(true)
  }

  return (
    <Modal
      isOpen={active}
      className={"hide-scroll"}
      onRequestClose={() => setActive(false)}
      contentLabel="Review Modal"
      portalClassName='modal-review'
    >

      <div className='modal-review lmg:max-h-[720px] w-full h-full lmg:h-fit overflow-x-hidden overflow-y-auto'>
        <div onClick={() => { setActive(false) }} className={`close-modal fixed  mm:right-[calc(50vw-400px)] flex justify-center items-center z-[100] top-[10px] right-[10px]  lmg:fixed lmg:top-[107px] lmg:right-[calc(50vw-270px-148px)]`} >
          <div className='flex items-center w-[113px] h-[32px] text-white px-[14px] py-[7px] rounded-full bg-[#2D2D2D4D] border-[1px] border-white hover:cursor-pointer hover:bg-[#2d2d2d98]'>
            <span className='block uppercase text-center font-semibold text-[14px]/[17.57px]'>Закрыть</span>
            <Image src={ex} alt='close' className='w-[24px] h-[24px]' />
          </div>
        </div>

        <Image src={quotes} alt="" className='absolute z-[1] max-w-[206px] right-0 top-0 lg:top-0' />
        <div className="big-review-card py-0 max-w-full lg:mb-[20px]">

          <section className="flex gap-[12px] z-[5] ">
            <div className="max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px]"> <Image width="48" height="48" src={data.image ? data.image : userMishka} alt="" className='w-full h-full rounded-bl-[100px] rounded-br-[100px] no-copy bg-white' /> </div>
            <div className="z-[5]">
              <span className="block mb-[4px] leading-[20.8px] text-[#2D2D2D] text-[16px] font-extrabold lg:text-[20px] lg:mb-[8px] lg:leading-[26px] no-copy">{data.name}</span>
              <p className={`leading-[15.6px] text-[#6C6C6C] text-[14px] overflow-ellipsis tracking-[-0.03em] lg:line-clamp-none lg:text-[16px] lg:leading-[20.8px] no-copy`}>{data.text}</p>
            </div>
          </section>
        </div>
        <button onClick={handleLeaveReview} className="z-[50] absolute bottom-0 min-h-[63px] w-full bg-[#2D2D2D] text-white text-[16px]/[19.2px] tracking-[-0.03em] uppercase py-[22px] font-semibold flex items-center justify-center mt-[30px] lmg:relative"> Оставить отзыв  <Image src={arrowThinBlack} alt="product arrow" className="ml-[10px] w-[12px] mt-[3px]" /> </button>

      </div>

    </Modal>
  )
}
