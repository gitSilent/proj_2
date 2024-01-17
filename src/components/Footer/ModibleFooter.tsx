'use client'
import facebook from "@/public/socialNets/fb.svg"
import { IContacts } from "@/src/service/models"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import arrow from "../../../public/arrow.svg"
import footerImg from "../../../public/footer/footerImage.webp"
import footerBg from "../../../public/footer/mobileFooterBg.webp"
import inst from "../../../public/socialNets/inst_45x45.svg"
import tg from "../../../public/socialNets/tg_45x45.svg"
import viber from "../../../public/socialNets/viber_45x45.svg"
import vk from "../../../public/socialNets/vk_45x45.svg"
import whatsapp from "../../../public/socialNets/whatsapp_45x45.svg"
import whiteLogo from "../../../public/whiteLogo.svg"
import ModalContactUs from '../Modals/ModalContactUs/ModalContactUs'
import ModalThanks from "../Modals/ModalThanks/ModalThanks"
import ModalUniqueOrder from "../Modals/ModalUniqueOrder/ModalUniqueOrder"

interface IProps {
    contacts: IContacts[]
}

export default function MobileFooter({ contacts }: IProps) {
    const [isModalUniqueOrderActive, setIsModalUniqueOrderActive] = useState<boolean>(false)
    const [isModalContactUsActive, setIsModalContactUsActive] = useState<boolean>(false)
    const [isModalThanksActive, setIsModalThanksActive] = useState<boolean>(false)
    const [userMail, setUserMail] = useState<string>()

    return (
        <div className="bg-[#2D2D2D] text-white">
            {isModalUniqueOrderActive
                ? <ModalUniqueOrder active={isModalUniqueOrderActive} setActive={setIsModalUniqueOrderActive} setActiveThanks={setIsModalThanksActive} setUserMail={setUserMail} />
                : <></>
            }
            {isModalThanksActive
                ? <ModalThanks contacts={contacts} email={userMail ? userMail : ""} active={isModalThanksActive} setActive={setIsModalThanksActive} />
                : <></>
            }
            {isModalContactUsActive ? (
                <ModalContactUs
                    active={isModalContactUsActive}
                    setActive={setIsModalContactUsActive}
                    setActiveThanks={setIsModalThanksActive}
                    setUserMail={setUserMail}
                />
            ) : (
                <></>
            )}
            <div className="">

                <Image src={footerImg} alt="footerImg" className="" />
                <div className="">
                    <Link href={"/products"}>
                        <div className="z-[1] w-full h-[164px] bg-[#F1F1F1] text-[#2D2D2D] py-[30px] px-[20px] flex flex-col items-start gap-[12px]">
                            <span className="uppercase font-normal text-[16px] leading-[20.8px] tracking-[-0.03em]">Закажите онлайн  <br /></span>
                            <span className="uppercase font-bold text-[28px] leading-[33.6px] tracking-[-0.03em]">Каталог товаров</span>
                            <div className="flex items-center gap-[61px] mt-[6px]">
                                <span className="uppercase font-normal text-[16px] leading-[20.8px] tracking-[-0.03em]">Выбрать предметы</span>
                                <Image src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </Link>

                </div>

                <div className="pt-[50px] pb-[30px] px-[20px] max-w-[375px] relative">

                    <Image src={footerBg} alt="footerImg" className="absolute left-0 top-0 sx:left-[10%]" />

                    <div className="w-[183px] h-[59px] flex items-center justify-start mb-[30px] z-[1] relative">
                        <Image src={whiteLogo} className="w-[221px] h-[43px]" alt="logo" />
                    </div>

                    <div className="flex flex-row items-start gap-[53px] z-[1] relative mb-[20px]">
                        <div className="">
                            <span className="uppercase font-normal text-[8px] leading-[10.4px] tracking-[-0.03em] block">Телефон</span>
                            <Link href={"#"} className="underline font-medium text-[16px] leading-[20.8px] tracking-[-0.03em]">8 923 782 49-52</Link>
                        </div>
                        <div className="">
                            <span className="uppercase font-normal text-[8px] leading-[10.4px] tracking-[-0.03em] block">Почта</span>
                            <Link href={"#"} className="underline font-medium text-[16px] leading-[20.8px] tracking-[-0.03em]">info@mishkawood.ru</Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[10px] mb-[30px] z-[1] relative'>
                        <span className="uppercase font-normal text-[8px] leading-[10.4px] mb-[10px] tracking-[-0.03em]">СОЦСЕТИ - @MISHKAWOOD</span>
                        <div className="flex w-full gap-[5px] xs:max-ss:flex-wrap xs:max-ss:justify-center">
                            {contacts[0]?.whatsapp ? <Link href={`https://api.whatsapp.com/send/?phone=${contacts[0]?.whatsapp.slice(0, 1) === "+" ? contacts[0]?.whatsapp.slice(1) : contacts[0]?.whatsapp}`}><Image src={whatsapp} alt="whatsapp" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale-110 hover:grayscale-0" /></Link> : <></>}
                            {contacts[0]?.telegram ? <Link href={contacts[0]?.telegram}><Image src={tg} alt="telegram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale hover:grayscale-0" /></Link> : <></>}
                            {contacts[0]?.facebook ? <Link href={contacts[0]?.facebook}><Image src={facebook} alt="facebook" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale hover:grayscale-0" /></Link> : <></>}
                            {contacts[0]?.viber ? <Link href={contacts[0]?.facebook}><Image src={viber} alt="viber" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale hover:grayscale-0" /></Link> : <></>}
                            {contacts[0]?.vk ? <Link href={contacts[0]?.vk}><Image src={vk} alt="vk" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale-90 hover:grayscale-0" /></Link> : <></>}
                            {contacts[0]?.instagram ? <Link href={contacts[0]?.instagram}><Image src={inst} alt="instagram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale-90 hover:grayscale-0" /></Link> : <></>}
                        </div>
                    </div>

                    <hr className="bg-[#666666] opacity-30 mb-[40px] mt-[30px] z-[1] relative" />

                    <div className="flex flex-row justify-between items-start gap-[71px] z-[1]">

                        <div className="flex flex-col items-start gap-[20px] z-[1]">
                            <Link href={"/"} className="block text-[16px] tracking-[-0.03em] leading-[20.8px] uppercase font-medium text-white hover:text-[#e3e3e3] hover:cursor-pointer duration-100">Главная</Link>
                            <Link href={"/about"} className="block text-[16px] tracking-[-0.03em] leading-[20.8px] uppercase font-medium text-white hover:text-[#e3e3e3] hover:cursor-pointer duration-100">О нас</Link>
                            <Link href={"/tutors"} className="block text-[16px] tracking-[-0.03em] leading-[20.8px] uppercase font-medium text-white hover:text-[#e3e3e3] hover:cursor-pointer duration-100">Каталог</Link>
                            <Link href={"/#price_block"} className="block text-[16px] tracking-[-0.03em] leading-[20.8px] uppercase font-medium text-white hover:text-[#e3e3e3] hover:cursor-pointer duration-100">Отзывы</Link>
                            <span onClick={() => { setIsModalUniqueOrderActive(true) }} className="block text-[16px] tracking-[-0.03em] leading-[20.8px] uppercase font-medium text-white hover:text-[#e3e3e3] hover:cursor-pointer duration-100">Свой заказ</span>
                            <Link href={"/#question_block"} className="block text-[16px] tracking-[-0.03em] leading-[20.8px] uppercase font-medium text-white hover:text-[#e3e3e3] hover:cursor-pointer duration-100">FAQ</Link>
                        </div>

                        <div className="">
                            <span className=" block font-medium text-[16px] leading-[20.8px] tracking-[-0.03em] mb-[25px] z-[1] relative">ООО «МИШКАВУД»</span>
                            <div className="flex items-start justify-start gap-[40px] mb-[30px] z-[1] relative">
                                <div className="font-normal text-[12px] leading-[15.6px] tracking-[-0.03em]">
                                    <p>354000 <br /> Центральный р-н, <br /> Краснодарский край, <br />Российская Федерация</p>
                                    <br />
                                    <p>г. Сочи. <br /> Пластунская 4/20</p>
                                    <p onClick={() => setIsModalContactUsActive(true)} className="block mt-[15px] cursor-pointer uppercase underline font-medium text-[10px] leading-[12.55px] tracking-[-0.03em]">Связаться с нами</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <hr className="bg-[#666666] opacity-30 mt-[30px] z-[1] relative" />

                    <div className="mt-[30px]">
                        <div className=" gap-4 z-[1] relative">
                            <Link href={"/policy_privacy"} className="underline font-normal text-[12px] leading-[15.6px] mr-[10px] tracking-[-0.03em]">Политика конфиденциальности</Link>
                            <Link href={"/offer_documents"} className="underline font-normal text-[12px] leading-[15.6px] tracking-[-0.03em]">Публичная оферта</Link>
                            <br />
                            <Link href={"/terms_of_service"} className="underline font-normal text-[12px] leading-[15.6px] tracking-[-0.03em]">Пользовательское соглашение</Link>
                        </div>
                        <span className="block font-normal text-[12px] leading-[15.6px] tracking-[-0.03em] z-[1] relative pt-[10px]">© ООО «МИШКАВУД» , Все права защищены законом, 2023.</span>
                    </div>

                </div>

            </div>
        </div>
    )
}
