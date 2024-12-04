import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import "./ui/global.css"; // Asegúrate de importar estilos globales

export default function RootLayout( {
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
