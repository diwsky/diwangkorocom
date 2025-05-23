// Base URL for the Django API
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

// Fetch all blog posts
export async function getAllPosts() {
  const res = await fetch(`${API_URL}/posts/`)

  if (!res.ok) {
    throw new Error("Failed to fetch posts")
  }

  return res.json()
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/posts/${slug}/`)

  if (!res.ok) {
    if (res.status === 404) {
      return null
    }
    throw new Error("Failed to fetch post")
  }

  return res.json()
}
