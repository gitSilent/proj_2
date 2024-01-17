/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import man from "@/public/aboutPage/ourValuesComponent/man.webp"
import about_bg from "@/public/aboutPage/about_bg.webp"
import about_bgMobile from "@/public/aboutPage/about_bgMobile.webp"
import { ToastContainer } from 'react-toastify'

export default function AboutPageComponent() {
	return (
		<div className="relative mx-auto max-w-[1220px] w-full px-[20px] xs:max-md:pt-[70px] xs:max-md:pb-[0] pt-[150px] pb-[125px]">

			{/* <Image src={aboutImage} alt="about image" className="hidden absolute lmg:block -right-[290px] -top-[60px] z-0" /> */}
			<Image src={about_bg} alt="idea bg" className=" hidden absolute md:block top-[-300px] bottom-[-300px] my-auto scale-[140%] z-0" />
			<Image src={about_bgMobile} alt="idea bg" className="absolute max-w-[290px] md:hidden left-[50px] top-[-50px] bottom-0 my-auto scale-[210%] z-0" />

			<div className="flex xs:flex-col items-start justify-start relative xs:max:md:px-[20px] xs:gap-[20px] md:max-lmg:px-[40px] lmg:flex-row lmg:gap-[140px]">

				<span className="prevSpan">О нас</span>

				<div className="flex flex-col xs:gap-[30px] lmg:gap-[40px] items-start z-[1] ">

					<div className="max-w-[640px] relative">
						<span className="titleSpan absolute -left-[25px] xs:max-md:-left-[12px]">«</span>
						<span className="titleSpan absolute -right-[25px] xs:max-md:-right-[12px]">»</span>
						<span className="titleSpan">СТИЛЬ = ИСКУССТВО?</span>
					</div>

					<p className="mainText max-w-[680px] xs:max-md:max-w-[275px] xs:max-md:ml-[45px] z-[1]">
						Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона,
						а также реальное распределение букв и пробелов
						<div style={{ shapeOutside: 'polygon(24% 1px, 55% 17%, 59% 100%, -101px 100%, -70px 0px)' }} className='float-left ml-[-119px] mt-[10px] w-[228px] h-[296px] lmg:hidden'>
							<Image src={man} alt="about image" className="h" />
						</div>
						в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию,

					</p>

					<div style={{ shapeOutside: 'polygon(24% 1px, 55% 17%, 59% 100%, -101px 100%, -70px 0px)' }} className='hidden float-left ml-[-119px] mt-[10px] w-[228px] h-[296px] lmg:block lmg:absolute lmg:right-[-110px] lmg:transform -scale-x-100 lmg:w-[491px] lmg:h-[636px] lmg:bottom-[-125px]'>
						<Image src={man} alt="about image" className="h-full w-full" />
					</div>

					<div className="absolute bottom-[47px] left-[170px] md:bottom-[20px] lmg:static">
						<span className='font-extrabold text-[24px]/[28.8px] xs:max-md:text-[20px]/[26px] text-[#2d2d2d] tracking-[-0.03em] block mb-[10px] xs:max-md:mb-[2px]'>Михаил Жилин</span>
						<span className='font-normal text-[20px]/[26px] xs:max-md:text-[14px]/[18.2px] text-[#6C6C6C] tracking-[-0.03em] block max-w-[237px]'>Основатель мастерской,
							многократный бизнесмен</span>
					</div>

				</div>
			</div>




		</div>
	)
}
