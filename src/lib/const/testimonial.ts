import { Testimonials } from "@/interface/Testimonials";
import avatar1Img from '@/assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
import avatar2Img from '@/assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import avatar3Img from '@/assets/jake-nackos-IF9TK5Uy-KI-unsplash.jpg'

export const testimonial: Testimonials[] = [
  {
    name: "Sarah Johnson",
    role: "Verified Buyer",
    content:
      "Amazing quality products and super fast shipping! I've been shopping here for months and never disappointed.",
    rating: 5,
    avatar: avatar1Img,
  },
  {
    name: "Mike Chen",
    role: "Verified Buyer",
    content:
      "Great customer service and competitive prices. The return process was seamless when I needed to exchange an item.",
    rating: 5,
    avatar: avatar2Img,
  },
  {
    name: "Emily Davis",
    role: "Verified Buyer",
    content:
      "Love the variety of products available. Found exactly what I was looking for at a great price point.",
    rating: 5,
    avatar: avatar3Img,
  },
];
