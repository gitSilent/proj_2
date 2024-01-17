import AboutPageComponent from '@/src/components/AboutComponent(aboutPage)/AboutPageComponent'
import CatalogComponent from '@/src/components/CatalogComponent/CatalogComponent'
import MainFooter from '@/src/components/Footer/MainFooter'
import Header from '@/src/components/Header/Header'
import HistoryComponent from '@/src/components/HistoryComponent/HistoryComponent'
import IdeaComponent from '@/src/components/IdeaComponent'
import OurValuesComponent from '@/src/components/OurValuesComponent/OurValuesComponent'
import Questions from '@/src/components/QuestionsComponent/Questions'
import ReviewsComponent from '@/src/components/ReviewsComponent/ReviewsComponent'
import ShowDiscount from '@/src/components/ShowDiscount/ShowDiscount'
import WeUseCookie from '@/src/components/WeUseCookie/WeUseCookie'
import { getContacts, getFaq, getRecommendProducts, getReviews, getSlider } from '@/src/service/requests'
import 'react-toastify/dist/ReactToastify.css'

export const dynamic = 'force-dynamic'


export default async function page() {

  let sliderData = await getSlider()
  let reviewsData = await getReviews()
  let recommendedProductsData = await getRecommendProducts()
  let faqData = await getFaq()
  let contactsData = await getContacts()

  return (
    <>
      <Header contacts={contactsData.data} />
      <main className='bg-[#F8F8F8]'>
        <WeUseCookie />
        <ShowDiscount contacts={contactsData.data} />
        <div className="bg-[#F8F8F8] overflow-hidden">
          <AboutPageComponent />
        </div>

        <div className="bg-[#F1F1F1]">
          <HistoryComponent />
        </div>

        <div className="bg-[#F5F5F6]">
          <OurValuesComponent />
        </div>

        <div className='lg:hidden'>
          <CatalogComponent products={recommendedProductsData.data} />
        </div>
        <IdeaComponent contacts={contactsData.data} />
        <ReviewsComponent reviews={reviewsData.data} />
        <Questions questions={faqData.data} />

        <div className="bg-[#2D2D2D]">
          <MainFooter contacts={contactsData.data} />
        </div>

      </main>
    </>

  )
}
