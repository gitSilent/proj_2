import bg from "@/public/404/error.png"
import arrow from "@/public/mediumArrow.svg"
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import MobileFooter from '../components/Footer/ModibleFooter'
import Header from '../components/Header/Header'
import { getContacts } from '../service/requests'

export default async function Error404() {
  let contactsData = await getContacts()

  return (
    <div>
      <Header contacts={contactsData.data} />
      <main className='relative  h-[700px]'>
        <Image src={bg} alt="error background" className="absolute z-[-1] -top-[250px] right-0 left-0 bottom-0 m-auto" />

        <div className="xs:max-md:max-h-[600px] h-[700px] flex justify-center items-center flex-col xs:max-md:justify-end">
          <span className='block font-semibold text-[28px]/[33.6px] tracking-[-0.03em]'>Кажется, такой <br /> страницы нет...</span>
          <button className="submit-btn max-w-[343px] xs:max-md:max-w-full min-h-[63px] w-full text-[#FFFFFF] text-[16px]/[19.2px] tracking-[-0.03em] py-[22px] font-semibold bg-[#2D2D2D] flex items-center justify-center mt-[30px]">
            <Image src={arrow} alt="product arrow" className="mr-[10px] w-[12px] mt-[3px] rotate-180" />
            Вернуться назад
          </button>
        </div>

        <div className="bg-[#2D2D2D]">
          <div className="xs:max-lx:hidden"><Footer contacts={contactsData.data} /></div>
          <div className="lx:hidden"><MobileFooter contacts={contactsData.data} /></div>
        </div>
      </main>
    </div>

  )
}
