'use client'
import askQuestion from "@/public/questionButton/ask-question.svg"
import ex from "@/public/questionButton/ex.svg"
import helpCircle from "@/public/questionButton/help-circle.svg"
import facebook from "@/public/socialNets/fb.svg"
import inst from "@/public/socialNets/inst_45x45.svg"
import tg from "@/public/socialNets/tg_45x45.svg"
import viber from "@/public/socialNets/viber_45x45.svg"
import vk from "@/public/socialNets/vk_45x45.svg"
import whatsapp from "@/public/socialNets/whatsapp_45x45.svg"
import Image from "next/image"
import { useState } from "react"
import { CSSTransition } from "react-transition-group"

import { IContacts } from "@/src/service/models"
import Link from "next/link"
import "./questionBtnStyles.css"

interface IProps {
    contacts: IContacts[]
}

export default function QuestionButton({ contacts }: IProps) {

    const [isHintHidden, setIsHintHidden] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="fixed bottom-[20px] right-[20px] question-btn z-50">
            {isHintHidden
                ?
                <></>
                :
                <div className="absolute right-[60px] top-[10px] w-[128px]">
                    <Image src={askQuestion} alt="" className="w-[128px]" />
                </div>
            }
            {/* Render the floating action button */}
            <button className="active-btn flex justify-center items-center w-[56px] h-[56px] bg-[#2D2D2D] text-white rounded-full shadow-lg focus:outline-none" onClick={toggleMenu}>
                {isOpen
                    ?
                    <Image src={ex} alt="" className="w-[19px] h-[19px] duration-100" />
                    :
                    <Image src={helpCircle} alt="" className="w-[32px] h-[32px] duration-100" />}
            </button>

            {/* Render the hidden menu */}
            <CSSTransition in={isOpen} timeout={300} classNames="slide-up" unmountOnExit>
                <div className="absolute w-[42px] flex flex-col gap-[5px] list bottom-[71px] right-[6.6px]">
                    {contacts[0]?.whatsapp ? <Link href={`https://api.whatsapp.com/send/?phone=${contacts[0]?.whatsapp.slice(0, 1) === "+" ? contacts[0]?.whatsapp.slice(1) : contacts[0]?.whatsapp}`}><Image src={whatsapp} alt="whatsapp" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
                    {contacts[0]?.vk ? <Link href={contacts[0]?.vk}><Image src={vk} alt="vk" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
                    {contacts[0]?.instagram ? <Link href={contacts[0]?.instagram}><Image src={inst} alt="instagram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
                    {contacts[0]?.telegram ? <Link href={contacts[0]?.telegram}><Image src={tg} alt="telegram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
                    {contacts[0]?.facebook ? <Link href={contacts[0]?.facebook}><Image src={facebook} alt="facebook" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
                    {contacts[0]?.viber ? <Link href={contacts[0]?.facebook}><Image src={viber} alt="viber" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></Link> : <></>}
                </div>
            </CSSTransition>

            {/* Add Tailwind CSS animations */}
            <style></style>
        </div>
    )
};

