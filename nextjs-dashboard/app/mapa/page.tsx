import React from "react";

export default function Mapas() {
  return (
    <main className="bg-[#F3E2D9] py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Lista de Lugares */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8">
            Conoce las entradas hacia cada Facultad
          </h2>
          <ul className="space-y-6">
            {[
              {
                id: 1,
                title: "PUERTA PRINCIPAL",
                description:
                  "A la mano derecha se encuentra ubicado la facultad de Derecho y Ciencias Politicas.",
              },
              {
                id: 2,
                title: "PUERTA 10 - FACULTAD DE INGENIERIA",
                description:
                  "Al ingresar, observamos la Facultad de ing.Civil, Mecatrónica, Informática.",
              },
              {
                id: 3,
                title: "PUERTA 9 - FACULTAD DE ARQUITECTURA",
                description:
                  "Al ingresar, observamos la Facultad de Arquitectura y el área de comidas, El mesón.",
              },
              {
                id: 4,
                title: "PUERTA 7 - FACULTAD DE MEDICINA",
                description:
                  "Al ingresar, observamos la Facultad de Medicina, Biología,Veterinaria",
              }
             
            ].map((place) => (
              <li key={place.id} className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-300 text-white font-bold">
                  {place.id}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400">
                    {place.title}
                  </h3>
                  <p className="text-gray-700">{place.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Imagen del Mapa */}
        <div className="relative">
          <img
            src="mapa_urp.jpg" // Cambia esta ruta a la imagen de tu mapa
            alt="Mapa Universidad Ricardo Palma"
            className="w-full rounded-lg shadow-lg"
          />
         
          {/* Puedes agregar más puntos similares */}
        </div>
      </div>
    </main>
  );
}
