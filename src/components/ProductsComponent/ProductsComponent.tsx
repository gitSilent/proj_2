'use client'
import { ICategories, IProduct } from '@/src/service/models'
import { getProducts } from '@/src/service/requests'
import { useEffect, useState } from 'react'
import "./productsSlider.css"

import 'swiper/css'
import 'swiper/css/pagination'
import BigProductCard from './BigProductCard/BigProductCard'
import SmallProductCard from './SmallProductCard/SmallProductCard'


interface IProps {
    categories: ICategories[],
    products: IProduct[]
}

export default function ProductsComponent({ categories, products }: IProps) {

    const [chosenCategory, setChosenCategory] = useState<ICategories>()
    const [filtredProducts, setFiltredProducts] = useState<IProduct[]>()

    useEffect(() => {
        if (chosenCategory?.id !== 1 && chosenCategory) {
            getProducts({ category_id: chosenCategory?.id })
                .then((res) => {
                    setFiltredProducts(res.data)
                })
        }
        else if (chosenCategory?.id === 1 && chosenCategory) {
            getProducts({})
                .then((res) => {
                    setFiltredProducts(res.data)
                })
        }
    }, [chosenCategory])

    return (
        <div className='mx-auto max-w-[1220px] px-[20px] relative lmg:mt-[105px] mt-[20px] mb-[70px] lmg:mb-[125px] overflow-hidden'>

            <div className="">
                <span className="prevSpan w-[62px] whitespace-nowrap lmg:whitespace-normal mb-[23px]">КАТАЛОГ</span>
                <span className="titleSpan mb-[40px]">НЕСКОЛЬКО способОВ <br /> обрести стиль...</span>

                <div className="flex flex-row gap-[30px] border-b-[1.5px] border-[#E3E3E3] lmx:mb-[60px] mb-[40px] pt-[7px] relative overflow-x-auto hideScroll ">
                    {categories?.map((item, idx) => {
                        return (
                            <div key={idx} onClick={() => { setChosenCategory(item) }} className={`block uppercase text-[#2D2D2D] tracking-[-0.03em]er text-[14px]/[17.57px] font-semibold relative border-b-2 hover:border-[#2D2D2D] transition-all duration-150 pb-[10px] cursor-pointer ${chosenCategory?.id === item.id ? 'border-[#2D2D2D]' : 'border-white'}`}>
                                <span className="block whitespace-nowrap">{item.title}</span>
                                <span className={`${item.products_count > 10 ? "-right-[15px]" : "-right-[9px]"} absolute tracking-[-0.03em]er text-[12px]/[15.06px] font-normal -top-[8px]`}>{item.products_count}</span>
                            </div>
                        )
                    })}
                </div>

                <div className="flex flex-wrap justify-center lmx:grid grid-cols-3 gap-[20px]">


                    {(filtredProducts ? filtredProducts : products).map((item, idx) => {
                        return (
                            (idx + 1) % 5 === 0
                                ? <BigProductCard key={idx} item={item} />
                                : <SmallProductCard key={idx} item={item} />
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

