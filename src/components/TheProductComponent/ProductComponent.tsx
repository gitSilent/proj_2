'use client'
import mediumArrow from "@/public/mediumArrow.svg"
import { IContacts, IProduct } from "@/src/service/models"
import Image from "next/image"
import { useState } from "react"
import ImageMagnifier from "../Magnifier/Magnifier"
import ModalOrder from "../Modals/ModalOrder/ModalOrder"
import ModalThanks from "../Modals/ModalThanks/ModalThanks"


interface IProps {
    data: IProduct,
    contacts: IContacts[]
}

export default function ProductComponent(data: IProps) {

    const [chooseImage, setChooseImage] = useState<number>(0)

    const [isModalOrderActive, setIsModalOrderActive] = useState<boolean>(false)

    const [isModalThanksActive, setIsModalThanksActive] = useState<boolean>(false)
    const [userMail, setUserMail] = useState<string>()


    return (
        <div className='mx-auto max-w-[1220px] md:px-[20px] relative lmg:mt-[125px] xs:max-sl:mt-[0px] mt-[20px] mb-[70px] overflow-hidden'>


            <ModalOrder orderData={data.data} active={isModalOrderActive} setActive={setIsModalOrderActive} setActiveThanks={setIsModalThanksActive} setUserMail={setUserMail} />
            {/* {window.innerWidth > 1124 
                ? <ModalDiscount active={isModalOrderActive} setActive={setIsModalOrderActive} setActiveThanks={setIsModalThanksActive} setUserMail={setUserMail} />
                : <></>
            } */}
            {/* <ModalUniqueOrder orderData={data.data} active={isModalOrderActive} setActive={setIsModalOrderActive} setActiveThanks={setIsModalThanksActive} setUserMail={setUserMail} /> */}
            <ModalThanks contacts={data.contacts} email={userMail ? userMail : ""} active={isModalThanksActive} setActive={setIsModalThanksActive} />

            <div className="flex justify-between items-start xs:max-lx:flex-col xs:max-lx:items-center gap-[25px] lmg:gap-[120px]">

                <div className="w-full sl:max-w-[580px] object-cover">
                    <ImageMagnifier imgUrl={data.data.photos[chooseImage].photo} />
                    {/* <GlassMagnifier
                        imageSrc={data.data.photos[chooseImage].photo}
                        imageAlt="Example"
                        largeImageSrc={data.data.photos[chooseImage].photo}
                        /> */}
                    <div className="flex overflow-y-hidden items-center sl:flex-wrap xs:max-sl:flex-row xs:max-sl:overflow-x-scroll xs:max-sl:px-[20px] hideScroll mt-[20px] gap-[20px]">
                        {data?.data?.photos?.map((item, idx) => {
                            return (
                                <Image width={130} height={130} onClick={() => setChooseImage(idx)} key={idx} src={item.photo} alt="product image" className={`min-w-[130px] min-h-[130px] max-w-[130px] max-h-[130px] object-cover cursor-pointer transition-all duration-150 ${chooseImage === idx ? "border-[2px] border-solid border-black" : "border-[2px] border-solid border-[#6C6C6C]"}`} />
                            )
                        })}
                    </div>
                </div>

                <div className="w-full">
                    <div className=" sl:max-lx:max-w-[600px] max-w-[480px]">
                        <span className="productSpan mb-[10px]  xs:max-md:px-[20px]">{data.data.category.title}</span>
                        <span className="productTitle mb-[10px]  xs:max-md:px-[20px]">{data.data.name}</span>

                        <div className="relative inline-block lx:mb-[30px]  xs:max-md:px-[20px] ">
                            <span className="inline-block text-[#2D2D2D] tracking-[-0.03em] text-[16px]/[20.8px] font-semibold">{data.data.cost_with_discount ? data.data.cost_with_discount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : data.data.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽</span>
                            <span className={`block text-[#6C6C6C] tracking-[-0.03em] text-[10px]/[12.55px] font-semibold line-through absolute top-0  ${data.data.cost > 10000 && data.data.cost < 100000 ? "xs:max-md:-right-[23px] md:-right-[43px]" : data.data.cost > 1000 && data.data.cost < 10000 ? "xs:max-md:-right-[18px] md:-right-[35px]" : data.data.cost > 100000 ? "xs:max-md:-right-[42px] md:-right-[63px]" : "xs:max-md:-right-[12px] md:-right-[30px]"}`}>{data.data.cost ? data.data.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : ""} ₽</span>
                        </div>

                        <div className="xs:max-lx:hidden ">
                            <button onClick={() => { setIsModalOrderActive(true) }} className=" w-full h-[63px] text-[#f8f8f8] text-[16px]/[19.2px] tracking-[-0.03em] font-semibold bg-[#2D2D2D] flex items-center justify-center gap-[10px]">
                                Оставить заявку
                                <Image src={mediumArrow} alt="product arrow" className="w-[12px] " />
                            </button>
                        </div>


                        <section className=" xs:max-md:px-[20px]">
                            <span className="block text-[16px]/[20.08px] text-[##2D2D2D] uppercase mt-[40px] xs:max-md:mt-[30px] mb-[10px]">Характеристики</span>

                            {data.data.specification.colors
                                ? <div className="border-b-[1px] border-[#E3E3E3] pb-[20px] mb-[20px]">
                                    <span className="productSpan">Цвета</span>
                                    <span className="specText mt-[5px]">{data.data.specification.colors}</span>
                                </div>
                                : <></>
                            }

                            {data.data.specification.sizes
                                ? <div className="border-b-[1px] border-[#E3E3E3] pb-[20px] mb-[20px]">
                                    <span className="productSpan">Размеры</span>
                                    <span className="specText mt-[5px]">{data.data.specification.sizes}</span>
                                </div>
                                : <></>
                            }

                            {data.data.specification.weight
                                ? <div className="border-b-[1px] border-[#E3E3E3] pb-[20px] mb-[20px]">
                                    <span className="productSpan">Вес</span>
                                    <span className="specText mt-[5px]">{data.data.specification.weight} кг</span>
                                </div>
                                : <></>
                            }

                            {data.data.specification.materials
                                ? <div className="border-b-[1px] border-[#E3E3E3] pb-[20px] mb-[20px]">
                                    <span className="productSpan">Материалы</span>
                                    <span className="specText mt-[5px]">{data.data.specification.materials}</span>
                                </div>
                                : <></>
                            }

                            {data.data.specification.trim
                                ? <div className="border-b-[1px] border-[#E3E3E3] pb-[20px] mb-[20px]">
                                    <span className="productSpan">Отделка</span>
                                    <span className="specText mt-[5px]">{data.data.specification.trim}</span>
                                </div>
                                : <></>
                            }

                        </section>
                    </div>

                    <section className="sl:hidden flex items-center justify-center overflow-hidden">
                        <div className="grid justify-items-center gap-[15px]">
                            {data?.data?.photos?.map((item, idx) => {
                                return idx < 3 ? <img key={idx} src={item.photo} alt="product image" className={`${idx == 1 ? " min-w-[200px] min-h-[282px] max-w-[200px] max-h-[282px]" : idx == 2 ? "col-start-3 min-w-[140px] min-h-[140px] max-w-[140px] max-h-[140px] place-self-end" : "min-w-[140px] min-h-[140px] max-w-[140px] max-h-[140px] place-start-end"}  object-cover `} /> : <></>
                            })}
                        </div>
                    </section>

                    <div className=" sl:max-lx:max-w-[600px] max-w-[480px]">

                        <section className="mt-[30px]">
                            <h3 className="productTitle  xs:max-md:px-[20px]"> {data.data.title} </h3>
                            <p className="paragraphText mt-[30px] xs:max-lx:mb-[30px] mb-[40px] xs:max-md:px-[20px]">{data.data.description}</p>

                            <div className="xs:max-lx:hidden">
                                <img src={data?.data?.photos[0].photo} alt="" />
                            </div>

                            <div className="lx:hidden flex items-center sl:flex-wrap xs:max-sl:flex-row xs:max-sl:overflow-x-scroll xs:max-sl:px-[20px] hideScroll mt-[20px] gap-[20px]">
                                {data?.data?.photos?.map((item, idx) => {
                                    return (
                                        <img key={idx} src={item.photo} alt="product image" className="min-w-[249px] min-h-[160px] max-w-[249px] max-h-[160px] object-cover" />
                                    )
                                })}
                            </div>
                            <p className="paragraphText xs:max-lx:mt-[30px] mt-[40px] xs:max-md:px-[20px]">{data.data.description}</p>
                        </section>


                        <div className="lx:hidden mt-[40px]">
                            <button onClick={() => { setIsModalOrderActive(true) }} className="w-full h-[63px] md:max-w-[270px] text-[#f8f8f8] text-[16px]/[19.2px] tracking-[-0.03em] font-semibold bg-[#2D2D2D] flex items-center justify-center gap-[10px]">
                                Оставить заявку
                                <Image src={mediumArrow} alt="product arrow" className="w-[12px] " />
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
