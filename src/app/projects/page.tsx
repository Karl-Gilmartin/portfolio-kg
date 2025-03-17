import { log } from "console";
import DottedBackground from "../_components/dotted_background";
import Footer from "../_components/footer";
import NavBar from "../_components/navbar";
import ProjectTile from "../_components/project_title";

const projects = [
  { name: "BioTrail", link: "/bio-trail", logo: "/assets/bio_trail.png" },
  { name: "Portfolio", link: "/portfolio" }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <DottedBackground />
      <NavBar />
      <main className="flex-1 container mx-auto px-20 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

        {/* Ensure tiles are stacked vertically */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectTile key={index} name={project.name} link={project.link} logo={project.logo} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
