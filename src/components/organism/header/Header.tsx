import {
  Heart,
  Search,
  ShoppingBag,
  Menu,
  User,
} from "lucide-react"
import Link from "next/link"
import { HeaderWrapper } from "./styles";

const Header = () => {
    return ( 
        <HeaderWrapper>
                  <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                ShopHub
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link
                  href="/categories"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Categories
                </Link>
                <Link href="/deals" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Deals
                </Link>
                <Link href="/new" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  New Arrivals
                </Link>
                <Link
                  href="/brands"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Brands
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2 w-64">
                <Search className="h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent border-0 outline-none flex-1 text-sm"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <ShoppingBag className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <User className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden">
                <Menu className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>
        </HeaderWrapper>
     );
}
 
export default Header;