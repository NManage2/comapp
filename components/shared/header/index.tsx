import Image from "next/image"
import Link from "next/link"
import Menu from "./menu"
import Search from "./search"
import data from "@/lib/data"
import { APP_NAME } from "@/lib/constants"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function Header() {
  return (
    <header className="bg-black text-white">
      <div className="px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="header-button m-1 flex items-center text-2xl font-extrabold"
            >
              <Image
                src="/icons/logo.svg"
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
              />
              {APP_NAME}
            </Link>
          </div>

          <div className="hidden max-w-xl flex-1 md:block">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="block py-2 md:hidden">
          <Search />
        </div>
      </div>
      <div className="mb-[1px] flex items-center bg-gray-800 px-3">
        <Button
          variant="ghost"
          className="header-button flex items-center gap-1 text-base [&_svg]:size-6"
        >
          <MenuIcon />
          All
        </Button>
        <div className="flex max-h-[42px] flex-wrap items-center gap-3 overflow-hidden">
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className="header-button !p-2"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
