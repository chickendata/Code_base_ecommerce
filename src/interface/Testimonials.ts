import { StaticImageData } from "next/image"

export interface Testimonials {
    name: string
    role: string
    content: string
    rating: number
    avatar: StaticImageData
}