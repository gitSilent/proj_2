import QuestionButton from "@/src/components/QuestionButton/QuestionButton"
import Image from "next/image"
import 'react-toastify/dist/ReactToastify.css'
import aboutBg from "../../public/about/aboutBg.webp"
import AboutComponent from "../components/AboutComponent"
import CatalogComponent from "../components/CatalogComponent/CatalogComponent"
import MainFooter from '../components/Footer/MainFooter'
import Header from "../components/Header/Header"
import IdeaComponent from "../components/IdeaComponent"
import Questions from "../components/QuestionsComponent/Questions"
import ReviewsComponent from "../components/ReviewsComponent/ReviewsComponent"
import ShowDiscount from '../components/ShowDiscount/ShowDiscount'
import SliderMainPage from "../components/SliderMainPage/SliderMainPage"
import WeUseCookie from '../components/WeUseCookie/WeUseCookie'
import { getContacts, getFaq, getRecommendProducts, getReviews, getSlider } from "../service/requests"
import { InView, useInView } from "react-intersection-observer"

export const dynamic = 'force-dynamic'

export default async function Home() {

  let sliderData = await getSlider()
  let reviewsData = await getReviews()
  let recommendedProductsData = await getRecommendProducts()
  let faqData = await getFaq()
  let contactsData = await getContacts()

  // const { ref, entry } = useInView({ trackVisibility: true, delay: 100 });

  return (
    <>
      <Header contacts={contactsData.data} />
      <ShowDiscount contacts={contactsData.data} />
      <main className="overflow-hidden pt-[54px] lmg:pt-0 bg-[#f8f8f8]">
        <WeUseCookie />
        <QuestionButton contacts={contactsData.data} />
        <SliderMainPage images={sliderData.data} />

        <div className="relative max-w-[1440px] mx-auto">
          <Image src={aboutBg} alt="background image" className="absolute z-0 xs:-left-[30px] lmx:left-0 lmx:-top-[650px]" />
          <div className="relative max-w-[1440px] mx-auto">
            <AboutComponent />
          </div>
        </div>

        <CatalogComponent products={recommendedProductsData.data} />
        <IdeaComponent contacts={contactsData.data} />
        <ReviewsComponent reviews={reviewsData.data} />
        <div id='question_block'><Questions questions={faqData.data} /></div>

        <div className="bg-[#2D2D2D]">
          <MainFooter contacts={contactsData.data} />
        </div>
      </main>
    </>
  )
}
