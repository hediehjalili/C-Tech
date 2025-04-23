import ProjectCard from "../components/ProjectCard";

const allProjects = [
  {
    id: 1,
    title: "Modern Villa",
    image:
      "/src/assets/Abstract-Minimalist-Architecture-Design-Apartment-Cape-Town-South-Africa_2.jpg",
  },
  {
    id: 2,
    title: "Urban Office",
    image: "/src/assets/istockphoto-1151903312-612x612.jpg",
  },
  {
    id: 3,
    title: "Eco House",
    image: "/src/assets/columbia-heights-torti1.jpg",
  },
  {
    id: 4,
    title: "Minimal Loft",
    image: "/src/assets/modern-building-6252024-1024x1024.jpg",
  },
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
