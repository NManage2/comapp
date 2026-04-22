"use client"
import { cn, formatCurrency } from "@/lib/utils"

const ProductPrice = ({
  price,
  className,
  listPrice = 0,
  isDeal = false,
  forListing = true,
  plain = false,
}: {
  price: number
  isDeal?: boolean
  listPrice?: number
  className?: string
  forListing?: boolean
  plain?: boolean
}) => {
  const discountPercent = Math.round(100 - (price / listPrice) * 100)
  const stringValue = price.toString()
  const [intValue, floatValue] = stringValue.includes(".")
    ? stringValue.split(".")
    : [stringValue, ""]

  return plain ? (
    formatCurrency(price)
  ) : listPrice == 0 ? (
    <div className={cn("text-3xl", className)}>
      <span className="align-super text-xs">$</span>
      {intValue}
      <span className="align-super text-xs">{floatValue}</span>
    </div>
  ) : isDeal ? (
    <div className="space-y-2">
      <div className="flex items-center justify-center gap-2">
        <span className="rounded-sm bg-red-700 p-1 text-sm font-semibold text-white">
          {discountPercent}% Off
        </span>
        <span className="text-xs font-bold text-red-700">
          limited time deal
        </span>
      </div>
      <div
        className={`flex ${forListing && "justify-center"} items-center gap-2`}
      >
        <div className={cn("text-3xl", className)}>
          <span className="align-super text-xs">$</span>
          {intValue}
          <span className="align-super text-xs">{floatValue}</span>
        </div>
        <div className="py-2 text-xs text-muted-foreground">
          Was:
          <span className="line-through">{formatCurrency(listPrice)}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="">
      <div className="flex justify-center gap-3">
        <div className="text-3xl text-orange-700">-{discountPercent}%</div>
        <div className={cn("text-3xl", className)}>
          <span className="align-super text-xs">$</span>
          {intValue}
          <span className="align-super text-xs">{floatValue}</span>
        </div>
      </div>
      <div className="py-2 text-xs text-muted-foreground">
        list price:{" "}
        <span className="line-through">{formatCurrency(listPrice)}</span>
      </div>
    </div>
  )
}

export default ProductPrice
