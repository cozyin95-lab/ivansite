import { useState } from 'react';
import type { CSSProperties } from 'react';

interface ShotImageProps {
  siteUrl: string;
  localShot: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  zoom?: number;
  origin?: string;
}

/**
 * Превью главной страницы сайта.
 * Порядок источников:
 * 1) свой файл public/shots/<имя>.jpg или .png
 * 2) живой скриншот через thum.io
 * 3) живой скриншот через WordPress mShots
 */
export default function ShotImage({
  siteUrl,
  localShot,
  alt,
  className = '',
  style,
  zoom = 1,
  origin = 'center top',
}: ShotImageProps) {
  const sources = [
    `/shots/${localShot}.jpg`,
    `/shots/${localShot}.png`,
    `https://image.thum.io/get/width/1280/crop/800/noanimate/${siteUrl}`,
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(siteUrl)}?w=1280&h=800`,
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className={`overflow-hidden bg-[#161616] ${className}`} style={style}>
      <img
        key={index}
        src={sources[index]}
        alt={alt}
        loading="lazy"
        onError={() => setIndex((i) => (i < sources.length - 1 ? i + 1 : i))}
        className="h-full w-full object-cover object-top"
        style={{ transform: `scale(${zoom})`, transformOrigin: origin }}
      />
    </div>
  );
}
