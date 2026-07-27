"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export interface AnimatedCounterProps {
  /** The final number to count up to */
  target: number;
  /** Suffix appended after the number, e.g. "+" or "%" */
  suffix?: string;
  /** Prefix prepended before the number, e.g. "$" */
  prefix?: string;
  /** Animation duration in milliseconds. Default: 2000 */
  duration?: number;
  /** IntersectionObserver threshold (0–1). Default: 0.3 */
  threshold?: number;
  /** CSS class name applied to the outer wrapper div */
  className?: string;
  /** If true, uses toLocaleString() to format the number with commas. Default: true */
  formatNumber?: boolean;
}

/**
 * Easing function: easeOutQuart — fast start, smooth deceleration to the end.
 * Matches the visual feel of the Stitch counter animation.
 *  t: elapsed time ratio 0 → 1
 */
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

/**
 * AnimatedCounter
 *
 * A reusable animated number counter that:
 * - Starts ONLY when the element enters the viewport (IntersectionObserver)
 * - Runs the animation exactly once per page load
 * - Uses requestAnimationFrame for smooth, jank-free counting
 * - Applies an easeOutQuart curve for natural deceleration
 * - Supports suffix, prefix, number formatting, and custom duration
 */
export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  threshold = 0.3,
  className = "",
  formatNumber = true,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const hasStarted = useRef(false);

  const runAnimation = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1); // clamp 0 → 1
      const eased = easeOutQuart(progress);
      const current = Math.round(eased * target);

      setDisplayValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Guarantee we land exactly on target
        setDisplayValue(target);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [target, duration]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          // Stop observing after first trigger
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [runAnimation, threshold]);

  const formatted =
    formatNumber && displayValue >= 1000
      ? displayValue.toLocaleString()
      : String(displayValue);

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
