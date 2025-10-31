"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCity() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destination To Visit
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Agra, India",
    title: "Taj Mahal at Sunrise",
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "Paris, France",
    title: "Eiffel Tower Reflections",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "Rome, Italy",
    title: "Golden Morning at the Colosseum",
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "Kyoto, Japan",
    title: "Fushimi Inari Shrine Pathway",
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "Santorini, Greece",
    title: "Blue Domes of Oia",
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "New York, USA",
    title: "Manhattan Skyline",
    src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "Dubai, UAE",
    title: "Burj Khalifa at Dusk",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "London, UK",
    title: "Tower Bridge Sunset",
    src: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "Sydney, Australia",
    title: "Opera House and Harbour",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "Rio de Janeiro, Brazil",
    title: "Christ the Redeemer",
    src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "Machu Picchu, Peru",
    title: "Ancient Inca Citadel",
    src: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  },
  {
    category: "Prague, Czech Republic",
    title: "Charles Bridge at Dawn",
    src: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1400&q=80",
    content: <DummyContent />,
  }
];


export default PopularCity;
