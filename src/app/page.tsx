import Image from 'next/image';

// Página principal de la aplicación
export default function Home() {

  // Devuelve el contenido de la página principal
  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-10">
      <h1 className="text-5xl">Proyecto Final</h1>
      <Image src="/next.svg" alt="Next.js Logo" width={150} height={150} />
    </main>
  );
}