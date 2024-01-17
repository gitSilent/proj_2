export interface IFaq {
  title: string,
  description: string,
}

export interface IContacts {
  facebook: string,
  viber: string,
  vk: string,
  telegram: string,
  whatsapp: string,
  instagram: string
}

export interface ISlider {
  image: string,
  product: IProduct
}

export interface IReview {
  name: string,
  phone: string,
  email: string,
  text: string,
  image?: string
}

export interface IProduct {
  id: number,
  category: {
    id: number,
    title: string
  },
  subcategory: {
    id: number,
    title: string,
    category: number
  },
  specification: {
    colors: string,
    sizes: string,
    weight: string,
    materials: string,
    trim: string
  },
  photos: [
    {
      photo: string
    }
  ],
  name: string,
  title: string,
  description: string,
  cost: number,
  cost_with_discount: number,
  is_published: boolean
}

export interface IRecommendedProducts {
  product: {
    id: number,
    category: {
      id: number,
      title: string
    },
    subcategory: {
      id: number,
      title: string,
      category: number
    },
    specification: {
      colors: string,
      sizes: string,
      weight: string,
      materials: string,
      trim: string
    },
    photos: [
      {
        photo: string
      }
    ],
    name: string,
    title: string,
    description: string,
    cost: number,
    cost_with_discount: number,
    is_published: boolean
  },
}

export interface ICategories {
  id: number,
  products_count: number,
  title: string
}

export interface IOrder {
  photo?: string | ArrayBuffer | null,
  name?: string,
  phone?: string,
  email: string,
  message?: string,
  unique?: boolean,
  product?: number,
  amount?: number
}