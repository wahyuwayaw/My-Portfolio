import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";
import { translations } from "../../data/translations";

// Data detail proyek diambil langsung dari translations agar selalu sinkron
// dengan daftar proyek di halaman utama.
const projectsData = Object.fromEntries(
  translations.id.projects.items.map((project) => [project.id, project])
);

export async function generateStaticParams() {
  // Ambil semua kunci slug dari objek projectsData
  const projectSlugs = Object.keys(projectsData);

  // Map setiap slug menjadi format yang diharapkan Next.js: { slug: string }
  return projectSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectDetail({ params }) {
  const project = projectsData[params.slug];

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}