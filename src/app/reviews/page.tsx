import MainFooter from '@/src/components/Footer/MainFooter'
import Header from '@/src/components/Header/Header'
import IdeaComponent from '@/src/components/IdeaComponent'
import Questions from '@/src/components/QuestionsComponent/Questions'
import ReviewsPageComponent from '@/src/components/ReviewsPageComponent/ReviewsPageComponent'
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
      <main className='bg-[#F8F8F8] mt-[54px]'>
        <WeUseCookie />
        <ShowDiscount contacts={contactsData.data} />
        <ReviewsPageComponent reviews={reviewsData.data} />
        <IdeaComponent contacts={contactsData.data} />
        <Questions questions={faqData.data} />

        <div className="bg-[#2D2D2D]">
          <MainFooter contacts={contactsData.data} />
        </div>

      </main>
    </>
  )
}
