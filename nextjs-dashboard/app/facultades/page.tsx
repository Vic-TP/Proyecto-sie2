import React from "react";

export default function Facultades() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
          Facultades de la Universidad Ricardo Palma
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Facultad de Arquitectura y Urbanismo",
              img: "/humanos.jpg  ",
            },
            {
              name: "Facultad de Ingeniería",
              img: "/inge.jpg",
            },
            {
              name: "Facultad de Medicina Humana",
              img: "/medicina.jpg",
            },
            {
              name: "Facultad de Ciencias Económicas y Empresariales",
              img: "/economicas.jpg",
            },
            {
              name: "Facultad de Humanidades y Lenguas Modernas",
              img: "/Fhumanidad.jpg",
            },
            {
              name: "Facultad de Ciencias Biológicas",
              img: "/biologia.jpg",
            },
            {
              name: "Facultad de Derecho y Ciencia Política",
              img: "/derecho.jpg",
            },
            {
              name: "Facultad de Psicología",
              img: "/psicologia.jpg",
            },
          ].map((facultad, index) => (
            <div
              key={index}
              className="bg-green-700 text-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={facultad.img}
                alt={facultad.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{facultad.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
