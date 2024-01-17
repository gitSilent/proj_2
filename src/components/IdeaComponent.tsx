'use client'
import Image from "next/image";
import arrow from "../../public/arrow.svg"
import ideaImage from "../../public/ideaComponent/ideaBg.webp"
import ideaImageLetters from "../../public/ideaComponent/ideaBgLetters.webp"
import ideaImageLettersMobile from "../../public/ideaComponent/ideaBgLettersMobile.webp"
import Link from "next/link";
import { IContacts } from "../service/models";
import { useState } from "react";
import ModalUniqueOrder from "./Modals/ModalUniqueOrder/ModalUniqueOrder";
import ModalThanks from "./Modals/ModalThanks/ModalThanks";

interface IProps {
    contacts: IContacts[],
}

export default function IdeaComponent({ contacts }: IProps) {
    const [isModalUniqueOrderActive, setIsModalUniqueOrderActive] = useState<boolean>(false)
    const [isModalThanksActive, setIsModalThanksActive] = useState<boolean>(false)
    const [userMail, setUserMail] = useState<string>()


    return (
        <div className="relative overflow-hidden flex flex-col lmg:flex-row items-center px-[20px] bg-[#F1F1F1] xs:max-md:pb-[70px] xs:max-md:pt-[70px] pb-[125px] pt-[125px]">
            {isModalUniqueOrderActive
                ? <ModalUniqueOrder active={isModalUniqueOrderActive} setActive={setIsModalUniqueOrderActive} setActiveThanks={setIsModalThanksActive} setUserMail={setUserMail} />
                : <></>
            }
            {isModalThanksActive
                ? <ModalThanks contacts={contacts} email={userMail ? userMail : ""} active={isModalThanksActive} setActive={setIsModalThanksActive} />
                : <></>
            }

            <Image src={ideaImageLetters} alt="idea bg" className=" hidden absolute lmg:block top-[-300px] bottom-0 my-auto scale-[140%] z-0" />
            <Image src={ideaImageLettersMobile} alt="idea bg" className="absolute lmg:hidden left-[50px] top-[-50px] bottom-0 my-auto scale-[210%] z-0" />

            <div className="mx-auto w-full max-w-[1220px] relative">

                <Image src={ideaImage} alt="idea image" className=" hidden absolute lmg:block -right-[319px] -top-[150px] z-0" />


                <div className="flex xs:flex-col xs:items-start xs:max:md:px-[20px] xs:gap-[20px] md:max-lmg:px-[40px] lmg:px-[20px] lmg:flex-row lmg:items-start lmg:gap-[132px]">

                    <span className="prevSpan md:leading-[25.1px] mt-[9px] w-[62px] whitespace-nowrap lmg:whitespace-normal">Уникальный заказ</span>

                    <div className="flex flex-col xs:gap-[30px] lmg:gap-[40px] items-start z-[1]">

                        <div className="max-w-[500px] relative">
                            <span className="titleSpan hidden lmg:block p-0 m-0">воплощаем <br /> в жизнь идею</span>
                            <span className="titleSpan lmg:hidden ">воплощаем в жизнь <br /> вашу идею</span>
                        </div>

                        <p className="mainText lmg:hidden max-w-[480px] xs:max-md:max-w-[245px] xs:max-md:ml-[45px] z-[1]">Если требуется что-то уникальное, вы всегда можете обратиться к нам, чтобы создать задуманное, а мы, поможем с концепцией, чертежами, или примем их от вас, чтобы создать нечто потрясающее... </p>
                        <p className="hidden lmg:block mainText max-w-[480px] xs:max-md:max-w-[275px] xs:max-md:ml-[45px] z-[1] lmg:ml-[3px]">Если требуется что-то уникальное, вы всегда можете обратиться к нам, чтобы создать задуманное, а мы, поможем с концепцией, чертежами, или примем их от вас, <br /> чтобы создать нечто потрясающее... </p>

                        <div onClick={() => { setIsModalUniqueOrderActive(true) }} className="flex items-center xs:max-md:gap-[90px] gap-[30px] h-[63px] lmg:ml-[3px] hover:cursor-pointer">
                            <span className="postSpan xs:max-md:ml-[45px]">Заказать</span>
                            <Image src={arrow} alt="arrow image" className="" />
                        </div>
                    </div>
                </div>


            </div>
            <Image src={ideaImage} alt="idea image" className="mt-[30px] lmg:hidden scale-[135%] z-0" />

        </div>

    )
}
