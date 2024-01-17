'use client'
import { IContacts } from '@/src/service/models'
import { useEffect, useState } from 'react'
import ModalDiscount from '../Modals/ModalDiscount/ModalDiscount'
import ModalThanks from '../Modals/ModalThanks/ModalThanks'

interface IProps {
	contacts: IContacts[]
}

export default function ShowDiscount(data: IProps) {
	const [isModalDiscountActive, setIsModalDiscountActive] = useState<boolean>(false)
	const [isModalThanksActive, setIsModalThanksActive] = useState<boolean>(false)
	const [userMail, setUserMail] = useState<string>()

	const mouseLeave = () => {
		let showDiscountCookie = document.cookie.replace(/(?:(?:^|.*;\s*)showDiscountCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1")
		if (window.innerWidth > 1124 && showDiscountCookie !== 'true') {
			setIsModalDiscountActive(true)
			let date = new Date
			date.setMinutes(date.getMinutes() + 4320)
			let newDate = date.toUTCString()

			let newCookie = `showDiscountCookie=true; expires=${newDate}`
			document.cookie = newCookie

		}
	}

	useEffect(() => {
		let showDiscountCookie = document.cookie.replace(/(?:(?:^|.*;\s*)showDiscountCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1")

		if (showDiscountCookie === "") {
			document.addEventListener('mouseleave', mouseLeave)
		}
	}, [])


	return (
		<div>
			{window.innerWidth > 1124
				? <ModalDiscount active={isModalDiscountActive} setActive={setIsModalDiscountActive} setActiveThanks={setIsModalThanksActive} setUserMail={setUserMail} />
				: <></>
			}

			<ModalThanks contacts={data.contacts} email={userMail ? userMail : ""} active={isModalThanksActive} setActive={setIsModalThanksActive} />



		</div>
	)
}
