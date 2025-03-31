import { useEffect } from "react";
import { WaitlistForm } from "./WaitlistForm";
import Swiper from "swiper";

export function Hero() {
  useEffect(() => {
    const swiper = new Swiper(".hero-carousel", {
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
    <div className="relative pt-44 pb-32 overflow-hidden">
      {/* Carousel */}
      <div className="swiper hero-carousel absolute inset-0">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/img/hero-bg-2-mobile.webp"
              />
              <source media="(min-width: 769px)" srcSet="/img/hero-bg-2.webp" />
              <img src="/img/hero-bg-2.webp" alt="" className="hero-bg" />
            </picture>
          </div>
          {/* Add other slides similarly */}
        </div>
      </div>

      {/* Existing content */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-200 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-300/30 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight">
            <span className="block text-gray-900 mb-2">
              Transform your speech with
            </span>
            <span className="block text-brand-500">AI-powered therapy</span>
            <span className="block text-brand-600">anytime, anywhere</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Experience professional-grade speech therapy powered by artificial
            intelligence. Practice at your own pace with real-time feedback and
            personalized exercises.
          </p>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9"></use>
        </g>
      </svg>
    </div>
  );
}
