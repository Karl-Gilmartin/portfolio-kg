import { supabase } from "../utils/supabaseClient";

export function getImageUrl(imageName: string) {
  if (!imageName) return "/assets/blog-placeholder.svg"; // Default image

  const encodedImageName = encodeURIComponent(imageName.trim()); // ✅ Handles spaces & special characters

  return `https://ywquarntyzubofgiuugs.supabase.co/storage/v1/object/public/portfolio-blog-images/${encodedImageName}`;
}
