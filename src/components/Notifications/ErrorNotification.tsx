
export default function ErrorNotification() {
	return (
		<div>
			<div className=''>
				<span className='block text-[#FF0000] text-[16px]/[20.8px] tracking-[-0.03em] font-extrabold'>Что-то пошло не так!</span>
				<p className='max-w-[295px] text-[12px]/[15.6px] tracking-[-0.03em] font-normal text-[#FFFFFF] mt-[4px]'>
					Не удалось отправить данные на сервер, <br />
					попробуйте ещё раз, проверив интернет соединение, <br />
					или сообщите нам об ошибке на странице контакты <br />
				</p>
			</div>
		</div>
	)
}
