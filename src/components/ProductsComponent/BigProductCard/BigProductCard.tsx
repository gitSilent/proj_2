'use client'
import { IProduct } from '@/src/service/models'
import { getColorForm } from '@/src/service/serviceFunctions/getFormWord'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import "../productsSlider.css"
import "../stylesProductCard.css"

import 'swiper/css'
import 'swiper/css/pagination'

interface IProps {
    item: IProduct,
}

export default function BigProductCard({ item }: IProps) {
    const maxPhotosQuantity = 5
    const [selectedPhoto, setSelectedPhoto] = useState<string>()

    return (
        <div className="xs:max-w-[342px] lx:max-w-[780px] cursor-pointer relative z-10 col-span-2 row-span-2">

            <Link href={`/products/${item.id}`}>

                {/*  */}
                <div className='relative'>
                    <Image width={780} height={637} src={selectedPhoto ? selectedPhoto : item.photos[0].photo} alt="swiper img" className="xs:min-w-[342px] xs:max-w-[342px] xs:h-[226px] lx:h-[250px] lx:min-w-[780px] lx:min-h-[637px] object-cover" />
                    {/* Добавление невидимых секций, при наведении на которые осуществляется навигация */}
                    {item.photos.length > 1 && window.innerWidth > 1040
                        ? <div onMouseLeave={() => { setSelectedPhoto(item.photos[0].photo) }} className='product-card__slider flex absolute top-0 left-0 w-full h-full'>
                            {item.photos.slice(0, maxPhotosQuantity).map((itemPhoto, idx) => {
                                return (
                                    <div key={idx} className='wrapper w-full h-full'>
                                        {item.photos.length > maxPhotosQuantity && idx === maxPhotosQuantity - 1
                                            ? <div className={`flex items-center justify-center absolute top-0 left-0 more-photo w-full h-full bg-black/30  ${selectedPhoto == itemPhoto.photo ? "" : "hidden"}`}>
                                                <span className='block text-white text-[20px] text-center'>Ещё <br /> {item.photos.length - maxPhotosQuantity} фото</span>
                                            </div>
                                            : <></>
                                        }

                                        <div onMouseOver={() => {
                                            console.log(itemPhoto.photo)
                                            setSelectedPhoto(itemPhoto.photo)
                                        }} className='hover-cont'>
                                            <div className={` ${selectedPhoto == itemPhoto.photo ? "bg-white" : "bg-white/50"}`}></div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                        : <></>
                    }
                </div>



                <div className="flex flex-row justify-between items-center mb-[10px] border-b border-[#E3E3E3] pb-[10px]">
                    <span className="block mt-[10px] lg:mt-[10px] uppercase text-[#6C6C6C] tracking-[-0.03em] leading-[20.8px] text-[16px] font-semibold xs:max-lx:text-[12px]/[15.06px]">{item.category.title} / {item.subcategory.title}</span>
                    <span className="block mt-[10px] lg:mt-[10px] uppercase text-right text-[#6C6C6C] tracking-[-0.03em] leading-[20.8px] text-[16px] font-semibold xs:max-lx:text-[12px]/[15.06px]">{item.specification.colors.split(',').length + " " + getColorForm(item.specification.colors.split(',').length)}</span>
                </div>
                <span className="block mt-[10px] lg:mt-[10px] uppercase text-[#2D2D2D] tracking-[-0.03em] leading-[35px] text-[28px] font-semibold xs:max-lx:text-[20px]/[22px]">{item.name}</span>
                <div className="relative inline-block">
                    <span className="inline-block mt-[10px] lg:mt-[12px] text-[#2D2D2D] tracking-[-0.03em] leading-[20.8px] text-[16px] font-semibold xs:max-md:text-[12px]/[15px]">{item.cost_with_discount ? item.cost_with_discount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽</span>
                    <span className={`block text-[#6C6C6C] tracking-[-0.03em] text-[10px]/[12.55px] font-semibold line-through absolute ${item.cost > 10000 && item.cost < 100000 ? "-right-[43px]" : item.cost > 1000 && item.cost < 10000 ? "-right-[40px]" : item.cost > 100000 ? "-right-[65px]" : "-right-[30px]"} top-[10px] `}>{item.cost ? item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : ""} ₽</span>
                </div>
            </Link>
        </div>
    )
}






