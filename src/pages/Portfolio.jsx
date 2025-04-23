import ProjectCard from "../components/ProjectCard";

const allProjects = [
  { id: 1, title: "Modern Villa", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Urban Office", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Eco House", image: "https://via.placeholder.com/300" },
  { id: 4, title: "Minimal Loft", image: "https://via.placeholder.com/300" },
];

const Portfolio = () => (
  <section className="px-6 py-8">
    <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;