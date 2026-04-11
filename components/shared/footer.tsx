"use client"
import { ChevronUp } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export default function Footer() {
  return (
    <footer className="underline-link bg-black text-white">
      <div className="w-full">
        <Button
          variant="ghost"
          className="w-full rounded-none bg-gray-800"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back to top
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/conditions-of-use">Conditions of Use</Link>
          <Link href="/page/privacy-policy">Privacy Notice</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p> © copyright</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          Cité 550 Lgt Numerate | (213) 696293772
        </div>
      </div>
    </footer>
  )
}
