import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

type CardItem = {
  title: string
  link: { text: string; href: string }
  items: {
    name: string
    items?: string[]
    image: string
    href: string
  }[]
}

export function HomeCard({ cards }: { cards: CardItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title} className="flex flex-col rounded-none">
          <CardContent className="flex-1 p-4">
            <h3 className="mb-4 text-xl font-bold">{card.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {card.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="mx-auto aspect-square h-auto max-w-full object-scale-down"
                    height={120}
                    width={120}
                  />
                  <p className="overflow-hidden text-center text-sm text-ellipsis whitespace-nowrap">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </CardContent>
          {card.link && (
            <CardFooter>
              <Link href={card.link.href} className="mt-4 block">
                {card.link.text}
              </Link>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  )
}
