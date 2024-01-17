import Link from 'next/link'

export default function CookieNotifications() {
	return (
		<div>
			<div className=''>
				<span className='block text-[#FFFFFF] text-[16px]/[20.8px] tracking-[-0.03em] font-extrabold'>Да-да, мы тоже юзаем cookies...</span>
				<p className='max-w-[295px] text-[12px]/[15.6px] tracking-[-0.03em] font-normal text-[#FFFFFF] mt-[4px]'>
					И
					<Link href={"/policy_privacy"}> <span className='underline'>Политика конфиденциальности</span> </Link>
					у нас есть, ну  <br /> Вы знаете,
					<Link href={"/terms_of_service"}> <span className='underline'>Пользовательское соглашение</span> </Link>
					там, <br />
					<Link href={"/offer_documents"}> <span className='underline'>Публичная оферта</span> </Link>
					ещё например. Окошко закроется само, через несколько секунд.
				</p>
			</div>
		</div>
	)
}
