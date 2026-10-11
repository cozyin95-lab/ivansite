import { useEffect, useState } from 'react';
import FadeIn from './FadeIn';
import { TELEGRAM_URL } from '../data';

const LINKS = [
  { label: 'Обо мне', href: '#about', id: 'about' },
  { label: 'Услуги', href: '#services', id: 'services' },
  { label: 'Проекты', href: '#projects', id: 'projects' },
];

const ITEM =
  'rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-wider transition-all duration-200 sm:px-5 sm:py-2.5 sm:text-sm md:text-base';

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      let current = '';
      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = link.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5">
      <FadeIn delay={0} y={-20} className="pointer-events-auto">
        <nav className="flex items-center gap-0.5 rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C]/70 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:gap-1 sm:p-1.5">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`${ITEM} ${
                active === link.id
                  ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                  : 'text-[#D7E2EA] hover:bg-[#D7E2EA]/10'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ITEM} text-white hover:brightness-125`}
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            }}
          >
            Контакты
          </a>
        </nav>
      </FadeIn>
    </div>
  );
}
