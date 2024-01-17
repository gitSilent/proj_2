import facebook from "@/public/socialNets/fb.svg"
import { IContacts } from '@/src/service/models'
import Image from "next/image"
import Link from 'next/link'
import { useState } from "react"
import bg from "../../../public/header/bg.webp"
import inst from "../../../public/socialNets/inst_45x45.svg"
import tg from "../../../public/socialNets/tg_45x45.svg"
import viber from "../../../public/socialNets/viber_45x45.svg"
import vk from "../../../public/socialNets/vk_45x45.svg"
import whatsapp from "../../../public/socialNets/whatsapp_45x45.svg"
import whiteLogo from "../../../public/whiteLogo.svg"
import ModalThanks from '../Modals/ModalThanks/ModalThanks'
import ModalUniqueOrder from '../Modals/ModalUniqueOrder/ModalUniqueOrder'

interface IProps {
  isSidebarOpened: boolean
  setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>
  contacts: IContacts[]
}

export default function SideMenu({ isSidebarOpened, setIsSidebarOpened, contacts }: IProps) {

  const activeLinkStyles = "block text-[24px] font-medium text-[#00BA61] pl-[20px] hover:text-[#e3e3e3] hover:cursor-pointer duration-100"
  const notActiveLinkStyles = "block text-[20px] uppercase font-medium text-white hover:text-[#e3e3e3] hover:cursor-pointer duration-100"

  const [isModalUniqueOrderActive, setIsModalUniqueOrderActive] = useState<boolean>(false)
  const [isModalThanksActive, setIsModalThanksActive] = useState<boolean>(false)
  const [userMail, setUserMail] = useState<string>()

  return (
    <div className={`overflow-x-hidden tracking-[-0.03em] z-[50] fixed flex flex-col top-0 left-0 h-full w-[100vw] bg-[#1E1E1E] pb-[30px] ease-in-out duration-300 ${isSidebarOpened ? "translate-x-0 " : "-translate-x-full"}`}>
      {isModalUniqueOrderActive
        ? <ModalUniqueOrder active={isModalUniqueOrderActive} setActive={setIsModalUniqueOrderActive} setActiveThanks={setIsModalThanksActive} setUserMail={setUserMail} />
        : <></>
      }
      {isModalThanksActive
        ? <ModalThanks contacts={contacts} email={userMail ? userMail : ""} active={isModalThanksActive} setActive={setIsModalThanksActive} />
        : <></>
      }

      <div className='absolute w-[100vw] h-[100vh] z-[-1]'>
        <Image src={bg} className="w-[100%] h-[100%] opacity-20" alt="logo" />
      </div>

      <div>
        <div className="flex justify-between items-center px-[20px] py-[17.5px]">
          <Image src={whiteLogo} className="w-[99px] h-[19px]" alt="logo" />
          <svg onClick={() => { setIsSidebarOpened(false) }} width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.0498 11.9497L11.9493 2.05021" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M2.0498 2.05029L11.9493 11.9498" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-[20px] mt-[50px] leading-[25.1px]">
          <Link onClick={() => { setIsSidebarOpened(false) }} href={"/about"} className={notActiveLinkStyles}>О нас</Link>
          <Link onClick={() => { setIsSidebarOpened(false) }} href={"/products"} className={notActiveLinkStyles}>Каталог</Link>
          <Link onClick={() => { setIsSidebarOpened(false) }} href={"/reviews"} className={notActiveLinkStyles}>Отзывы</Link>
          <span onClick={() => { setIsSidebarOpened(false); setIsModalUniqueOrderActive(true) }} className={notActiveLinkStyles}>Уникальный заказ</span>
          <Link onClick={() => { setIsSidebarOpened(false) }} href={"/#question_block"} className={notActiveLinkStyles}>FAQ</Link>
          <Link onClick={() => { setIsSidebarOpened(false) }} href={"/contacts"} className={notActiveLinkStyles}>Контакты</Link>
        </div>
      </div>

      <div className='mx-auto'>
        <span className='block text-[16px] text-white font-medium mb-[10px] mt-[91px] px-[20px]'>ООО «МИШКАВУД»</span>
        <div className="flex gap-[10px] px-[20px] text-white">
          <div className='flex flex-col max-w-[163px] w-full'>
            <span className='text-[12px] mb-[18px] font-normal leading-[15.6px]'>г. Сочи <br /> пер. Водолазов 69</span>
            <Link onClick={() => { setIsSidebarOpened(false) }} href={"/contacts"} className="uppercase underline text-[10px] mb-[22px]">Связаться с нами</Link>
            <span className="uppercase text-[8px] mb-[3px] font-normal">Телефон</span>
            <a href='tel:89237824952' className="uppercase text-[16px] font-medium underline">8 923 782 49-52</a>
          </div>

          <div className='flex flex-col max-w-[163px] w-full'>
            <p className="font-[400] leading-[15.6px] text-[12px] mb-[20px]">354000 <br />
              Центральный р-н, <br />
              Краснодарский край, <br />
              Российская Федерация</p>
            <span className="uppercase text-[8px] mb-[3px] font-normal">Почта</span>
            <a href='mailto:info@mishkawood.ru' className=" text-[16px] font-medium underline">info@mishkawood.ru</a>
          </div>
        </div>

        <div className='mt-[20px] px-[20px] text-white'>
          <span className="block uppercase text-[8px] mb-[10px] font-normal">СОЦСЕТИ - @MISHKAWOOD</span>
          <div className="flex w-full gap-[5px]">
            {contacts[0]?.whatsapp ? <Link href={`https://api.whatsapp.com/send/?phone=${contacts[0]?.whatsapp.slice(0, 1) === "+" ? contacts[0]?.whatsapp.slice(1) : contacts[0]?.whatsapp}`}><Image src={whatsapp} alt="whatsapp" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
            {contacts[0]?.vk ? <Link href={contacts[0]?.vk}><Image src={vk} alt="vk" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
            {contacts[0]?.instagram ? <Link href={contacts[0]?.instagram}><Image src={inst} alt="instagram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
            {contacts[0]?.telegram ? <Link href={contacts[0]?.telegram}><Image src={tg} alt="telegram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
            {contacts[0]?.facebook ? <Link href={contacts[0]?.facebook}><Image src={facebook} alt="facebook" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
            {contacts[0]?.viber ? <Link href={contacts[0]?.facebook}><Image src={viber} alt="viber" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
          </div>
        </div>

        <hr className='my-[30px] mx-[20px] max-w-[335px] w-full  border-[#666666]' />

        <Link href={"/"} className='block px-[20px] underline text-[#E3E3E3] text-[12px] mb-[10px]'>Политика конфиденциальности</Link>
        <span className='block px-[20px] text-[#E3E3E3] text-[12px]'>© ООО «МИШКАВУД» , Все права защищены законом, 2023.</span>

      </div>
    </div>
  )
}
