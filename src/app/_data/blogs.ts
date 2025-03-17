import { db } from "../../server/db";

export async function getAllBlogPosts() {
  try {
    const posts = await db.post.findMany({
      select: {
        id: true,
        title: true,
        summary: true,
        content: true,
        imageName: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return []; // Return an empty array if an error occurs
  }
}
