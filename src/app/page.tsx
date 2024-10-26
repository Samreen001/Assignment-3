// src/app/page.tsx
import Hero from './Components/Hero';

export default function Home() {
  return (
    <div className="bg-[url('https://media.istockphoto.com/id/1310824444/video/cosmos-blooming-at-dusk-beautiful-butterflies-flying-around.jpg?s=640x640&k=20&c=vbASxkOrUp9XOWubTe0HY4TZ34OjmH08oL2dqIL5ZAk=')] bg-cover flex justify-center min-h-screen bg-green-500">
      {/* Remove the heading from here */}
      <Hero />
    </div>
  );
}
