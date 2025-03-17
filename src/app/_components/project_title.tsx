"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectTileProps {
  name: string;
  link: string;
  logo?: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ name, link, logo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full bg-white flex items-center rounded-lg shadow-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-2xl p-4 ${logo ? "h-28" : "h-20"}`}
    >
      <Link href={link} className="w-full h-full flex items-center gap-4">
        {logo && <img src={logo} alt={`${name} logo`} className="h-16 w-16 object-contain rounded-md" />}
        <div className="text-2xl font-semibold text-gray-900 text-left flex-1">
          {name}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectTile;