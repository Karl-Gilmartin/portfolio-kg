import { db } from "../../server/db";

export async function getAllBlogPosts() {
  return await db.post.findMany({
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
}