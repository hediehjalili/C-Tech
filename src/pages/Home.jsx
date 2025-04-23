import ProjectCard from "../components/ProjectCard";

const featuredProjects = [
  {
    id: 1,
    title: "Modern Villa",
    image: "./src/assets/HAC_photo_by_Iwan_Baan_2.jpg",
  },
  {
    id: 2,
    title: "Urban Office",
    image:
      "./src/assets/101_Worlds_Best_Modern_Architecture_Buildings_Main_Neuroject_0-1024x705.jpg",
  },
  { id: 3, title: "Classic", image: "./src/assets/images (1).jpeg" },
  {
    id: 4,
    title: " House",
    image: "./src/assets/modern-building-6252024-1024x1024.jpg",
  },
];

const Home = () => (
  <section className="px-6 py-8">
    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
    <p className="text-gray-600 mb-6">
      We design meaningful spaces with elegance and purpose.
    </p>
    <h3 className="text-xl font-semibold mb-4">Featured Projects</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Home;
