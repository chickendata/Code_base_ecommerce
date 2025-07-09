import { categories } from "@/lib/const/categories";
import Image from "next/image";

const Categories = () => {
    return ( 
              <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our wide range of categories and find exactly what you&apos;re looking for.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="p-6">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-1 text-gray-900">{category.name}</h3>
                  <p className="text-gray-500 text-center text-sm">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     );
}
 
export default Categories;