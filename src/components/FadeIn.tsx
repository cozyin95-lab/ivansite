import { motion } from 'framer-motion';
import type { CSSProperties, ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

// motion.create() нельзя вызывать при каждом рендере, поэтому кэшируем компоненты
const motionCache = new Map<string, ReturnType<typeof motion.create>>();

function getMotionComponent(as: ElementType) {
  const key = typeof as === 'string' ? as : '';
  if (key && motionCache.has(key)) return motionCache.get(key)!;
  const Component = motion.create(as as 'div');
  if (key) motionCache.set(key, Component);
  return Component;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
}: FadeInProps) {
  const MotionComponent = getMotionComponent(as) as typeof motion.div;

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionComponent>
  );
}
