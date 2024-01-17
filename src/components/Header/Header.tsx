'use client'
import { IContacts } from '@/src/service/models'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import blackLogo from '../../../public/blackLogo.svg'
import burgerMenu from '../../../public/header/burgerMenu.svg'
import whiteLogo from '../../../public/whiteLogo.svg'
import ModalContactUs from '../Modals/ModalContactUs/ModalContactUs'
import ModalThanks from '../Modals/ModalThanks/ModalThanks'
import ModalUniqueOrder from '../Modals/ModalUniqueOrder/ModalUniqueOrder'
import SideMenu from './SideMenu'
import './headerStyles.css'

interface IProps {
	contacts: IContacts[]
}

export default function Header({ contacts }: IProps) {
	const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(false)
	const [scroll, setScroll] = useState(0)
	const [newWindow, setNewWindow] = useState<any>()

	const [isModalUniqueOrderActive, setIsModalUniqueOrderActive] =
		useState<boolean>(false)
	const [isModalThanksActive, setIsModalThanksActive] = useState<boolean>(false)
	const [isModalContactUsActive, setIsModalContactUsActive] =
		useState<boolean>(false)
	const [userMail, setUserMail] = useState<string>()

	const path = usePathname()

	useEffect(() => {
		setNewWindow(window)
		if (path === '/') {
			window.addEventListener('scroll', handleScroll)
			return () => window.removeEventListener('scroll', handleScroll)
		} else {
			setScroll(9999)
		}
	}, [path])

	const handleScroll = () => {
		setScroll(window.scrollY)
	}

	return (
		<>
			<SideMenu
				contacts={contacts}
				setIsSidebarOpened={setIsSidebarOpened}
				isSidebarOpened={isSidebarOpened}
			/>
			{isModalUniqueOrderActive ? (
				<ModalUniqueOrder
					active={isModalUniqueOrderActive}
					setActive={setIsModalUniqueOrderActive}
					setActiveThanks={setIsModalThanksActive}
					setUserMail={setUserMail}
				/>
			) : (
				<></>
			)}
			{isModalThanksActive ? (
				<ModalThanks
					contacts={contacts}
					email={userMail ? userMail : ''}
					active={isModalThanksActive}
					setActive={setIsModalThanksActive}
				/>
			) : (
				<></>
			)}
			{isModalContactUsActive ? (
				<ModalContactUs
					active={isModalContactUsActive}
					setActive={setIsModalContactUsActive}
					setActiveThanks={setIsModalThanksActive}
					setUserMail={setUserMail}
				/>
			) : (
				<></>
			)}
			<div className='fixed top-0  z-20 w-full bg-white'>
				<div
					className={`lmg:hidden flex justify-between py-[17.5px] px-[20px] z-20 relative ${isSidebarOpened ? '-z-[200]' : ''
						}`}
				>
					<Link href='/'>
						<Image src={blackLogo} className='w-[99px] h-[19px]' alt='logo' />
					</Link>
					<Image
						onClick={() => {
							setIsSidebarOpened(true)
						}}
						src={burgerMenu}
						className='w-[18px] h-[12px] hover:cursor-pointer'
						alt='logo'
					/>
				</div>
			</div>
			<div
				className={`hidden border-[#787878] fixed top-0 z-30 lmg:flex h-[59px] ${scroll >= newWindow?.innerHeight ? 'text-black' : 'text-white'
					}`}
			>
				<div
					className={`hidden lmg:flex uppercase items-center justify-center shadow-md border-[#787878] ${scroll >= newWindow?.innerHeight
						? 'bg-white'
						: 'bg-inherit  border-b-[1px]'
						} top-0 right-0 left-0 mx-auto z-50 fixed`}
				>
					<div className='flex flex-auto items-center justify-between'>
						<div className='w-[183px] h-[59px] flex items-center justify-center border-r border-[#787878]'>
							<Link href={'/'}>
								<Image
									src={blackLogo}
									className={`w-[123px] h-[24px] ${scroll >= newWindow?.innerHeight ? 'block' : 'hidden'
										}`}
									alt='logo'
								/>
								<Image
									src={whiteLogo}
									className={`w-[123px] h-[24px] ${scroll >= newWindow?.innerHeight ? 'hidden' : 'block'
										}`}
									alt='logo'
								/>
							</Link>
						</div>

						<nav className='h-[59px]  flex items-center '>
							<ul className='flex items-center justify-center max-w-[1151px] gap-[4vw] fulhd:gap-[120px] xs:mx-[1rem] lm:mx-[68px] font-medium text-[14px] leading-[17.57px] tracking-[-0.03em]'>
								<Link className='break-keep btn' href={'/about'}>
									О нас
								</Link>
								<Link className='break-keep btn' href={'/products'}>
									Каталог
								</Link>
								<Link className='break-keep btn' href={'/reviews'}>
									Отзывы
								</Link>
								<span
									onClick={() => {
										setIsModalUniqueOrderActive(true)
									}}
									className='break-keep btn hover:cursor-pointer'
								>
									Уникальный заказ
								</span>
								<Link className='break-keep btn' href={'/#question_block'}>
									Faq
								</Link>
								<Link className='break-keep btn' href={'/contacts'}>
									Контакты
								</Link>
							</ul>
						</nav>

						<div className='flex'>
							<div className=' min-w-[173px] max-w-[173px] h-[59px] border-l border-r border-[#787878] flex items-center justify-center font-bold text-[14px] leading-[17.57px] tracking-[-0.03em] '>
								<Link href={'#'}>+7 923 782 49-52</Link>
							</div>

							<div
								onClick={() => {
									setIsModalContactUsActive(true)
								}}
								className='w-full min-w-[205px] max-w-[205px] h-[59px] flex items-center justify-center font-semibold text-[16px] leading-[19.2px] tracking-[-0.03em] bg-[#2D2D2D] text-white hover:cursor-pointer'
							>
								<p>Мы перезвоним</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
