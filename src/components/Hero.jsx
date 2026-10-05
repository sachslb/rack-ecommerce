import { useEffect, useState } from "react";

const banners = [
  "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=2000&q=90",

  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2000&q=90",

  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=90",
];

function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(
        (previous) => (previous + 1) % banners.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">

      {/* HERO BANNER */}
      <div className="relative h-[280px] sm:h-[380px] md:h-[500px] lg:h-[600px]">

        {banners.map((banner, index) => (
          <img
            key={banner}
            src={banner}
            alt={`RACK wooden rack collection ${index + 1}`}
            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-opacity
              duration-1000
              ${
                currentBanner === index
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        ))}

      </div>

      {/* SLIDER DOTS */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">

        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                currentBanner === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/60"
              }
            `}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;