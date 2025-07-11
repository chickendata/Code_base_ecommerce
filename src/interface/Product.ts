import { StaticImageData } from "next/image"

export interface Product {
    name: string
    price: number
    originalPrice: number
    rating: number
    reviews: number
    image: StaticImageData
}