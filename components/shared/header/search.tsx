import { Search as SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select"
import { APP_NAME } from "@/lib/constants"

const categories = ["men", "women", "kids", "accessories"]

export default async function Search() {
  return (
    <form
      action="/search"
      method="GET"
      className="flex h-10 w-full max-w-2xl items-center"
    >
      <Select name="category">
        <SelectTrigger className="h-full w-auto rounded-l-md rounded-r-none border-r bg-gray-100 py-0 text-black rtl:rounded-l-none rtl:rounded-r-md dark:border-gray-200">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        className="h-full flex-1 rounded-none bg-gray-100 text-base text-black dark:border-gray-200"
        placeholder={`Search Site'${APP_NAME}`}
        name="q"
        type="search"
      />
      <button
        type="submit"
        className="h-full rounded-s-none rounded-e-md bg-primary px-3 py-2 text-black text-primary-foreground"
      >
        <SearchIcon className="h-6 w-6" />
      </button>
    </form>
  )
}
