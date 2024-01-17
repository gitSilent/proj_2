import CatalogComponentTwo from '@/src/components/CatalogComponent(catalogPage)/CatalogComponentTwo'
import MainFooter from '@/src/components/Footer/MainFooter'
import Header from '@/src/components/Header/Header'
import IdeaComponent from '@/src/components/IdeaComponent'
import Questions from '@/src/components/QuestionsComponent/Questions'
import ShowDiscount from '@/src/components/ShowDiscount/ShowDiscount'
import ProductComponent from '@/src/components/TheProductComponent/ProductComponent'
import WeUseCookie from '@/src/components/WeUseCookie/WeUseCookie'
import { getContacts, getFaq, getProduct, getRecommendProducts } from '@/src/service/requests'
import { Metadata, ResolvingMetadata } from 'next'
import 'react-toastify/dist/ReactToastify.css'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: { productId: string } }, parent: ResolvingMetadata): Promise<Metadata> {
    const productData = await getProduct(params.productId)
    const previousImage = (await parent).openGraph?.images || []
    const title = productData?.data?.title
    const desc = productData?.data?.description
    const image = productData?.data?.photos[0].photo
    return {
        title: `MishkaWood | ${title}`,
        description: desc,
        keywords: ['Магазин мебели', 'Mishka Wood', 'Мебель', 'Мишка вуд', `${title}`],
        creator: 'kisulkens.ru',
        publisher: 'Михаил',
        openGraph: {
            images: [image, ...previousImage]
        }
    }
}

export default async function page({ params, searchParams, }: { params: { productId: string }; searchParams?: { [key: string]: string | string[] | undefined } }) {

    let recommendedProductsData = await getRecommendProducts()
    let faqData = await getFaq()
    let contactsData = await getContacts()
    let productData = await getProduct(Number(params.productId))

    return (
        <>
            <WeUseCookie />
            <ShowDiscount contacts={contactsData.data} />
            <Header contacts={contactsData.data} />
            <main className="overflow-hidden pt-[54px] lmg:pt-0">

                <ProductComponent contacts={contactsData.data} data={productData.data} />

                <CatalogComponentTwo products={recommendedProductsData.data} />
                <IdeaComponent contacts={contactsData.data} />
                <Questions questions={faqData.data} />

                <div className="bg-[#2D2D2D]">
                    <MainFooter contacts={contactsData.data} />
                </div>
            </main>
        </>
    )
}
