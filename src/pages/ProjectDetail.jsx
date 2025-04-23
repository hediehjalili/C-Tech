// src/pages/ProjectDetail.jsx
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// دیتا
const projects = [
  {
    id: "1",
    title: "Modern Villa",
    description: "A beautiful modern villa in the hills.",
    images: [
      "/assets/image/istockphoto-476190573-612x612.jpg",
      "/assets/101_Worlds_Best_Modern_Architecture_Buildings_Main_Neuroject_0-1024x705.jpg",
      "/assets/modern-building-6252024-1024x1024.jpg",
    ],
  },
  {
    id: "2",
    title: "Urban Office",
    description: "A stylish office in the city center.",
    images: [
      "/assets/Minimalist-home-office-IKEA-desk-hack-4.jpg",
      "/assets/j.jpg",
    ],
  },
  {
    id: "3",
    title: "Urban Apartment",
    description: "Urban Apartment in the city center.",
    images: [
      "/assets/unieditorial2025-01-29T10-00-28-339191.jpg",
      "/assets/columbia-heights-torti1.jpg",
      "/assets/istockphoto-1151903312-612x612.jpg",
    ],
  },
  {
    id: "4",
    title: "House",
    description: "house in the city center.",
    images: ["/src/assets/hq720.jpg"],
  },
  {
    id: "5",
    title: "Classic",
    description: "Classic Manison in the city.",
    images: [
      "/src/assets/C0BF3FE8B51EE4BFCBFE7F1489402FCA4E7A0200.jpg",
      "/src/assets/360_F_508715332_5LsqlN3pvgLpbg99r0CSPGUgNMCdmIZl.jpg",
      "/src/assets/images (1).jpeg",
    ],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-6 text-red-600 font-bold">
        پروژه‌ای با این شناسه پیدا نشد.
      </div>
    );
  }

  return (
    <section className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">{project.title}</h2>
      <p className="mb-6 text-gray-700 text-center">{project.description}</p>

      {/* اسلایدر تصاویر */}
      <div className="max-w-2xl mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {project.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-80 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectDetail;
