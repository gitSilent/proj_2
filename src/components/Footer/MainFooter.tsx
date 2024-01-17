'use client'
import { IContacts } from '@/src/service/models'
import Footer from './Footer'
import MobileFooter from './ModibleFooter'

interface IProps {
	contacts: IContacts[]
}

export default function MainFooter({ contacts }: IProps) {

	return (
		<div>
			{typeof (global.window) !== undefined ? (global.window?.innerWidth > 1040
				? <div className=""><Footer contacts={contacts} /></div>
				: <div className=""><MobileFooter contacts={contacts} /></div>)
				: <></>
			}
		</div>
	)
}
