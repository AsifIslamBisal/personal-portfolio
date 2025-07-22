import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useRef } from "react"; // Import useRef
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"; // Import slider icons

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectSwiperRefs = useRef({}); // Ref to store Swiper instances for each project
  const popupSwiperRef = useRef(null); // Ref for the popup Swiper

  const projects = [
    // ... (your projects array remains the same) ...
    {
      title: "Product Launch Platform (Inspired by Product Hunt)",
      description:
        "A full-featured product launch platform inspired by Product Hunt, built using the MERN stack (MongoDB, Express.js, React, Node.js).This platform allows users to discover, upvote, review, and discuss the latest tech products. It also features role-based authentication, moderation tools, reporting systems, and search functionality with pagination. Admins can manage products, users, and coupons through a dedicated dashboard.Key functionalities include: 1. User authentication & authorization (JWT-based) 2. Product submission, review, and voting 3. Admin dashboard for product, user, and coupon management 4. Payment integration for premium features 5. Search, filtering, and pagination for better UX  admin login: admin id: admin@gmail.com pass: Admin@123",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Daisy ui",
        "Stripe"
      ],
      featured: true,
      images: [
        "/images/project1/img1.png",
        "/images/project1/img2.png",
        "/images/project1/img3.png",
        "/images/project1/img4.png",
        "/images/project1/img5.png",
        "/images/project1/img6.png",
        "/images/project1/img7.png",
        "/images/project1/img8.png",
        "/images/project1/img9.png",
        "/images/project1/img10.png",
        "/images/project1/img11.png",
        "/images/project1/img12.png",
      ],
      sourceCode: "https://github.com/AsifIslamBisal/Product-hunter-client",
      liveLink: {
        url: "https://product-hunt-f43f1.web.app/",
        text: "Live Link",
      },
    },
    {
      title: "🏢 BlueSky Residences",
      description:
        "BlueSky Residences is a modern and user-friendly web platform where users can easily discover and book luxurious apartments and real estate units. The project utilizes React.js and Tailwind CSS for the frontend and Express.js and MongoDB for the backend. Users can filter, search, book, and review available units. An admin dashboard allows full control over bookings and user management.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Firebase",
        "Express.js",
        "MongoDB",
        
        
      ],
      featured: true,
      images: [
        "/images/project2/img1.png",
        "/images/project2/img2.png",
        "/images/project2/img3.png",
        "/images/project2/img4.png",
        "/images/project2/img5.png",
        
      ],
      sourceCode: "https://github.com/AsifIslamBisal/hotel-booking-client",
      liveLink: {
        url: "https://hotel-booking-project-aa7bf.web.app/",
        text: "Live Link",
      },
    },
    {
      title: "Type Racer Game (simple Level)",
      description:
        "A simple but interactive typing speed game built using HTML, CSS, and vanilla JavaScript. This project focuses on DOM manipulation, user interaction, and basic timing logic.",
      tags: [
        "Html",
        "Css",
        "JavaScript",
        
      ],
      featured: true,
      images: [
        "/images/project3/img1.png",
        "/images/project3/img2.png",
        "/images/project3/img3.png",
        
      ],
      sourceCode: "https://github.com/AsifIslamBisal/typing-race-game",
      liveLink: {
        url: "https://neon-tanuki-a3dc4d.netlify.app/",
        text: "Live Link",
      },
    },
    
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const handlePrevSlide = (index) => {
    if (projectSwiperRefs.current[index]) {
      projectSwiperRefs.current[index].swiper.slidePrev();
    }
  };

  const handleNextSlide = (index) => {
    if (projectSwiperRefs.current[index]) {
      projectSwiperRefs.current[index].swiper.slideNext();
    }
  };

  const handlePopupPrevSlide = () => {
    if (popupSwiperRef.current) {
      popupSwiperRef.current.swiper.slidePrev();
    }
  };

  const handlePopupNextSlide = () => {
    if (popupSwiperRef.current) {
      popupSwiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="pt-40 pb-10 px-10 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-[2px] bg-gray-900/80 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className=""
                onSwiper={(swiper) =>
                  (projectSwiperRefs.current[index] = { swiper })
                }
              >
                {project.images.map((img, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img
                      src={img}
                      alt={`${project.title} - ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {project.images.length > 1 && (
                <div className="absolute bottom-5 left-0 w-full flex justify-between items-center px-4 z-10">
                  <button
                    className="bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handlePrevSlide(index);
                    }}
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    className="bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handleNextSlide(index);
                    }}
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            <Card
              className="p-5"
              style={{
                background:
                  "linear-gradient(to bottom right, #09001d, #2b012e)",
              }}
              onClick={() => handleProjectClick(project)}
            >
              <MacOsButtons />
              <CardHeader>
                <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                  Featured Project
                </div>
                <CardTitle className="text-slate-100 text-3xl font-bold">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="mt-4 sm:h-[400px] lg:h-[320px] flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    {project.description.substring(0, 150)}...
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm cursor-pointer font-medium rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 transition-all hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex pt-5 justify-between">
                  {project.liveLink && project.liveLink.url ? (
                    <a
                      href={project.liveLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      {project.liveLink.text}
                    </a>
                  ) : null}
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 p-10 rounded-xl w-4/5 max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
              onClick={handleClosePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-4xl font-bold text-slate-100 mb-6">
              {selectedProject.title}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm cursor-pointer font-medium rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 transition-all hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="relative">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className="mb-8"
                onSwiper={(swiper) => (popupSwiperRef.current = { swiper })}
              >
                {selectedProject.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {selectedProject.images.length > 1 && (
                <div className="absolute top-1/2 left-0 w-full flex justify-between items-center transform -translate-y-1/2 px-4 z-10">
                  <button
                    className="bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={handlePopupPrevSlide}
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    className="bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={handlePopupNextSlide}
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
            <div className="flex justify-between">
              {selectedProject.liveLink && selectedProject.liveLink.url ? (
                <a
                  href={selectedProject.liveLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 p-2 hover:text-blue-300 font-semibold transition-colors rounded-md border border-blue-400"
                >
                  {selectedProject.liveLink.text}
                </a>
              ) : null}
              <a
                href={selectedProject.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 p-2 hover:text-green-300 font-semibold transition-colors rounded-md border border-green-400"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
