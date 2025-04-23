import ProjectCard from "../components/ProjectCard";

const featuredProjects = [
  {
    id: 1,
    title: "Modern Villa",
    image: "./assets/HAC_photo_by_Iwan_Baan_2.jpg",
  },
  {
    id: 2,
    title: "Urban Office",
    image:
      "./assets/101_Worlds_Best_Modern_Architecture_Buildings_Main_Neuroject_0-1024x705.jpg",
  },
  {
    id: 3,
    title: "Minimal",
    image:
      "./assets/Abstract-Minimalist-Architecture-Design-Apartment-Cape-Town-South-Africa_2.jpg",
  },
  {
    id: 4,
    title: " House",
    image: "./assets/modern-building-6252024-1024x1024.jpg",
  },
  {
    id: 5,
    title: " Classic",
    image: "./assets/images (1).jpeg",
  },
];

const Home = () => (
  <section className="px-6 py-8">
    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
    <div className="text-gray-600 mb-6">
      “We design spaces that inspire.” Our mission is to shape environments that
      balance form and function, embracing modern aesthetics, sustainability,
      and human-centered design. We believe architecture should not only serve a
      purpose, but also elevate experience—from the home to the workplace, and
      every meaningful space in between.We don’t just create buildings — we
      shape experiences. We believe that great architecture begins with purpose.
      Every line drawn, every material chosen, every space defined — all are
      guided by intent. Our goal is not just to make things look beautiful, but
      to make them work beautifully. A home that flows effortlessly. An office
      that sparks creativity. A public space that invites connection.
    </div>
    <h3 className="text-xl font-semibold mb-4">Featured Projects</h3>
    <div className="text-gray-600 mb-6">
      We are inspired by the clarity of modern design — its clean lines, open
      plans, and quiet confidence. We embrace simplicity, but not at the cost of
      richness. We believe that restraint is a form of luxury — and that what
      you leave out is just as important as what you include. Our style is
      modern, but never cold. Minimal, but never empty. Structured, but never
      rigid.
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Home;
