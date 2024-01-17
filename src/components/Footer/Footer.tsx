'use client'
import facebook from "@/public/socialNets/fb.svg"
import { IContacts } from "@/src/service/models"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import arrow from "../../../public/arrow.svg"
import footerBg from "../../../public/footer/footerBg.webp"
import footerImg from "../../../public/footer/footerImage.webp"
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

export default function Footer({ contacts }: IProps) {
    const [isModalUniqueOrderActive, setIsModalUniqueOrderActive] = useState<boolean>(false)
    const [isModalContactUsActive, setIsModalContactUsActive] = useState<boolean>(false)
    const [isModalThanksActive, setIsModalThanksActive] = useState<boolean>(false)
    const [userMail, setUserMail] = useState<string>()

    return (
        <div className="bg-[#2D2D2D] relative">
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

            <Image src={footerBg} alt="footerImg" className="absolute lm:max-ll:left-0 top-0 ll:right-0" />

            <div className="max-w-[1440px] lm:mx-auto h-[569px] overflow-x-clip">
                <div className="flex items-center max-w-[1180px] relative">

                    <div className="text-white max-w-[630px] mt-[40px] lx:max-w-[500px] lx:min-w-[500px] lm:min-w-[630px] lx:pl-[80px] lmx:pl-[100px] lm:pl-[130px]">

                        <div className="w-[183px] h-[59px] flex items-center justify-start mb-[30px] z-[1] relative">
                            <Image src={whiteLogo} className="w-[221px] h-[43px]" alt="logo" />
                        </div>

                        <span className=" block font-medium text-[20px] leading-[25.1px] tracking-[-0.03em] mb-[25px] z-[1] relative">ООО «МИШКАВУД»</span>

                        <div className="flex items-start justify-start gap-[40px] mb-[30px] z-[1] relative">
                            <div className="font-normal text-[14px] leading-[18.2px] tracking-[-0.03em]">
                                <p>354000 <br /> Центральный р-н, <br /> Краснодарский край, <br />Российская Федерация</p>
                                <br />
                                <p>г. Сочи. <br /> Пластунская 4/20</p>
                            </div>

                            <div className="flex flex-col items-start gap-[15px] z-[1] relative">
                                <div className="">
                                    <span className="uppercase font-normal text-[8px] leading-[10.4px] tracking-[-0.03em] block">Телефон</span>
                                    <Link href={"#"} className="underline font-medium text-[16px] leading-[20.8px] tracking-[-0.03em]">8 923 782 49-52</Link>
                                </div>

                                <div className="">
                                    <span className="uppercase font-normal text-[8px] leading-[10.4px] tracking-[-0.03em] block">Почта</span>
                                    <Link href={"#"} className="underline font-medium text-[16px] leading-[20.8px] tracking-[-0.03em]">info@mishkawood.ru</Link>
                                </div>

                                <div className="mt-[16px]">
                                    <p onClick={() => setIsModalContactUsActive(true)} className=" cursor-pointer uppercase underline font-medium text-[10px] leading-[12.55px] tracking-[-0.03em]">Связаться с нами</p>
                                </div>
                            </div>
                        </div>


                        <div className='flex flex-col gap-[10px] mb-[40px] z-[1] relative'>
                            <span className="uppercase font-normal text-[8px] leading-[10.4px] tracking-[-0.03em]">СОЦСЕТИ - @MISHKAWOOD</span>
                            <div className="flex w-full gap-[5px] xs:max-ss:flex-wrap xs:max-ss:justify-center">
                                {contacts[0]?.whatsapp ? <Link href={`https://api.whatsapp.com/send/?phone=${contacts[0]?.whatsapp.slice(0, 1) === "+" ? contacts[0]?.whatsapp.slice(1) : contacts[0]?.whatsapp}`}><Image src={whatsapp} alt="whatsapp" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale-110 hover:grayscale-0" /></Link> : <></>}
                                {contacts[0]?.telegram ? <Link href={contacts[0]?.telegram}><Image src={tg} alt="telegram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale hover:grayscale-0" /></Link> : <></>}
                                {contacts[0]?.facebook ? <Link href={contacts[0]?.facebook}><Image src={facebook} alt="facebook" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale hover:grayscale-0" /></Link> : <></>}
                                {contacts[0]?.viber ? <Link href={contacts[0]?.facebook}><Image src={viber} alt="viber" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale hover:grayscale-0" /></Link> : <></>}
                                {contacts[0]?.vk ? <Link href={contacts[0]?.vk}><Image src={vk} alt="vk" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale-90 hover:grayscale-0" /></Link> : <></>}
                                {contacts[0]?.instagram ? <Link href={contacts[0]?.instagram}><Image src={inst} alt="instagram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all grayscale-90 hover:grayscale-0" /></Link> : <></>}
                            </div>
                        </div>
                        <hr className="bg-[#666666] opacity-30 mb-[20px] z-[1] relative" />

                        <div className="mb-[10px] gap-4 max-w-[343px] z-[1] relative">
                            <Link href={"/policy_privacy"} className="underline font-normal text-[12px] leading-[15.6px] mr-[10px] tracking-[-0.03em]">Политика конфиденциальности</Link>
                            <Link href={"/offer_documents"} className="underline font-normal text-[12px] leading-[15.6px] tracking-[-0.03em]">Публичная оферта</Link>
                            <br />
                            <Link href={"/terms_of_service"} className="underline font-normal text-[12px] leading-[15.6px] tracking-[-0.03em]">Пользовательское соглашение</Link>
                        </div>

                        <span className="font-normal text-[12px] leading-[15.6px] tracking-[-0.03em] z-[1] relative">© ООО «МИШКАВУД» , Все права защищены законом, 2023.</span>
                    </div>

                    <div className=" h-[569px]">
                        <Image src={footerImg} alt="footerImg" className="min-w-[810px] z-0 absolute top-0 -right-[260px]" />

                        <Link href={"/products"}>
                            <div className="z-[1] w-[375px] h-[164px] bg-[#F1F1F1] absolute lx:right-[5%]  lmx:-right-[0%]  lm:-right-[4%] py-[30px] px-[20px] top-[200px] flex flex-col gap-[12px]">
                                <span className="uppercase font-normal text-[16px] leading-[20.8px] tracking-[-0.03em]">Закажите онлайн  <br /></span>
                                <span className="uppercase font-bold text-[28px] leading-[33.6px] tracking-[-0.03em]">Каталог товаров</span>
                                <div className="flex items-center gap-[61px] mt-[6px]">
                                    <span className="uppercase font-normal text-[16px] leading-[20.8px] tracking-[-0.03em]">Выбрать предметы</span>
                                    <Image src={arrow} alt="arrow" />
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>


        </div>
    )
}
