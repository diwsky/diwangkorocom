import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Hi, I'm <span className="text-gray-900">Your Name</span>
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Welcome to my personal website. I'm a developer, writer, and thinker sharing my journey and insights
                through my blog.
              </p>
              <div className="flex flex-col md:flex-row gap-3">
                <Link
                  href="/blog"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                >
                  Read My Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                >
                  About Me
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Featured Posts</h2>
              <p className="text-gray-500 md:text-lg">Check out some of my latest thoughts and writings.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[1, 2, 3].map((i) => (
                <Link key={i} href={`/blog/post-${i}`} className="group">
                  <div className="space-y-3">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=Post+${i}`}
                        alt={`Post ${i}`}
                        width={400}
                        height={200}
                        className="object-cover w-full h-48 transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-lg group-hover:underline">Sample Blog Post {i}</h3>
                      <p className="text-sm text-gray-500">
                        This is a brief description of what this blog post is about. Click to read more.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>May {i + 9}, 2023</span>
                        <span>•</span>
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline">
              View all posts
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
