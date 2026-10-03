'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export interface ProjectData {
  title: string;
  description: string;
  link: string;
  image: string;
  color: string;
  accentColor?: string;
  textOnDark?: boolean;
  tag?: string;
}

interface CardProps {
  i: number;
  project: ProjectData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  project,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const isOnDark = project.textOnDark ?? true;
  const textColorClass = isOnDark ? 'text-white' : 'text-slate-900';
  const mutedTextColorClass = isOnDark ? 'text-white/80' : 'text-slate-700';

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-25 px-4'
    >
      <motion.div
        style={{
          backgroundColor: project.color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={cn(
          "flex flex-col relative -top-[25%] h-[450px] w-full max-w-[1000px] rounded-2xl p-8 lg:p-10 origin-top shadow-xl",
          textColorClass
        )}
      >
        <h2 className='text-2xl md:text-3xl lg:text-4xl text-center mb-4! font-extrabold tracking-tight text-white!'>{project.title}</h2>
        <div className={`flex flex-col md:flex-row h-full mt-5 lg:mt-8 gap-8 lg:gap-10`}>
          <div className={`w-full md:w-[40%] relative flex flex-col justify-center`}>
            {project.tag && (
              <span className="text-xs font-bold uppercase tracking-widest mb-3 opacity-80">
                {project.tag}
              </span>
            )}
            <p className={cn('text-sm lg:text-base leading-relaxed font-medium', mutedTextColorClass)}>
              {project.description}
            </p>
            <span className='flex items-center gap-2 pt-4'>
              <a
                href={project.link}
                target='_blank'
                rel="noreferrer"
                className='text-sm font-bold uppercase tracking-wider underline cursor-pointer hover:opacity-70 transition-opacity'
              >
                See more
              </a>
              <svg
                width='22'
                height='12'
                viewBox='0 0 22 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </div>

          <div
            className={`relative w-full md:w-[60%] h-48 md:h-full rounded-xl overflow-hidden shadow-lg`}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img src={project.image} alt={project.title} className='absolute inset-0 w-full h-full object-cover' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface StackingCardsProps {
  projects: ProjectData[];
}

const StackingCards = forwardRef<HTMLElement, StackingCardsProps>(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <div className='w-full relative' ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </ReactLenis>
  );
});

StackingCards.displayName = 'StackingCards';

export default StackingCards;
