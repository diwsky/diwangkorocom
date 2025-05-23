import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

// Mock data for blog posts
const posts = {
  "getting-started-with-nextjs-and-django": {
    title: "Getting Started with Next.js and Django",
    created_at: "2023-05-10T12:00:00Z",
    content: `
      <p>Next.js and Django make a powerful combination for building full-stack web applications. Next.js provides a modern frontend experience with React, while Django offers a robust backend with its admin interface and ORM.</p>
      
      <h2>Setting Up Your Environment</h2>
      <p>First, you'll need to set up your development environment. Make sure you have Node.js and Python installed on your machine.</p>
      
      <h3>Creating a Next.js Project</h3>
      <p>To create a new Next.js project, run the following command:</p>
      <pre><code>npx create-next-app my-project</code></pre>
      
      <h3>Setting Up Django</h3>
      <p>For the Django backend, you'll need to create a new Django project:</p>
      <pre><code>pip install django djangorestframework django-cors-headers
django-admin startproject backend</code></pre>
      
      <h2>Connecting Frontend and Backend</h2>
      <p>To connect your Next.js frontend with your Django backend, you'll need to set up API endpoints in Django and fetch data from those endpoints in Next.js.</p>
      
      <p>This is just the beginning of your journey with Next.js and Django. In future posts, we'll explore more advanced topics like authentication, deployment, and more.</p>
    `,
  },
  "building-personal-blog-with-modern-technologies": {
    title: "Building a Personal Blog with Modern Technologies",
    created_at: "2023-05-15T12:00:00Z",
    content: `
      <p>Creating a personal blog is a great way to share your thoughts and experiences with the world. With modern web technologies, it's easier than ever to build a fast, responsive, and feature-rich blog.</p>
      
      <h2>Choosing Your Tech Stack</h2>
      <p>When building a personal blog, you have many options for your tech stack. Some popular choices include:</p>
      <ul>
        <li>Next.js for the frontend</li>
        <li>Django or Node.js for the backend</li>
        <li>Tailwind CSS for styling</li>
        <li>PostgreSQL or MongoDB for the database</li>
      </ul>
      
      <h2>Key Features for a Personal Blog</h2>
      <p>A good personal blog should have the following features:</p>
      <ul>
        <li>Responsive design that works on all devices</li>
        <li>Fast loading times for a good user experience</li>
        <li>SEO optimization to help people find your content</li>
        <li>Easy content management for adding new posts</li>
        <li>Comments section for reader engagement</li>
      </ul>
      
      <p>In the next part of this series, we'll dive deeper into implementing these features and setting up your blog for success.</p>
    `,
  },
  "power-of-server-side-rendering": {
    title: "The Power of Server-Side Rendering",
    created_at: "2023-05-20T12:00:00Z",
    content: `
      <p>Server-Side Rendering (SSR) is a technique that allows web servers to render HTML on the server before sending it to the client. This approach offers several benefits over traditional client-side rendering.</p>
      
      <h2>Benefits of Server-Side Rendering</h2>
      <p>Here are some key advantages of using SSR:</p>
      <ul>
        <li>Improved SEO: Search engines can better index your content</li>
        <li>Faster initial page load: Users see content sooner</li>
        <li>Better performance on low-powered devices</li>
        <li>Improved accessibility</li>
      </ul>
      
      <h2>Implementing SSR with Next.js</h2>
      <p>Next.js makes it easy to implement SSR in your React applications. By default, Next.js pre-renders every page, meaning it generates HTML for each page in advance instead of relying on client-side JavaScript.</p>
      
      <p>Next.js offers two forms of pre-rendering:</p>
      <ul>
        <li>Static Generation: HTML is generated at build time</li>
        <li>Server-Side Rendering: HTML is generated on each request</li>
      </ul>
      
      <p>In future posts, we'll explore how to choose between these options and implement them effectively in your applications.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to all posts
        </Link>

        <article className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
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
              src={`/placeholder.svg?height=300&width=800&text=${encodeURIComponent(post.title)}`}
              alt={post.title}
              width={800}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>

          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  )
}
