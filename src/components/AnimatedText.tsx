import { motion, useScroll, useTransform } from 'framer-motion';
import type { CSSProperties } from 'react';
import { useRef } from 'react';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Char({ char, index, total, progress }: CharProps) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative">
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const total = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const chars = word.split('');
        const nodes = (
          <span key={wi} className="inline-block whitespace-nowrap">
            {chars.map((char, ci) => (
              <Char key={ci} char={char} index={charIndex + ci} total={total} progress={scrollYProgress} />
            ))}
          </span>
        );
        // +1 за пробел между словами
        charIndex += chars.length + 1;
        return wi < words.length - 1 ? [nodes, ' '] : nodes;
      })}
    </p>
  );
}
