import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import ShotImage from '../components/ShotImage';
import { PROJECTS } from '../data';
import type { Project } from '../data';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, total, progress }: ProjectCardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh]">
      <div className="sticky top-24 md:top-32">
        <motion.div
          className={`relative border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${RADIUS}`}
          style={{ scale, top: index * 28, transformOrigin: 'top center' }}
        >
          {/* Верхняя строка */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4 px-2 sm:mb-6 md:px-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-1 text-[#D7E2EA]">
                <span
                  className="font-light uppercase tracking-wide opacity-60"
                  style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.1rem)' }}
                >
                  {project.category}
                </span>
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <LiveProjectButton href={project.url} />
          </div>

          {/* Нижняя строка: картинки */}
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
            <ShotImage
              siteUrl={project.url}
              localShot={project.localShot}
              alt={`${project.name}: главная страница`}
              className={`aspect-[16/10] w-full ${RADIUS}`}
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Проекты
        </h2>
      </FadeIn>

      <div ref={listRef} className="mx-auto max-w-[960px]">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.url}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
