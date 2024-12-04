import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Logo y Descripción */}
        <div>
          <img
            src="/logo1.JPG" // Cambia esta ruta al logo correcto
            alt="UBICATE CACHIMBO"
            className="h-16 mb-4"
          />
          <h3 className="text-lg font-bold">UBICATE CACHIMBO</h3>
          <p className="text-sm">"Explora el futuro, descubre nuestra universidad desde donde estés</p>
        </div>

        {/* Inspiración */}
        <div>
          <h4 className="text-lg font-bold mb-2">INSPIRACIÓN</h4>
          <ul>
            <li>
              <a href="#" className="hover:text-green-300">
                Destinos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Trabaja con Nosotros */}
        <div>
          <h4 className="text-lg font-bold mb-2">TRABAJA CON NOSOTROS</h4>
          <ul>
            <li>
              <a href="#" className="hover:text-green-300">
                Colaboradores
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Empleo
              </a>
            </li>
          </ul>
        </div>

        {/* Ayuda */}
        <div>
          <h4 className="text-lg font-bold mb-2">AYUDA</h4>
          <ul>
            <li>
              <a href="tel:+51 942 232 391" className="hover:text-green-300">
                +51 942 232 391
              </a>
            </li>
            <li>
              <a href="mailto:cachimboubicate@gmail.com" className="hover:text-green-300">
              cachimboubicate@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Derechos Reservados */}
      <div className="mt-8 border-t border-green-600 pt-4 text-center text-sm">
        <p>
          © 2024 UBICATE CACHIMBO - Todos los derechos reservados
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
