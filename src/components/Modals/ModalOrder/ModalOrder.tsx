import arrowThinBlack from "@/public/arrowThinBlack.svg"
import photo from "@/public/catalogSliderOne.png"
import alert_triangle from "@/public/modals/alert-triangle.svg"
import check from "@/public/modals/check.svg"
import ex from "@/public/modals/ex.svg"
import bg_span from "@/public/modals/modalOrder/bg_span.svg"
import logo from "@/public/whiteLogo.svg"
import { closeSvg } from '@/src/components/Notifications/CloseSvg'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import Modal from "react-modal"

import { IOrder, IProduct } from '@/src/service/models'
import validatePhone from '@/src/service/serviceFunctions/validatePhone'

import { sendOrder } from '@/src/service/requests'
import { checkValidationEmail } from '@/src/service/serviceFunctions/checkValidationEmail'
import { checkValidationPhone } from '@/src/service/serviceFunctions/checkValidationPhone'
import Link from 'next/link'
import { TailSpin } from 'react-loader-spinner'
import { toast } from "react-toastify"
import ErrorNotification from "../../Notifications/ErrorNotification"
import "../modalStyles.css"
import "./modalOrderStyles.css"
import PhoneInput from "react-phone-number-input"
import 'react-phone-number-input/style.css'

interface IProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  setActiveThanks: Dispatch<SetStateAction<boolean>>
  setUserMail: Dispatch<SetStateAction<string | undefined>>
  orderData: IProduct
}

export default function ModalOrder({ active, setActive, setActiveThanks, orderData, setUserMail }: IProps) {

  const { register, reset, setError, clearErrors, handleSubmit, getValues, control, formState: { errors, isValid } } = useForm()
  const [productQuantity, setProductQuantity] = useState<number>(1)
  const [isSending, setIsSending] = useState<boolean>(false)
  const [isPhoneValid, setIsPhoneValid] = useState<boolean | null>(null)
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null)


  function sendRequest(data: any) {
    console.log(data)
    console.log(validatePhone(data.phone))

    let validatedPhone = validatePhone(data.phone)
    if (!validatedPhone) {
      setError('phone', { message: "" })
      return
    }

    let dataToSend: IOrder = {
      email: data.email,
      message: data.desc ? data.desc : "",
      name: data.name,
      phone: typeof (validatedPhone) == "string" ? validatedPhone : "",
      product: orderData.id,
      unique: false,
      amount: productQuantity
    }

    console.log(dataToSend);
    

    setIsSending(true)

    sendOrder(dataToSend)
      .then((res) => {
        setIsSending(false)
        console.log(res)
        setUserMail(data.email)
        setProductQuantity(1)
        reset()

        setActive(false)
        setActiveThanks(true)

      }).catch((er) => {
        toast(<ErrorNotification />, { closeButton: closeSvg })
      })

  }

  function changeQuantity(action: "plus" | "minus") {
    if (action === "plus") {
      setProductQuantity((prev) => prev + 1)
    } else if (action === "minus" && productQuantity >= 2) {
      setProductQuantity((prev) => prev - 1)
    }
  }


  return (
    <Modal
      isOpen={active}
      className={"order-modal hide-scroll"}
      onRequestClose={() => setActive(false)}
      contentLabel="Order Modal"
    >
      <div className='modal-820 w-full h-[100vh] lmg:h-[80vh] overflow-x-hidden overflow-y-auto'>

        <div onClick={() => { setActive(false) }} className={`close-modal fixed md:top-[60px] md:right-[calc(50vw-380px)] mm:right-[calc(50vw-400px)] flex justify-center items-center z-[100] top-[10px] right-[10px] md:top-[15px] md:right-[-10px] lx:fixed lx:top-[110px] lx:right-[calc(50vw-410px-148px)]`} >
          <div className='flex items-center w-[113px] h-[32px] text-white px-[14px] py-[7px] rounded-full bg-[#2D2D2D4D] border-[1px] border-white hover:cursor-pointer hover:bg-[#2d2d2d98]'>
            <span className='block uppercase text-center font-semibold text-[14px]/[17.57px]'>Закрыть</span>
            <Image src={ex} alt='close' className='w-[24px] h-[24px]' />
          </div>
        </div>

        <Image src={bg_span} alt='logo' className='absolute top-[-117px] h-full w-full object-cover z-[0] lg:scale-150' />

        <div className='relative z-[5] px-[20px] lmg:px-[40px] flex flex-col'>
          <h3 className='titleSpan text-white'> Заказать товар </h3>
          <p className='paragraphText lg:hidden max-w-[295px] pl-[60px] mt-[30px] lg:max-w-[465px] text-[#E3E3E3]'>Оставьте заявку, а наш менеджер свяжется с Вами в ближайшее время. Письмо о заказе придет на почту. Или звоните нам: <span className='underline whitespace-nowrap'>8 923 782 49 52</span></p>
          <p className='paragraphText hidden max-w-[295px] pl-[60px] mt-[20px] lg:max-w-[500px] text-[#E3E3E3] lg:block lg:pl-0'>Оставьте заявку, а наш менеджер свяжется с Вами в ближайшее время. Или позвоните по номеру мастерской  <span className='underline whitespace-nowrap'>8 923 782 49 52</span></p>
          <p className='flex items-center justify-end gap-[5px] paragraphText text-[#E3E3E3] mt-[5px] lg:mt-[20px] lg:justify-start'>С любовью <Image src={logo} alt='logo' className='h-[17px] w-[86px] lg:h-[24px] lg:w-[123px]' /> </p>
        </div>

        {/* Блок с информацией по товару */}
        <div className='relative z-[5] px-[20px] lmg:px-[40px] mt-[40px]'>
          <div className='px-[20px] lmg:px-[40px] flex w-full h-fit border-[1px] border-[#e3e3e3] p-[16px] lg:p-[20px] '>
            <div className='relative h-[64px] w-[64px] lg:h-[100px] lg:w-[100px] '>
              <Image src={photo} alt='logo' className='absolute top-0 left-0 h-full w-full object-cover' />
            </div>
            <div className='ml-[12px] lg:ml-[20px]'>
              <span className=' block text-[8px]/[10.04px] lg:text-[12px]/[15.06px] text-[#e3e3e3] tracking-[-0.03em] uppercase font-semibold mb-[2px] lg:mb-[10px]'>{orderData.category.title}</span>
              <span className=' block text-[16px]/[20.08px] lg:text-[28px]/[33.6px] text-white tracking-[-0.03em] uppercase font-semibold mb-[4px] lg:mb-[15px]'>{orderData.name}</span>
              <div className=' flex gap-[7px]'>
                <span className=' block tracking-[-0.03em] text-[16px]/[20.08px] text-[#e3e3e3]'>{orderData.cost_with_discount ? orderData.cost_with_discount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : orderData.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽</span>
                <span className={`block tracking-[-0.03em] text-[10px]/[12.55px] text-[#6C6C6C] line-through ${orderData.cost > 10000 && orderData.cost < 100000 ? "xs:max-md:-right-[23px] md:-right-[43px]" : orderData.cost > 1000 && orderData.cost < 10000 ? "xs:max-md:-right-[18px] md:-right-[35px]" : orderData.cost > 100000 ? "xs:max-md:-right-[42px] md:-right-[63px]" : "xs:max-md:-right-[12px] md:-right-[30px]"}`}>{orderData.cost ? orderData.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : ""} ₽</span>
              </div>
            </div>
          </div>

          {/* Блок для изменения количества товара к заказу  */}
          <div className='relative z-[5] flex justify-between w-full h-fit border-[1px] border-[#e3e3e3] text-white mt-[10px] '>
            <div onClick={() => { changeQuantity('minus') }} className='flex justify-center items-center border-[#E3E3E3] border-r-[1px] w-full max-w-[80px] h-[52px] hover:bg-[#787878] lg:max-w-[150px] hover:cursor-pointer'>-</div>
            <div className='flex justify-center items-center'>
              <span className='block text-[16px]/[20.08px]'>{productQuantity} шт.</span>
            </div>
            <div onClick={() => { changeQuantity('plus') }} className='flex justify-center items-center border-[#E3E3E3] border-l-[1px] w-full max-w-[80px] h-[52px] hover:bg-[#787878] lg:max-w-[150px] hover:cursor-pointer'>+</div>
          </div>
        </div>

        {/* Форма с инпутами для ввода пользовательских данных */}
        <form className='relative z-[5] mt-[40px] ' action="" onSubmit={handleSubmit((data) => { sendRequest(data) })}>
          <span className='px-[20px] lmg:px-[40px] block text-white text-[12px]/[15.06px] tracking-[-0.03em] uppercase mb-[15px]'>Контактные данные</span>

          <div className='px-[20px] lmg:px-[40px] flex flex-col gap-[15px]'>
            <input id='input_name' {...register("name", { required: true })} type="text" placeholder='Ваше имя' className='form-input' />
            <div className={`relative ${isPhoneValid !== null && !isPhoneValid ? "is-error" : isPhoneValid ? "is-valid" : ""}`}>
              <label htmlFor="input_phone" className='valid-input-element absolute w-[20px] h-[20px] right-[17px] top-0 bottom-0 my-auto'><Image src={check} alt='check' /></label>
              <label htmlFor="input_phone" className='error-input-element absolute w-[20px] h-[20px] right-[17px] top-0 bottom-0 my-auto'><Image src={alert_triangle} alt='alert' /></label>
              <label htmlFor="input_phone" className='error-input-element absolute left-[16px] top-[-4px] error-label'>Неверный номер телефона</label>
              <Controller
                  control={control}
                  name="phone"
                  rules={{
                    onChange:() => { setIsPhoneValid(checkValidationPhone(getValues().phone)) }
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <PhoneInput className='form-input' international placeholder="Номер телефона" defaultCountry="RU" value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />)}
                />

              {/* <input id='input_phone' {...register("phone", { required: true, onChange: () => { setIsPhoneValid(checkValidationPhone(getValues().phone)) } })} type="tel" placeholder='Номер телефона' className='form-input' /> */}
            
            </div>

            <div className={`relative ${isEmailValid !== null && !isEmailValid ? "is-error" : isEmailValid ? "is-valid" : ""}`}>
              <label htmlFor="input_phone" className='valid-input-element absolute w-[20px] h-[20px] right-[17px] top-0 bottom-0 my-auto'><Image src={check} alt='check' /></label>
              <label htmlFor="input_email" className='error-input-element absolute w-[20px] h-[20px] right-[17px] top-0 bottom-0 my-auto'><Image src={alert_triangle} alt='alert' /></label>
              <label htmlFor="input_email" className='error-input-element absolute left-[16px] top-[-4px] error-label'>Неверный адрес электронной почты</label>
              <input id='input_email' {...register("email", { required: true, onChange: () => { setIsEmailValid(checkValidationEmail(getValues().email)) } })} type="email" placeholder='Ваша электропочта' className='form-input' />
            </div>

            <textarea {...register("desc")} placeholder='Ваш комментарий или пожелания к заказу' className='text-white p-[16px] w-full min-h-[120px] placeholder:text-[#787878] placeholder:max-w-[175px] text-[16px]/[20.08px] bg-[#313131] border-[1px] border-[#E3E3E3]' />
          </div>
          <p className='mx-auto tracking-[-0.03em] text-center font-medium text-[8px]/[11.2px] text-[#787878] max-w-[285px] mt-[30px]'>Нажимая «Отправить заявку» вы даёте согласие на обработку персональных данных в соответствии с
            <Link href={"/policy_privacy"} className='underline'> Политикой конфиденциальности</Link>
          </p>
        </form>
        <button onClick={handleSubmit((data) => { sendRequest(data) })} disabled={!isValid || !isEmailValid == true || !isPhoneValid == true} className="relative z-[50] min-h-[63px] w-full text-[#2D2D2D] text-[16px]/[19.2px] tracking-[-0.03em] py-[22px] font-semibold bg-white flex items-center justify-center mt-[30px]">
          {isSending
            ? <TailSpin height="12"
              width="12"
              color="black"
              ariaLabel="tail-spin-loading"
              radius="0"
              wrapperStyle={{}}
              wrapperClass="absolute"
              visible={true} />
            : <>
              Оставить заявку
              <Image src={arrowThinBlack} alt="product arrow" className="ml-[10px] w-[12px] mt-[3px]" />
            </>
          }
        </button>
      </div>

    </Modal>
  )
}
