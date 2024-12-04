import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export default function Page() {
  return (
    <main className="bg-[#F3E2D9] text-gray-900">
      {/* Primera Sección */}
      <section className="h-screen flex items-center justify-center bg-[#F3E2D9] text-black px-6">
        <div className="max-w-5xl grid md:grid-cols-2 gap-6 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-orange-400 mb-4">
              Recorrido virtual
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              ¡Bienvenidos a nuestro recorrido virtual por la Universidad Ricardo Palma!
              Prepárate para explorar una de las mejores universidades del Perú.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-400 text-red-600 font-medium rounded-lg hover:bg-orange-300">
              Recorrer ahora
            </button>
          </div>

          {/* Imagen */} 
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/entrada.jpg" // Cambia la ruta de la imagen
              alt="Recorrido virtual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Segunda Sección */}
      <section className="py-16 bg-[#F3E2D9]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 text-center">
            SEMANA DE INGENIERIA - 13 al 23 de Noviembre
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Actividades */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="sem_inge.jpg" // Cambia la ruta
                alt="Pabellón de Conferencias"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Pabellón de Conferencias</h3>
                <p className="text-sm text-gray-700">
                  Disfruta de las conferencias que se brindará por la semana de ingenieria, válido para constancia de egresado
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="sem_inge2.jpg" // Cambia la ruta
                alt="Un toque de Sabor"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                Un toque de Sabor
                </h3>
                <p className="text-sm text-gray-700">
                  Recorre el pabellón gastronomico que tenemos por la semana de ingeniería.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="gruparqui.jpg" // Cambia la ruta
                alt="Esculturas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Esculturas</h3>
                <p className="text-sm text-gray-700">
                  Conoce la creación de las esculturas, realizado por los alumnos de Arquitectura, ciclo 1-2-3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}