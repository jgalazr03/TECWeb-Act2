export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-6 sm:p-20 text-center font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Google Docs</h1>
      <p className="text-lg text-gray-300">
        Aquí puedes ver todos tus archivos de texto, así como presentaciones y
        excel...
      </p>
      <button className="mt-4 px-6 py-2 border border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-black transition duration-300">
        Click me
      </button>
    </div>
  );
}
