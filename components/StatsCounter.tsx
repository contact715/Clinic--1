
import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { target: 2300, suffix: '+',    label: 'Five-Star Reviews' },
  { target: 15,   suffix: '+',    label: 'Years in the Valley' },
  { target: 98,   suffix: '%',    label: 'First-Visit Fix Rate' },
  { target: 90,   suffix: ' days', label: 'Parts & Labor Warranty' },
];

const DURATION_MS = 1800;

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

interface CounterProps {
  target: number;
  suffix: string;
  label: string;
  run: boolean;
}

const Counter: React.FC<CounterProps> = ({ target, suffix, label, run }) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!run) return;

    startTimeRef.current = null;

    const tick = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const easedProgress = easeOut(progress);
      setValue(Math.round(easedProgress * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [run, target]);

  return (
    <div className="text-center px-2">
      <div className="text-5xl lg:text-6xl font-[900] text-[#E30613] tracking-tighter tabular-nums">
        {value.toLocaleString()}{suffix}
      </div>
      <div className="text-white/60 text-xs font-bold uppercase tracking-widest mt-3">
        {label}
      </div>
    </div>
  );
};

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-16 bg-[#1D1D1B]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <Counter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              run={hasAnimated}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
