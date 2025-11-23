"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ---------------------------
      // 🚀 Intro 動畫：頁面載入就播放
      // ---------------------------
      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.97,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.15,
      });

      // ---------------------------
      // 📌 ScrollTrigger（可留可刪）
      // Hero 區塊輕微視差（向上移動）
      // ---------------------------
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          // 視差 → 隨滾動微微上移
          gsap.to(sectionRef.current, {
            y: self.progress * -30,
            ease: "none",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-color-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left (文字) */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl leading-tight">
            Full-Stack Developer Portfolio
          </h1>

          <p className="text-lg text-black/70">
            Showcasing modern web experiences built with Next.js, React,
            TypeScript, Python, and cloud-native infrastructures.
          </p>

          <div className="mt-4 flex flex-row gap-2 w-full md:max-w-[66%] justify-center">
            <Link
              href="/portfolio"
              className="sm:flex-1 inline-flex justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Explore Portfolio
            </Link>

            <Link
              href="/blog"
              className="sm:flex-1 inline-flex justify-center rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
            >
              Debug Story
            </Link>
          </div>
        </div>

        {/* Right (圖片) */}
        <div ref={imageRef} className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://picsum.photos/800/600?random=1"
              alt="Developer workspace"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
