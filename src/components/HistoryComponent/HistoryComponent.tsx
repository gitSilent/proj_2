/* eslint-disable react/no-unescaped-entities */
'use client'
import one from "@/public/aboutPage/historyComponent/workShopOne.png"
import two from "@/public/aboutPage/historyComponent/workShopTwo.png"
import arrow from "@/public/arrow.svg"
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useDraggable } from 'react-use-draggable-scroll'

export default function HistoryComponent() {

	const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
	const { events } = useDraggable(ref)

	return (
		<div className="mx-auto w-full relative xs:max-md:pt-[50px] xs:max-md:pb-[70px] pt-[150px] pb-[125px]">

			<div className="flex xs:flex-col items-start justify-start xs:max:md:px-[20px] xs:gap-[20px] md:max-lmg:px-[40px] lmg:flex-row lmg:gap-[100px] max-w-[1220px] px-[20px] mx-auto">
				<span className="prevSpan leading-[25.1px] lx:mt-[7px]">НЕМНОГО <br className='xs:max-md:hidden block' /> ИСТОРИИ</span>
				<div className="flex flex-col xs:gap-[30px] lmg:gap-[40pxa] items-start z-[1]">
					<span className="titleSpan">ПРОГУЛКА <br /> ПО МАСТЕРСКОЙ</span>
					<p className="mainText max-w-[680px] xs:max-md:max-w-[275px] xs:max-md:ml-[45px] z-[1] mb-[50px]">Когда-то мы начинали с малого. Несколько заказов в месяц, работа <br /> на дому. Мы провели не один вечер в поисках новых возможностей, продумывая всевозможные ситуации, мечтая о чём-то бóльшем, <br /> и наши усилия привели нас к тому, что мы имеем сегодня</p>
				</div>
			</div>

			{/* SLIDER */}
			<div className="flex items-start relative xs:max-md:mb-[40px] mb-[60px]">
				<div className="flex w-full gap-[110px] justify-end mx-auto">
					<div className="flex xs:gap-[10px] lx:gap-[20px] w-[100%] overflow-x-scroll hideScroll xs:max-lx:pl-[20px] lmx:max-lp:pl-[225px] lp:max-lm:pl-[293px] lx:pl-[330px] fulhd:pl-[568px] bg-inherit relative z-0" {...events} ref={ref}>
						<div className="max-w-[780px] cursor-pointer relative z-10">
							<Image src={one} alt="workshop img" className="xs:max-md:min-w-[320px] xs:max-md:max-w-[320px] min-w-[780px] mb-[10px]" />
						</div>
						<div className="max-w-[780px] cursor-pointer relative z-10">
							<Image src={two} alt="workshop img" className="xs:max-md:min-w-[320px] xs:max-md:max-w-[320px] min-w-[780px] mb-[10px]" />
						</div>
						<div className="max-w-[780px] cursor-pointer relative z-10">
							<Image src={two} alt="workshop img" className="xs:max-md:min-w-[320px] xs:max-md:max-w-[320px] min-w-[780px] mb-[10px]" />
						</div>
						<div className="max-w-[780px] cursor-pointer relative z-10">
							<Image src={two} alt="workshop img" className="xs:max-md:min-w-[320px] xs:max-md:max-w-[320px] min-w-[780px] mb-[10px]" />
						</div>
						<div className="max-w-[780px] cursor-pointer relative z-10">
							<Image src={two} alt="workshop img" className="xs:max-md:min-w-[320px] xs:max-md:max-w-[320px] min-w-[780px] mb-[10px]" />
						</div>
					</div>
				</div>
			</div>

			<div className="flex xs:flex-col items-start justify-start xs:max:md:px-[20px] xs:gap-[20px] md:max-lmg:px-[40px] lmg:flex-row lmg:gap-[100px] max-w-[1220px] px-[20px] mx-auto">
				<span className="prevSpan leading-[25.1px] lx:mt-[7px] w-[99px]"></span>
				<div className="flex flex-col xs:gap-[30px] lmg:gap-[40pxa] items-start z-[1]">
					<p className="mainText max-w-[680px] xs:max-md:max-w-[275px] xs:max-md:ml-[45px] z-[1]">В нашей мастерской царит порядок и чётко выверенные процессы,            что позволяет реализовать весь творческий потенциал в "ювелирном" качестве. Наличие разных типов станков по металлу и по дереву,       обилие ручного и электрического инструмента, позволяет нам                 создавать достаточно сложные изделия, иногда с невероятно глубокой проработкой деталей (например в заказах по вашим чертежам). Некоторые наши проекты имеют наборы из нескольких единиц мебели            и декора, выполненные в едином стиле, чтобы вы могли легко подобрать себе готовое оформление спальни, гостинной или другой комнаты по согласованию с дизайнером</p>
				</div>
			</div>

			<div className="flex xs:flex-col items-start justify-start xs:max:md:px-[20px] xs:gap-[20px] md:max-lmg:px-[40px] lmg:flex-row lmg:gap-[100px] max-w-[1220px] px-[20px] mx-auto">
				<span className="prevSpan leading-[25.1px] lx:mt-[7px] w-[99px]"></span>
				<div className="z-[1]">
					<Link href={"/products"}>
						<div className="flex items-center md:mt-[40px] xs:max-md:gap-[26px] gap-[30px] h-[63px]">
							<span className="postSpan">Каталог товаров</span>
							<Image src={arrow} alt="arrow image" />
						</div>
					</Link>
				</div>
			</div>

		</div>
	)
}
