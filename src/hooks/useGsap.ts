import { useEffect, useCallback, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation configuration types
interface FadeInConfig {
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
}

interface StaggerConfig extends FadeInConfig {
  stagger?: number;
}

/**
 * Utility function: Create a fade-in animation with scroll trigger
 */
export const createFadeIn = (
  element: Element | null,
  config: FadeInConfig = {}
) => {
  if (!element) return null;
  
  const {
    y = 40,
    x = 0,
    duration = 0.8,
    delay = 0,
    ease = 'power2.out',
    start = 'top 85%',
  } = config;

  return gsap.fromTo(
    element,
    { opacity: 0, y, x },
    {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Utility function: Create staggered animations for a group of elements
 */
export const createStaggeredFadeIn = (
  elements: NodeListOf<Element> | Element[],
  config: StaggerConfig = {}
) => {
  if (!elements || elements.length === 0) return null;

  const {
    y = 40,
    x = 0,
    duration = 0.6,
    stagger = 0.1,
    ease = 'power2.out',
    start = 'top 80%',
  } = config;

  const firstElement = elements[0];
  
  return gsap.fromTo(
    elements,
    { opacity: 0, y, x, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: firstElement,
        start,
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Utility function: Create a counter animation
 */
export const animateCounter = (
  element: Element | null,
  target: number,
  config: {
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
  } = {}
) => {
  if (!element) return null;

  const { duration = 2, decimals = 0, prefix = '', suffix = '' } = config;
  const counter = { value: 0 };

  return gsap.to(counter, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      const displayValue = decimals > 0
        ? counter.value.toFixed(decimals)
        : Math.round(counter.value).toString();
      element.textContent = `${prefix}${displayValue}${suffix}`;
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
};

/**
 * Hook for using GSAP scroll animations with automatic cleanup
 */
export const useScrollAnimation = (
  ref: RefObject<HTMLElement>,
  animationFn: (ctx: gsap.Context) => void,
  deps: unknown[] = []
) => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      animationFn(ctx);
    }, ref);

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, ...deps]);
};

/**
 * Main hook for global page animations
 */
export const useGsap = () => {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return;
    }

    // Initialize ScrollTrigger animations
    const initAnimations = () => {
      // Map parallax effect (opposite scroll)
      const mapTrack = document.querySelector('#mapTrack');
      if (mapTrack) {
        gsap.to(mapTrack, {
          yPercent: -20,
          xPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: '#page',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      }

      // SVG Path animation - continuous bidirectional
      const path = document.querySelector('#route') as SVGPathElement;
      if (path) {
        const len = path.getTotalLength();
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
        gsap.set(path, { autoAlpha: 1 });

        // Continuous path animation tied to scroll
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top bottom',
            endTrigger: '#contact',
            end: 'bottom bottom',
            scrub: 1,
          },
        });

        // Phase waypoints with bidirectional animation
        const phases = [
          { id: 'idea' },
          { id: 'strategy' },
          { id: 'prototype' },
          { id: 'analysis' },
          { id: 'build' },
          { id: 'contact' },
        ];

        phases.forEach((p) => {
          const waypoint = document.querySelector(`#wp-${p.id}`);
          if (waypoint) {
            gsap.fromTo(
              waypoint,
              { autoAlpha: 0, scale: 0 },
              {
                autoAlpha: 1,
                scale: 1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: `#section-${p.id}`,
                  start: p.id === 'contact' ? 'top 50%' : 'top 80%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        });
      }

      // Animate service cards on Services page (with data-align attribute)
      const serviceCards = document.querySelectorAll('.service-card[data-align]');
      serviceCards.forEach((card) => {
        const align = card.getAttribute('data-align');
        const xOffset = align === 'right' ? 100 : -100;
        
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: xOffset,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Content fade-in animations
      const sections = document.querySelectorAll('.phase-content');
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Service section animations
      const serviceSections = document.querySelectorAll('.service-section');
      serviceSections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Contact section animation
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const contactElements = contactSection.querySelectorAll('.contact-animate');
        if (contactElements.length > 0) {
          gsap.fromTo(
            contactElements,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: contactSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    };

    // Wait for DOM to be ready
    const timeoutId = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Return utilities for manual use
  const fadeIn = useCallback((element: Element | null, config?: FadeInConfig) => {
    return createFadeIn(element, config);
  }, []);

  const staggerFadeIn = useCallback((elements: NodeListOf<Element> | Element[], config?: StaggerConfig) => {
    return createStaggeredFadeIn(elements, config);
  }, []);

  return { 
    gsap, 
    ScrollTrigger,
    fadeIn,
    staggerFadeIn,
    animateCounter,
  };
};
