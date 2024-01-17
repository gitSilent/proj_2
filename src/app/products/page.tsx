import CatalogComponentTwo from '@/src/components/CatalogComponent(catalogPage)/CatalogComponentTwo'
import MainFooter from '@/src/components/Footer/MainFooter'
import Header from '@/src/components/Header/Header'
import IdeaComponent from '@/src/components/IdeaComponent'
import ProductsComponent from '@/src/components/ProductsComponent/ProductsComponent'
import QuestionButton from '@/src/components/QuestionButton/QuestionButton'
import Questions from '@/src/components/QuestionsComponent/Questions'
import ShowDiscount from '@/src/components/ShowDiscount/ShowDiscount'
import WeUseCookie from '@/src/components/WeUseCookie/WeUseCookie'
import { getCategories, getContacts, getFaq, getProducts, getRecommendProducts } from '@/src/service/requests'
import 'react-toastify/dist/ReactToastify.css'

export const dynamic = 'force-dynamic'

export default async function page() {

  let recommendedProductsData = await getRecommendProducts()
  let productsData = await getProducts({})
  let categoriesData = await getCategories()
  let contactsData = await getContacts()
  let faqData = await getFaq()

  return (
    <>
      <Header contacts={contactsData.data} />
      <main>
        <WeUseCookie />
        <ShowDiscount contacts={contactsData.data} />
        <div className="overflow-hidden pt-[54px] lmg:pt-0" >
          <QuestionButton contacts={contactsData.data} />

          <ProductsComponent categories={categoriesData.data} products={productsData.data} />

          <CatalogComponentTwo products={recommendedProductsData.data} />
          <IdeaComponent contacts={contactsData.data} />
          <Questions questions={faqData.data} />
          <div className="bg-[#2D2D2D]">
            <MainFooter contacts={contactsData.data} />
          </div>
        </div>
      </main>
    </>

  )
}
