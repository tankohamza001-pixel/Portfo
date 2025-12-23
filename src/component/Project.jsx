"use client";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Fixed Project data
  const projects = [
    {
      id: 1,
      image: "/mine.png",
      title: "MH jallabiya (1)",
      shortDesc: "MH COLLECTION Every pattern is more than fashion—it is a visual language...",
      fullDesc: "MH COLLECTION Every pattern is more than fashion—it is a visual language, telling stories of culture, tradition, and beauty through design."
    },
    {
      id: 2,
      image: "/mine1.png",
      title: "MH jallabiya (2)",
      shortDesc: "MH COLLECTION Every pattern is more than fashion—it is a visual language...",
      fullDesc: "MH COLLECTION Every pattern is more than fashion—it is a visual language, highlighting the beauty of tradition in every stitch."
    },
    {
      id: 3,
      image: "/mine2.png",
      title: "MH jallabiya (3)",
      shortDesc: "Every pattern is more than fashion—it is a visual language...",
      fullDesc: "Every pattern is more than fashion—it is a visual language, telling stories of culture, tradition, and beauty through design."
    },
    {
      id: 4,
      image: "/mine3.png",
      title: "MH jallabiya (4)",
      shortDesc: "Every pattern is more than fashion—it is a visual language...",
      fullDesc: "Every pattern is more than fashion—it is a visual language, telling stories of culture, tradition, and beauty through design."
    },
    {
      id: 5,
      image: "/mine4.png",
      title: "Where creativity meets tradition",
      shortDesc: "Fusion of heritage and modern creativity...",
      fullDesc: "This project explores the fusion of heritage and modern creativity. Each design reflects elegance, meaning, and unique identity woven into fabric."
    },
    {
      id: 6,
      image: "/mine5.png",
      title: "Every pattern tells a story",
      shortDesc: "Through colors, shapes, and textures, this work highlights...",
      fullDesc: "Through colors, shapes, and textures, this work highlights the timeless bond between art and identity."
    },
    {
      id: 7,
      image: "/jl5.png",
      title: "Every pattern tells a story",
      shortDesc: "Through colors, shapes, and textures, this work highlights...",
      fullDesc: "Through colors, shapes, and textures, this work highlights the timeless bond between art and identity."
    },
    {
      id: 8,
      image: "/mine7.png",
      title: "Every pattern tells a story",
      shortDesc: "Through colors, shapes, and textures, this work highlights...",
      fullDesc: "Through colors, shapes, and textures, this work highlights the timeless bond between art and identity."
    },
    {
      id: 9,
      image: "/mine8.png",
      title: "Every pattern tells a story",
      shortDesc: "Through colors, shapes, and textures, this work highlights...",
      fullDesc: "Through colors, shapes, and textures, this work highlights the timeless bond between art and identity."
    },
    {
      id: 10,
      image: "/mine9.png",
      title: "MUFTI HAMXHA COLLECTION",
      shortDesc: "Luxury is in every detail, crafted to shine beyond time...",
      fullDesc: "Luxury is in every detail, crafted to shine beyond time. This project emphasizes the elegance of handcrafted beauty with modern precision."
    },
    {
      id: 11,
      image: "/mine10.png",
      title: "MH COLLECTION",
      shortDesc: "Every jewelry tells a story of grace and timeless beauty...",
      fullDesc: "Every jewelry tells a story of grace, strength, and timeless beauty, honoring cultural craftsmanship passed through generations."
    },
    {
      id: 12,
      image: "/jl.png",
      title: "MH COLLECTION",
      shortDesc: "Nature's elegance captured in gold...",
      fullDesc: "Nature's elegance captured in gold — a symbol of heritage and style. Each curve reflects inspiration from the organic beauty of leaves."
    },
    {
      id: 13,
      image: "/jl1.png",
      title: "MH COLLECTION",
      shortDesc: "Nature's elegance captured in gold...",
      fullDesc: "Nature's elegance captured in gold — a symbol of heritage and style. Each curve reflects inspiration from the organic beauty of leaves."
    },
    {
      id: 14,
      image: "/jl3.png",
      title: "MH COLLECTION",
      shortDesc: "Nature's elegance captured in gold...",
      fullDesc: "Nature's elegance captured in gold — a symbol of heritage and style. Each curve reflects inspiration from the organic beauty of leaves."
    },
    {
      id: 15,
      image: "/jl4.png",
      title: "MH COLLECTION",
      shortDesc: "Nature's elegance captured in gold...",
      fullDesc: "Nature's elegance captured in gold — a symbol of heritage and style. Each curve reflects inspiration from the organic beauty of leaves."
    }
  ];

  return (
    <>
      <div className="sectionTitle d-flex flex-row text-light">
        <h3>03.</h3>
        <h4>My Projects</h4>
      </div>

      <div className="row justify-content-center align-items-center text-light">
        {projects.map((project) => (
          <div key={project.id} className="col-lg-4 col-md-6">
            <div className="card rounded-4 h-100 shadow my-4">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="fw-bold my-2">{project.title}</h5>
                <p>{project.shortDesc}</p>
                <button
                  className="btn btn-outline-warning w-100"
                  onClick={() => setSelectedProject(project)}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-light">
              <div className="modal-header border-0">
                <h5 className="modal-title text-warning">
                  {selectedProject.title}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="img-fluid w-75 rounded mb-3"
                />
                <p>{selectedProject.fullDesc}</p>
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-outline-light"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
