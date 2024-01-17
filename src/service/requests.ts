import axios from "axios"
import { ICategories, IContacts, IFaq, IOrder, IProduct, IRecommendedProducts, IReview, ISlider } from "./models"

const DOMAIN = ''

export const getSlider = async () => {
  return await axios.get<ISlider[]>(``, {
    headers: {
      // 'Cache-Control': 'no-store',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    },
  })
}

export const getProducts = async ({ category_id, subcategory_id }: { category_id?: number, subcategory_id?: number }) => {

  return await axios.get<IProduct[]>(
    ``, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    },
  })
}

export const getProduct = async (productId: number | string) => {
  return await axios.get<IProduct>(``, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    },
  })
}

export const getRecommendProducts = async () => {
  return await axios.get<IRecommendedProducts[]>(`${process.env.URL}`, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    },
  })
}

export const getReviews = async () => {
  return await axios.get<IReview[]>(`${process.env.URL}`, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    },
  })
}

export const getFaq = async () => {
  return await axios.get<IFaq[]>(`${process.env.URL}`, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    },
  })
}

export const getContacts = async () => {
  return await axios.get<IContacts[]>(`${process.env.URL}`, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    },
  })
}

export const getCategories = async () => {
  return await axios.get<ICategories[]>(`${process.env.URL}`, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    },
  })
}

export const sendOrder = async (orderData: IOrder) => {
  return await axios.post(`${DOMAIN}`, { ...orderData })
}

export const sendReview = async (reviewData: IReview) => {
  return await axios.post(`${DOMAIN}`, { ...reviewData })
}

export const sendMailing = async (email: string) => {
  return await axios.post(`${DOMAIN}`, { email })
}

