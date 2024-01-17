'use client'
// import required modules
import bgOpacity from "@/public/OpacityBg.png"
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import SwiperCore from 'swiper'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import arrow from "@/public/smallArrow.svg"
import { ISlider } from '@/src/service/models'
import Link from 'next/link'
import './sliderStyles.css'

SwiperCore.use([EffectFade, Pagination, Navigation])

interface IProps {
  images: ISlider[]
}

export default function SliderMainPage({ images }: IProps) {
  const activeBulletRef = useRef<HTMLDivElement | null>(null)

  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    activeBulletRef.current?.style.setProperty('--progress', `${(1 - progress) * 100}%`)
  }

  useEffect(() => {
    const activeBullet = document.querySelector('.swiper-pagination-bullet-active .progress-div')

    if (activeBullet) {
      activeBulletRef.current = activeBullet as HTMLDivElement
    }
  }, [])

  return (
    <>
      <div className='h-[100vh] relative'>
        <div style={{ transform: 'translateY(50px) scale(-1, 1)' }} className="image-swiper-button-prev prevArrow">
          <Image src={arrow} width={8} height={16} alt='photo' className='h-[16px] w-[8px]' />

        </div>
        <div style={{ transform: 'translateY(50px)' }} className="image-swiper-button-next nextArrow">
          <Image src={arrow} width={8} height={16} alt='photo' className='h-[16px] w-[8px]' />

        </div>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          speed={500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index: number, className: string) {
              return `
              <div class="${className}">
                <div class="progress-div"></div>
              </div>`
            },
          }}

          onSlideChange={() => {
            // Обновляем ссылку на активный буллет при изменении слайда
            const activeBullet = document.querySelector('.swiper-pagination-bullet-active .progress-div')

            if (activeBullet) {
              activeBulletRef.current = activeBullet as HTMLDivElement
            }
          }}

          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >

          {images.map((item, idx) => {
            return (<SwiperSlide key={idx} >
              <div className="h-full relative">
                <Image src={bgOpacity} alt='background blur' fill className='absolute top-0 left-0 h-full object-cover z-[1]' />
                <Image src={item.image ? item.image : item.product?.photos[0].photo} fill alt='photo' className='absolute top-0 left-0 h-full object-cover' />
                <div className='absolute mx-auto left-0 right-0 items-center top-[30px] lmg:top-[99px] flex flex-col z-[2]'>
                  <span className='text-white tracking-[-0.03em] uppercase text-[24px]/[28.8px] lmg:text-[48px]/[57.6px]'>Дизайнерские предметы</span>
                  <span className='text-white tracking-[-0.03em] uppercase text-[14px]/[33.6px] lmg:text-[28px]/[67.2px]'>и декор интерьера</span>
                </div>

                <div className="absolute left-0 right-0 mx-auto flex flex-col items-center bottom-[83px] z-[2]">
                  <span className='block mb-[5px] text-[#E3E3E3] tracking-[-0.01em] uppercase text-[8px]/[10.04px] lmg:mb-[8px] lmg:text-[16px]/[20.08px]'>{item.product.category.title} / {item.product.subcategory.title}</span>
                  <span className='block mb-[8px] text-white tracking-[-0.01em] uppercase text-[16px]/[20.08px] lmg:mb-[10px] lmg:text-[28px]/[35.14px]'>{item.product.name}</span>
                  <Link href={`/products/${item.product.id}`}>
                    <div className='flex justify-center items-center gap-[8.5px] text-[#E3E3E3] tracking-[-0.01em] uppercase'>
                      <span className='text-[8px]/[10.04px] lmg:text-[16px]/[20.08px]'>Подробнее</span>
                      <Image src={arrow} width={5} height={10} alt='photo' className='h-[10px] w-[5px] lmg:h-[14px] lmg:w-[8px]' />
                    </div>
                  </Link>
                </div>
              </div>

            </SwiperSlide>)

          })}
        </Swiper>

      </div>
    </>
  )
}
