import { Product } from "@/interface/Product";
import wirelessImg from '@/assets/wireless_headphone.jpg'
import watchImg from '@/assets/smart_watch.jpg'
import backpackImg from '@/assets/backpack.jpg'
import speakerImg from '@/assets/speaker.jpg'

export const product: Product[] = [
  {
    name: "Wireless Headphones",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 124,
    image: wirelessImg,
  },
  {
    name: "Smart Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 89,
    image: watchImg,
  },
  {
    name: "Laptop Backpack",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviews: 203,
    image: backpackImg,
  },
  {
    name: "Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 156,
    image: speakerImg,
  },
];
