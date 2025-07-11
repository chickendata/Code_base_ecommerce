import { Categories } from "@/interface/Categories";
import electronicImg from '@/assets/electronic.jpg'
import fashionImg from '@/assets/fashion.png'
import gardenImg from '@/assets/garden.jpg'
import sportsImg from '@/assets/sports.jpg'

export const categories: Categories[] = [
  {
    name: "Electronics",
    image: electronicImg,
    count: "1,234 items",
  },
  {
    name: "Fashion",
    image: fashionImg,
    count: "2,567 items",
  },
  {
    name: "Home & Garden",
    image: gardenImg,
    count: "890 items",
  },
  {
    name: "Sports",
    image: sportsImg,
    count: "456 items",
  },
];
