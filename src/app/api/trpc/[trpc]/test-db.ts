import { NextResponse } from "next/server";
import { db } from "../../../../server/db"; // ✅ Ensure this path is correct

export async function GET() {
  try {
    const posts = await db.post.findMany({
      orderBy: { createdAt: "desc" }, // Sort by latest posts
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
