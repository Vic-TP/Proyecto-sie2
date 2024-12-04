import React from "react";

export default function Entretenimiento() {
  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">ENTRETENIMIENTO RICARDOPALMINO</h2>
        
        {/* Grid de 3 columnas para artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artículo 1 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img src="gastronomia.jpg" className="w-full h-56 object-cover"/>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-500 uppercase">Semana Ingeniería</p>
              <h3 className="text-lg font-bold mt-2">Esta tarde los alumnos disfrutaban de la gastronomía en el pabellón de Ingeniería</h3>
              <p className="text-sm text-gray-600 mt-2">Por Ubicate Cachimbo</p>
              <p className="text-sm text-gray-500">18 de Noviembre de 2024</p>
            </div>
          </div>

          {/* Artículo 2 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img src="auditorio.jpg"  className="w-full h-56 object-cover"/>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-500 uppercase">SEMANA INGENIERÍA</p>
              <h3 className="text-lg font-bold mt-2">Embelleciendo el auditorio Ollantaytambo, con una conferencia sobre Inteligencia Artificial'</h3>
              <p className="text-sm text-gray-600 mt-2">Por Ubicate Cachimbo</p>
              <p className="text-sm text-gray-500">20 de Noviembre de 2024</p>
            </div>
          </div>

          {/* Artículo 3 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img src="tensionada.jpg"  className="w-full h-56 object-cover"/>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-500 uppercase">ARQUITECTURA</p>
              <h3 className="text-lg font-bold mt-2">Semana de entregas, asi se vive una semana tensa en la "TENSIONADA"</h3>
              <p className="text-sm text-gray-600 mt-2">Por Ubicate Cachimbo</p>
              <p className="text-sm text-gray-500">25 de noviembre de 2024</p>
            </div>
          </div>

          {/* Artículo 4 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img src="halloween.jpg"  className="w-full h-56 object-cover"/>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-500 uppercase">HALLOWEEN</p>
              <h3 className="text-lg font-bold mt-2">Los alumnos tenían una reñida competencia de baile y disfraces</h3>
              <p className="text-sm text-gray-600 mt-2">Por Ubicate Cachimbo</p>
              <p className="text-sm text-gray-500">31 de octubre de 2024</p>
            </div>
          </div>

          {/* Artículo 5 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img src="fut.jpg"  className="w-full h-56 object-cover"/>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-500 uppercase">Deporte</p>
              <h3 className="text-lg font-bold mt-2">Disfrutando de un torneo de Fútbol</h3>
              <p className="text-sm text-gray-600 mt-2">Por Ubicate Cachimbo.</p>
              <p className="text-sm text-gray-500">13 de Agosto 2024</p>
            </div>
          </div>

          {/* Artículo 6 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img src="navidad.jpg
            " alt="Artículo 6" className="w-full h-56 object-cover"/>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-500 uppercase">NAVIDAD</p>
              <h3 className="text-lg font-bold mt-2">Llego la navidad y la Richi lo sabe!!</h3>
              <p className="text-sm text-gray-600 mt-2">Por Ubicate Cachimbo</p>
              <p className="text-sm text-gray-500"> de diciembre de 2024</p>
            </div>
          </div>

          {/* Artículo 7 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img src="pusanga.jpg" alt="Artículo 7" className="w-full h-56 object-cover"/>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-500 uppercase">Laboratorio de bar</p>
              <h3 className="text-lg font-bold mt-2">Para nuestros compañeros de la Facultad de Hotelería y Turismo</h3>
              <p className="text-sm text-gray-600 mt-2">Por Ubicate Cachimbo</p>
              <p className="text-sm text-gray-500">5 de Julio de 2024</p>
            </div>
          </div>

          {/* Artículo 8 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img src="chino.jpg" alt="Artículo 8" className="w-full h-56 object-cover"/>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-500 uppercase">Centro de Idiomas URP</p>
              <h3 className="text-lg font-bold mt-2">Se siente el espiritú navideño</h3>
              <p className="text-sm text-gray-600 mt-2">Por Ubicate Cachimbo.</p>
              <p className="text-sm text-gray-500">22 de febrero de 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">ENTREVISTA A LOS ALUMNOS RICARDOPALMINOS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carta 1 */}
          <div className="border rounded-lg overflow-hidden shadow-sm cursor-pointer">
            <a href="https://www.tiktok.com/@ubicatecachimbo/video/7439487910245649719?is_from_webapp=1&sender_device=pc&web_id=7439403733342471736" target="_blank" rel="noopener noreferrer">
              <img
                src="e1.jpg"
                alt="Entrevista 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-500 uppercase">Entrevista 1</p>
                <h3 className="text-lg font-bold mt-2">Hola Daniela!!</h3>
              </div>
            </a>
          </div>

          {/* Carta 2 */}
          <div className="border rounded-lg overflow-hidden shadow-sm cursor-pointer">
            <a href="https://www.tiktok.com/@ubicatecachimbo/video/7439489460196134200?is_from_webapp=1&sender_device=pc&web_id=7439403733342471736" target="_blank" rel="noopener noreferrer">
              <img
                src="e2.jpg"
                alt="Entrevista 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-500 uppercase">Entrevista 2</p>
                <h3 className="text-lg font-bold mt-2">Hola Sheyla!!</h3>
              </div>
            </a>
          </div>

          {/* Carta 3 */}
          <div className="border rounded-lg overflow-hidden shadow-sm cursor-pointer">
            <a href="https://www.tiktok.com/@ubicatecachimbo/video/7444685880754801976?is_from_webapp=1&sender_device=pc&web_id=7439403733342471736" target="_blank" rel="noopener noreferrer">
              <img
                src="e3.jpg"
                alt="Entrevista 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-500 uppercase">Entrevista 3</p>
                <h3 className="text-lg font-bold mt-2">Hola Alexandra!!</h3>
              </div>
            </a>
          </div>

          {/* Carta 4 */}
          <div className="border rounded-lg overflow-hidden shadow-sm cursor-pointer">
            <a href="https://www.tiktok.com/@ubicatecachimbo/video/7444686333127167288?is_from_webapp=1&sender_device=pc&web_id=7439403733342471736" target="_blank" rel="noopener noreferrer">
              <img
                src="e4.jpg"
                alt="Entrevista 4"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-500 uppercase">Entrevista 4</p>
                <h3 className="text-lg font-bold mt-2">Hola Gabriela!!</h3>
              </div>
            </a>
          </div>

          {/* Carta 5 */}
          <div className="border rounded-lg overflow-hidden shadow-sm cursor-pointer">
            <a href="https://www.tiktok.com/@ubicatecachimbo/video/7444686619971521848?is_from_webapp=1&sender_device=pc&web_id=7439403733342471736" target="_blank" rel="noopener noreferrer">
              <img
                src="e5.jpg"
                alt="Entrevista 5"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-500 uppercase">Entrevista 5</p>
                <h3 className="text-lg font-bold mt-2">Hola Viviana!!</h3>
              </div>
            </a>
          </div>

          {/* Carta 6 */}
          <div className="border rounded-lg overflow-hidden shadow-sm cursor-pointer">
            <a href="https://www.tiktok.com/@ubicatecachimbo/video/7444686938847677752?is_from_webapp=1&sender_device=pc&web_id=7439403733342471736" target="_blank" rel="noopener noreferrer">
              <img
                src="e6.jpg"
                alt="Entrevista 6"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-500 uppercase">Entrevista 6</p>
                <h3 className="text-lg font-bold mt-2">Hola Rosa!!</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}
