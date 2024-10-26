// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-68 m-0 p-0">
      <h2 className="text-4xl font-bold">Welcome to My Website</h2>
      <p className="mt-4 text-lg text-green-800">This is a simple homepage built with Next.js.</p>
      <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
}
