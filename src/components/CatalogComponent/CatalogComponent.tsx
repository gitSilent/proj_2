'use client'
import { IRecommendedProducts } from "@/src/service/models"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import 'react-toastify/dist/ReactToastify.css'
import { useDraggable } from "react-use-draggable-scroll"
import arrow from "../../../public/arrow.svg"
import one from "../../../public/catalogSliderOne.png"

interface IProps {
    products: IRecommendedProducts[]
}

export default function CatalogComponent({ products }: IProps) {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
    const { events } = useDraggable(ref)

    return (
        <div className="xs:max-md:mb-[70px] xs:max-md:mt-[50px] mb-[125px] mt-[225px] mx-auto relative overflow-x-hidden">
            <div className="">
                <div className="mx-auto max-w-[1220px] w-full px-[20px] mb-[30px] lx:relative">
                    <div className="prevSpan relative lx:absolute -top-[6px] xs:max-sl:pt-[10px]">
                        <span className="block">Каталог</span>
                        <span className="absolute tracking-[-0.03em]  xs:left-[75px] xs:text-[12px]/[15] md:top-[5px] xs:-top-[75px] md:left-[95px] md:text-[16px]/[20.8px]">{products.length}</span>
                    </div>
                </div>

                <div className="flex items-start relative">
                    <div className="flex w-full gap-[110px] justify-end mx-auto">
                        <div className="flex xs:gap-[15px] lx:gap-[20px] w-[100%] overflow-x-scroll hideScroll xs:max-lx:pl-[20px] lmx:max-lp:pl-[225px] lp:max-lm:pl-[298px] lx:pl-[336px] fulhd:pl-[568px] bg-inherit relative z-0" {...events} ref={ref}>
                            {products.map((item, idx) => {
                                return (
                                    <Link key={idx} href={`/products/${item.product.id}`}>
                                        <div className="max-w-[380px] cursor-pointer relative z-10">
                                            <Image src={one} alt="swiper img" className="xs:min-w-[249px] lx:min-w-[380px] mb-[10px]" />
                                            <span className="block mt-[10px] lg:mt-[20px] uppercase text-[#6C6C6C] tracking-[-0.01em] leading-[20.8px] text-[16px] font-semibold xs:max-lx:text-[8px]/[10px]">{item?.product.subcategory.title} / {item?.product.category.title}</span>
                                            <span className="block mt-[5px] lg:mt-[7px] uppercase text-[#2D2D2D] tracking-[-0.01em] leading-[35px] text-[28px] font-semibold xs:max-lx:text-[20px]/[22px]">{item?.product.name}</span>
                                            <span className="block mt-[7px] lg:mt-[10px] text-[#6C6C6C] tracking-[-0.01em] leading-[20.8px] text-[16px] font-semibold xs:max-md:text-[12px]/[15px]">
                                                {item?.product.cost_with_discount
                                                    ? item?.product.cost_with_discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                                                    : item?.product.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽</span>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="max-w-[1220px] w-full lx:px-0 xs:max-md:pl-[60px] mx-auto">
                    <div className="flex xs:flex-col xs:items-start xs:max-md:px-[20px] xs:gap-[20px] md:max-lmg:px-[40px] lmg:flex-row lmg:items-start lmg:gap-[118px] lmg:px-[20px]">
                        <div className="w-[85px]"></div>
                        <Link href={"/products"}>
                            <div className="flex items-center md:mt-[60px] xs:max-md:gap-[26px] gap-[30px] h-[63px]">
                                <span className="postSpan">Больше товаров</span>
                                <Image src={arrow} alt="arrow image" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
