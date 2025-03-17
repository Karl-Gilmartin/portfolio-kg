import { api } from "~/trpc/server";
import NavBar from "../_components/navbar";
import Footer from "../_components/footer";
import DottedBackground from "../_components/dotted_background";
import BlogCard from "../_components/blog_card";
import { getAllBlogPosts } from "../_data/blogs";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="flex flex-col min-h-screen relative">
      <DottedBackground />
      <NavBar />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <div className="flex flex-col space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => <BlogCard key={post.id} post={post} />)
          ) : (
            <p className="text-center text-gray-500">No blog posts found.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}