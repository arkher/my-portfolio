"use client"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";


interface IRef extends HTMLSpanElement {
  textContent: string;
}
const AnimatedNumbers = (props: { value: number }) => {
  const { value } = props;
  const ref = useRef<IRef>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default AnimatedNumbers;