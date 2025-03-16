import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import NavBar from "./_components/navbar";
import Footer from "./_components/footer";
import DottedBackground from "./_components/dotted_background";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <div>
    <NavBar/>
    <DottedBackground/>
    <Footer/>
    
  
    </div>
  );
}
