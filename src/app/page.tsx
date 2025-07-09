'use client'
import Categories from "@/components/organism/Categories";
import Features from "@/components/organism/Features";
import Footer from "@/components/organism/footer/Footer";
import Header from "@/components/organism/header/Header";
import Hero from "@/components/organism/Hero";
import NewsLetter from "@/components/organism/NewsLetter";
import Product from "@/components/organism/Product";
import Testimonials from "@/components/organism/Testimonials";
import MainTemplate from "@/components/template/MainTemplate";

export default function Home() {
  return (
    <div>
      <MainTemplate header={<Header />} footer={<Footer />}>
        <Hero />
        <Features />
        <Categories />
        <Product />
        <Testimonials />
        <NewsLetter />
      </MainTemplate>
    </div>
  );
}
