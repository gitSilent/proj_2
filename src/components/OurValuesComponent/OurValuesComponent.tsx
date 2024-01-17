import Image from 'next/image'
import furniture from "@/public/aboutPage/ourValuesComponent/furniture.webp"

export default function OurValuesComponent() {
	return (
		<div className="mx-auto w-full max-w-[1220px] relative xs:max-md:pt-[50px] xs:max-md:pb-[70px] pt-[150px] pb-[125px]">

			<div className="flex xs:flex-col items-start justify-between xs:max:md:px-[20px] xs:gap-[20px] md:max-lx:px-[40px] lx:flex-row lx:gap-[140px] max-w-[1220px] px-[20px] mx-auto lx:mb-[120px]">

				<span className="prevSpan leading-[25.1px] lx:mt-[7px]">НАШИ <br className='xs:max-md:hidden' /> ЦЕННОСТИ</span>

				<div className="flex flex-col xs:gap-[30px] lx:gap-[40px] items-start z-[1] text-right xs:max-md:text-left">
					<span className="titleSpan w-full ">Функциональность, <br /> простота и комфорт</span>
					<p className="mainText max-w-[680px] xs:max-md:max-w-[275px] xs:max-md:ml-[45px] z-[1]">Этими словами можно описать те ценности, которыми MW руководствуется при создании своих проектов, продвигает в общении   со своими клиентами и собственными сотрудниками. Красота в простоте, функция - первична, а комфорт - в их квинтэссенции.</p>
				</div>
			</div>

			<div className='ml-[27px] h-full w-full max-w-[321px] max-h-[325px] md:max-w-[642px] md:max-h-[650px] lx:absolute lx:w-[545px] lx:h-[552px] lx:top-[230px] lx:left-[124px]'>
				<Image src={furniture} alt="workshop img" className="w-full h-full " />
			</div>

			<div className="flex xs:flex-col items-start justify-between xs:max:md:px-[20px] xs:gap-[20px] md:max-lx:px-[40px] lx:flex-row lx:gap-[140px] max-w-[1220px] px-[20px] mx-auto">
				<span className="prevSpan leading-[25.1px] lx:mt-[7px]xs:max-md:w-full">НАША <br className='xs:max-md:hidden' /> МИССИЯ</span>

				<div className="flex flex-col xs:gap-[30px] lx:gap-[40px] items-start justify-end place-items-end z-[1] text-right xs:max-md:text-left">
					<span className="hidden titleSpan w-full md:block">создавать тон <br /> пространства</span>
					<span className="titleSpan w-full md:hidden">ваша уверенность <br /> в пространстве</span>
					<p className="mainText max-w-[680px] xs:max-md:max-w-[275px] xs:max-md:ml-[45px] z-[1]">Для нас важно, чтобы наши проекты поддерживали желаемый Вами эмоциональный и визуальный тон пространства, это позволяет создать нужную атмосферу для деловой беседы или уединённого отдыха</p>
				</div>
			</div>

		</div>
	)
}
