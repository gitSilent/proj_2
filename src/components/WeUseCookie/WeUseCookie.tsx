'use client'
import { useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { closeSvg } from '../Notifications/CloseSvg'
import CookieNotifications from "../Notifications/CookieNotifications"

export default function WeUseCookie() {
	useEffect(() => {
		let mishkaUseCookie = document.cookie.replace(/(?:(?:^|.*;\s*)mishkaUseCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1")

		if (mishkaUseCookie === "") {
			toast(<CookieNotifications />, { closeButton: closeSvg })

			let date = new Date
			date.setMinutes(date.getMinutes() + 10080)
			let newDate = date.toUTCString()

			let newCookie = `mishkaUseCookie=true; expires=${newDate}`
			document.cookie = newCookie

		}
	}, [])

	return (
		<div>
			<ToastContainer
				position="bottom-right"
				autoClose={10000}
				hideProgressBar={false}
				progressStyle={{ top: "0px", background: "#787878" }}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				theme="light" />
		</div>
	)
}
