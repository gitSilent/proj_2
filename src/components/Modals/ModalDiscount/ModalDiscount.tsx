import arrowThinBlack from "@/public/arrowThinBlack.svg"
import alert_triangle from "@/public/modals/alert-triangle.svg"
import check from "@/public/modals/check.svg"
import ex from "@/public/modals/ex.svg"
import picture from "@/public/modals/modalDiscount/picture.webp"
import bg_span from "@/public/modals/modalOrder/bg_span.svg"
import { sendMailing } from "@/src/service/requests"
import { checkValidationEmail } from "@/src/service/serviceFunctions/checkValidationEmail"
import Image from "next/image"
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from "react"
import { useForm } from "react-hook-form"
import { TailSpin } from "react-loader-spinner"
import Modal from "react-modal"
import { toast } from 'react-toastify'
import { closeSvg } from '../../Notifications/CloseSvg'
import ErrorNotification from '../../Notifications/ErrorNotification'

interface IProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  setUserMail: Dispatch<SetStateAction<string | undefined>>
  setActiveThanks: Dispatch<SetStateAction<boolean>>
}

export default function ModalDiscount({ active, setActive, setUserMail, setActiveThanks }: IProps) {

  const { register, reset, setError, clearErrors, handleSubmit, getValues, control, formState: { errors, isValid } } = useForm()
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null)
  const [isSending, setIsSending] = useState<boolean>(false)

  function sendRequest(data: any) {

    setIsSending(true)

    sendMailing(data.email)
      .then((res) => {
        setIsSending(false)
        console.log(res)
        setUserMail(data.email)
        reset()

        setActive(false)
        setActiveThanks(true)
      }).catch((er) => {
        toast(<ErrorNotification />, { closeButton: closeSvg })
      })
  }

  return (
    <Modal
      isOpen={active}
      className={"order-modal hide-scroll"}
      onRequestClose={() => setActive(false)}
      contentLabel="Order Modal"
    >
      <div className="modal-discount hideScroll w-full h-full max-w-[1105px] max-h-[510px] overflow-x-hidden overflow-y-auto">

      <div onClick={() => { setActive(false) }} className={`close-modal fixed flex justify-center lx:max-lm:right-[calc(50vw-540px)] lx:max-lm:top-[120px] items-center z-[100] top-[110px] lm:right-[calc(50vw-552px-148px)]`} >
          <div className='flex items-center w-[113px] h-[32px] text-white px-[14px] py-[7px] rounded-full bg-[#2D2D2D4D] border-[1px] border-white hover:cursor-pointer hover:bg-[#2d2d2d98]'>
            <span className='block uppercase text-center font-semibold text-[14px]/[17.57px]'>Закрыть</span>
            <Image src={ex} alt='close' className='w-[24px] h-[24px]' />
          </div>
        </div>


        <section className="flex h-full">
          <div className="h-full w-full max-w-[465px] ">
            <Image src={picture} alt="picture" className="relative h-full w-full z-[1]" />
          </div>

          <div className="relative p-[40px] w-full h-full">
            <Image src={bg_span} alt="logo" className="absolute left-0 top-0 h-full w-full object-cover z-[0] scale-110" />

            <div className="relative z-[1]">
              <span className="block font-medium text-[20px]/[25.1px] text-[#e3e3e3] tracking-[-0.03em] mb-[15px]">НОВАЯ КОЛЛЕКЦИЯ УЖЕ В КАТАЛОГЕ</span>
              <h3 className="block text-[58px]/[69.6px] text-white tracking-[-0.03em] font-semibold mb-[20px]">СКИДКА -20%</h3>
              <p className="block text-[20px]/[26px] text-[#e3e3e3] tracking-[-0.03em]">Оставайтесь в курсе актуальных акций и скидок, а так же получайте информацию о новых коллекциях на почту. Обещаем не спамить и не присылать ерунду!</p>
              <p className='tracking-[-0.03em] text-left font-medium text-[8px]/[11.2px] text-[#787878] max-w-[285px] mt-[50px]'>Нажимая «Отправить заявку» вы даёте согласие на обработку персональных данных в соответствии с
                <Link href={"/policy_privacy"} className='underline'> Политикой конфиденциальности</Link>
              </p>

              <form action="" className="mt-[20px]">
                <div className={`relative ${isEmailValid !== null && !isEmailValid ? "is-error" : isEmailValid ? "is-valid" : ""}`}>
                  <label htmlFor="input_phone" className='valid-input-element absolute w-[20px] h-[20px] right-[17px] top-0 bottom-0 my-auto'><Image src={check} alt='check' /></label>
                  <label htmlFor="input_email" className='error-input-element absolute w-[20px] h-[20px] right-[17px] top-0 bottom-0 my-auto'><Image src={alert_triangle} alt='alert' /></label>
                  <label htmlFor="input_email" className='error-input-element absolute left-[16px] top-[-4px] error-label'>Неверный адрес электронной почты</label>
                  <input id='input_email' {...register("email", { required: true, onChange: () => { setIsEmailValid(checkValidationEmail(getValues().email)) } })} type="email" placeholder='Ваша электропочта' className='form-input' />
                </div>
                <button onClick={handleSubmit((data) => { sendRequest(data) })} disabled={!isValid || !isEmailValid == true} className="relative z-[50] min-h-[63px] w-full text-[#2D2D2D] text-[16px]/[19.2px] tracking-[-0.03em] py-[22px] font-semibold bg-white uppercase flex items-center justify-center mt-[15px]">
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
              </form>
            </div>
          </div>

        </section>
      </div>

    </Modal>
  )
}
