'use client'
import ex from "@/public/modals/ex.svg"
import bg_span from "@/public/modals/modalOrder/bg_span.svg"
import facebook from "@/public/socialNets/fb.svg"
import inst from "@/public/socialNets/inst_45x45.svg"
import tg from "@/public/socialNets/tg_45x45.svg"
import viber from "@/public/socialNets/viber_45x45.svg"
import vk from "@/public/socialNets/vk_45x45.svg"
import whatsapp from "@/public/socialNets/whatsapp_45x45.svg"
import { closeSvg } from '@/src/components/Notifications/CloseSvg'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect } from 'react'
import Modal from "react-modal"


import { IContacts } from '@/src/service/models'
import Link from 'next/link'
import { toast } from 'react-toastify'
import CompleteNotification from '../../Notifications/CompleteNotification'
import "../modalStyles.css"

interface IProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  email: string,
  contacts: IContacts[]
}

export default function ModalThanks({ active, setActive, email, contacts }: IProps) {

  useEffect(() => {
    email && toast(<CompleteNotification />, { closeButton: closeSvg })
  }, [email])

  return (

    <Modal
      isOpen={active}
      className={"order-modal hide-scroll"}
      onRequestClose={() => setActive(false)}
      contentLabel="Order Modal"
    >
      <div className='absolute left-0 right-0 xs:max-lg:top-0 xs:max-lg:bottom-0 lg:top-[200px] m-auto bg-[#2D2D2D] max-w-[610px] px-[20px] w-full h-[100%] lg:max-h-[390px] lg:h-fit lg:px-[40px] lg:pt-[40px] lg:pb-[60px] overflow-hidden'>

        <div onClick={() => { setActive(false) }} className={`close-modal fixed flex justify-center items-center z-[100] top-[10px] right-[10px] md:top-[60px] md:right-[calc(50vw-380px)] mm:right-[calc(50vw-400px)] lg:fixed lg:top-[200px] lg:right-[calc(50vw-290px-148px)]`} >
          <div className='flex items-center w-[113px] h-[32px] text-white px-[14px] py-[7px] rounded-full bg-[#2D2D2D4D] border-[1px] border-white hover:cursor-pointer hover:bg-[#2d2d2d98]'>
            <span className='block uppercase text-center font-semibold text-[14px]/[17.57px]'>Закрыть</span>
            <Image src={ex} alt='close' className='w-[24px] h-[24px]' />
          </div>
        </div>

        <Image src={bg_span} alt='logo' className='absolute h-full w-full object-cover z-[0] lg:scale-125' />

        <section className='flex justify-center items-center h-[100vh] lg:h-fit'>
          <div className='relative z-[5] flex flex-col'>
            <h3 className='uppercase font-semibold tracking-[-0.03em] text-[36px]/[43.2px] lg:text-[58px]/[69.6px] text-white text-center'> Спасибо! </h3>

            <p className='paragraphText text-center text-[#E3E3E3] mt-[10px]'>Письмо с информацией о Вашем заказе <br className='md:hidden' /> уже отправлено на указанную почту: <br className='md:hidden' /> <a href={`mailto:${email}`} className='underline whitespace-nowrap'>{email}</a></p>

            <p className='paragraphText text-center text-[#E3E3E3] mt-[10px]'>Наш менеджер свяжется с Вами <br className='md:hidden' /> в ближайшее время, благодарим за заказ!</p>

            <span className='block text-[12px]/[15.6px] tracking-[-0.03em] text-[#787878] text-center my-[10px]'>Наши соцсети и мессенджеры:</span>

            <div className="flex w-full gap-[5px] justify-center xs:max-ss:flex-wrap">
              {contacts[0]?.whatsapp ? <Link href={`https://api.whatsapp.com/send/?phone=${contacts[0]?.whatsapp.slice(0, 1) === "+" ? contacts[0]?.whatsapp.slice(1) : contacts[0]?.whatsapp}`}><Image src={whatsapp} alt="whatsapp" className="w-[48px] h-[48px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
              {contacts[0]?.vk ? <Link href={contacts[0]?.vk}><Image src={vk} alt="vk" className="w-[48px] h-[48px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
              {contacts[0]?.instagram ? <Link href={contacts[0]?.instagram}><Image src={inst} alt="instagram" className="w-[48px] h-[48px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
              {contacts[0]?.telegram ? <Link href={contacts[0]?.telegram}><Image src={tg} alt="telegram" className="w-[48px] h-[48px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
              {contacts[0]?.facebook ? <Link href={contacts[0]?.facebook}><Image src={facebook} alt="facebook" className="w-[48px] h-[48px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
              {contacts[0]?.viber ? <Link href={contacts[0]?.facebook}><Image src={viber} alt="viber" className="w-[48px] h-[48px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
            </div>
          </div>
        </section>

      </div>

    </Modal>

  )
}
