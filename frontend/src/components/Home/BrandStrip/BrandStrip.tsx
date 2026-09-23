import { useEffect, useRef } from "react";
import gsap from "gsap";

import BrandItem from "./BrandItem";
import { brandData } from "./brandData";

const BrandStrip = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    const distance = track.scrollWidth / 2;

    gsap.to(track, {
      x: -distance,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const items = [...brandData, ...brandData];

  return (
    <section className="relative overflow-hidden py-12">

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--background-color)] to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--background-color)] to-transparent" />

      <div
        ref={trackRef}
        className="flex w-max gap-6"
      >
        {items.map((item, index) => (
          <BrandItem
            key={index}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default BrandStrip;