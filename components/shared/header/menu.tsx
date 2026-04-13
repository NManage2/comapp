import { ShoppingCartIcon, UserIcon } from "lucide-react"

import Link from "next/link"

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex w-full gap-3">
        <Link href="/signin" className="header-button flex items-center">
          Hello, Sign in
        </Link>
        <Link href="/cart" className="header-button">
          <ShoppingCartIcon className="h-8 w-8" />
          <span className="font-bold">Cart</span>
        </Link>
      </nav>
    </div>
  )
}

export default Menu
