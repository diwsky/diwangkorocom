import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Diwangkoro. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/diwsky" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 text-gray-500 hover:text-gray-900" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://x.com/wankero" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5 text-gray-500 hover:text-gray-900" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://www.linkedin.com/in/diwangkoro-28ab76129/" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5 text-gray-500 hover:text-gray-900" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
