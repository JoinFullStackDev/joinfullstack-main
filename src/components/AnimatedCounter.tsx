import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter = ({
  target,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = counterRef.current;
    if (!element || hasAnimated) return;

    const counter = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated) return;
        
        gsap.to(counter, {
          value: target,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            if (element) {
              const displayValue = decimals > 0 
                ? counter.value.toFixed(decimals)
                : Math.round(counter.value).toString();
              element.textContent = `${prefix}${displayValue}${suffix}`;
            }
          },
          onComplete: () => {
            setHasAnimated(true);
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [target, duration, prefix, suffix, decimals, hasAnimated]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
};
