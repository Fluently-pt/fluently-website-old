import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export function Hero() {
  useEffect(() => {
    const swiper = new Swiper(".hero-carousel", {
      modules: [Autoplay, EffectFade],
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      effect: "fade",
      speed: 1000,
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="swiper hero-carousel absolute inset-0">
        <div className="swiper-wrapper">
          {[
            ["/images/hero-bg-2.webp", "/images/hero-bg-2-mobile.webp"],
            ["/images/hero-bg-2.1.webp", "/images/hero-bg-2.1-mobile.webp"],
            ["/images/hero-bg-2.2.webp", "/images/hero-bg-2.2-mobile.webp"],
          ].map(([desktop, mobile], index) => (
            <div key={index} className="swiper-slide">
              <picture>
                <source media="(max-width: 768px)" srcSet={mobile} />
                <source media="(min-width: 769px)" srcSet={desktop} />
                <img
                  src={desktop}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-brand-200/20 before:content-[''] before:absolute before:inset-0 before:bg-brand-300/45 before:z-[1] z-[1]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="row gy-4 justify-between">
          <div
            className="lg:w-1/2 flex flex-col justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="early-access-header">
              <h2 className="text-5xl font-bold text-start text-white leading-tight">
                Transform your speech with
                <br />
                <span className="text-brand-50">AI-powered therapy</span>
                <br />
                anytime, anywhere
              </h2>
              <a
                href="#waitlist"
                className="mt-8 inline-flex items-center px-8 py-4 bg-white text-brand-500 font-semibold rounded-lg transition-all duration-300 hover:bg-brand-50 hover:scale-105 shadow-soft"
              >
                Join Beta Access
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Waves */}
      <svg
        className="absolute bottom-0 w-full h-16 z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="animate-[wave1_10s_linear_infinite] fill-white opacity-60">
          <use xlinkHref="#wave-path" x="50" y="3" />
        </g>
        <g className="animate-[wave2_8s_linear_infinite] fill-white opacity-40">
          <use xlinkHref="#wave-path" x="50" y="0" />
        </g>
        <g className="animate-[wave3_6s_linear_infinite] fill-white">
          <use xlinkHref="#wave-path" x="50" y="9" />
        </g>
      </svg>
    </section>
  );
}
