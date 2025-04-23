import { useParams } from "react-router-dom";

const dummyProject = {
  title: "Modern Villa",
  description: "A beautiful modern villa in the hills.",
  images: [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
  ],
};

const ProjectDetail = () => {
  const { id } = useParams(); // in real case you’d fetch data based on id
  return (
    <section className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">{dummyProject.title}</h2>
      <p className="mb-6 text-gray-700">{dummyProject.description}</p>
      <div className="grid gap-4">
        {dummyProject.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="rounded-md"
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectDetail;
