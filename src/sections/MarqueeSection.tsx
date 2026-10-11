import { useEffect, useRef, useState } from 'react';
import { MARQUEE_IMAGES } from '../data';

const TILE_WIDTH = 420;
const TILE_HEIGHT = 270;
const GAP = 12; // gap-3

const ROW_1 = MARQUEE_IMAGES.slice(0, 11);
const ROW_2 = MARQUEE_IMAGES.slice(11);

function Tile({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      draggable={false}
      className="shrink-0 rounded-2xl object-cover"
      style={{ width: TILE_WIDTH, height: TILE_HEIGHT }}
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Каждый ряд утроен; центральный набор стоит в начале, чтобы по бокам не было пустоты
  const setWidth = (count: number) => count * (TILE_WIDTH + GAP);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-3 bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ overflow: 'hidden' }}
    >
      <div
        className="flex w-max gap-3"
        style={{
          marginLeft: -setWidth(ROW_1.length),
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {[...ROW_1, ...ROW_1, ...ROW_1].map((src, i) => (
          <Tile key={i} src={src} />
        ))}
      </div>

      <div
        className="flex w-max gap-3"
        style={{
          marginLeft: -setWidth(ROW_2.length),
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {[...ROW_2, ...ROW_2, ...ROW_2].map((src, i) => (
          <Tile key={i} src={src} />
        ))}
      </div>
    </section>
  );
}
