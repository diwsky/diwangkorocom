import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Diwangkoro</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Laboratory
            </Button>
          </div>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden ml-auto">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  )
}
