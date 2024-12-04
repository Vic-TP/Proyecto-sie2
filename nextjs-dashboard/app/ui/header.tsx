import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-700 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo1.JPG"
            alt="UBICATE CACHIMBO"
            className="h-12"
          />
          <h1 className="ml-4 text-2xl font-bold">UBICATE CACHIMBO</h1>
        </div>

        {/* Menú */}
        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-orange-400">
            INICIO
          </Link>
          <Link href="/facultades" className="hover:text-orange-400">
            FACULTADES
          </Link>
          <Link href="/entretenimiento" className="hover:text-orange-400">
            ENTRETENIMIENTO
          </Link>
          <Link href="/mapa" className="hover:text-orange-400">
            MAPA
          </Link>
        </nav>

        {/* Contactos */}
        <div className="text-right">
          <p>Contactos:</p>
          <p>+51 942 232 391</p>
          <p>cachimboubicate@gmail.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
