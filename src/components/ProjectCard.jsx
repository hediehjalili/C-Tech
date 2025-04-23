import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, image }) => (
  <Link
    to={`/project/${id}`}
    className="block border rounded overflow-hidden shadow hover:shadow-md transition"
  >
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4 text-center">{title}</div>
  </Link>
);

export default ProjectCard;
