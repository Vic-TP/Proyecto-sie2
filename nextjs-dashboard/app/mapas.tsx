import React from "react";

export default function Mapas() {
  return (
    <main className="bg-[#F3E2D9] py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Lista de Lugares */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8">
            Explora Lugares del Rímac
          </h2>
          <ul className="space-y-6">
            {[
              {
                id: 1,
                title: "Jirón Trujillo",
                description:
                  "Conocida por su encanto colonial y su rica historia, esta calle es un punto de interés cultural y arquitectónico en la ciudad.",
              },
              {
                id: 2,
                title: "Paseo de Aguas",
                description:
                  "Este hermoso parque, conocido por su arquitectura neoclásica y su ambiente sereno, es un destino popular tanto para residentes locales como para turistas.",
              },
              {
                id: 3,
                title: "Plaza de Toros de Acho",
                description:
                  "Construida en 1766, es una de las plazas de toros más antiguas, reconocida por su estilo colonial español y su importancia en la tradición taurina peruana.",
              },
              {
                id: 4,
                title: "Quinta y Molino de Presa",
                description:
                  "Construida en el siglo XVIII, esta impresionante residencia combina elementos de la arquitectura colonial española con influencias locales.",
              },
              {
                id: 5,
                title: "Alameda de los Bobos",
                description:
                  "Conocida por su historia y su ambiente pintoresco, esta alameda es un destino popular tanto para los residentes locales como para los turistas.",
              },
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
          {/* Ejemplo de puntos destacados */}
          <div className="absolute top-10 left-10 h-16 w-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img
              src="mapa_urp.jpg" // Cambia esta ruta a la imagen de tu ubicación
              alt="Ubicación 1"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Puedes agregar más puntos similares */}
        </div>
      </div>
    </main>
  );
}
