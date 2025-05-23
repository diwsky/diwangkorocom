import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"

// Mock data for blog posts
const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js and Django",
    slug: "getting-started-with-nextjs-and-django",
    excerpt: "Learn how to build a full-stack application using Next.js for the frontend and Django for the backend.",
    created_at: "2023-05-10T12:00:00Z",
  },
  {
    id: 2,
    title: "Building a Personal Blog with Modern Technologies",
    slug: "building-personal-blog-with-modern-technologies",
    excerpt: "A step-by-step guide to creating your own personal blog using the latest web technologies.",
    created_at: "2023-05-15T12:00:00Z",
  },
  {
    id: 3,
    title: "The Power of Server-Side Rendering",
    slug: "power-of-server-side-rendering",
    excerpt: "Explore the benefits of server-side rendering and how it can improve your web application's performance.",
    created_at: "2023-05-20T12:00:00Z",
  },
]

export default function BlogPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
          <p className="text-gray-500 md:text-xl/relaxed">Thoughts, stories, and ideas from my journey.</p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="space-y-4 border-b pb-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight group-hover:underline">{post.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=200&width=600&text=${encodeURIComponent(post.title)}`}
                    alt={post.title}
                    width={600}
                    height={200}
                    className="object-cover w-full h-48 transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="text-gray-500">{post.excerpt}</p>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900 group-hover:underline">Read more</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
