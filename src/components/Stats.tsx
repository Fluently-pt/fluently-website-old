import { Users2, Wallet2, ListChecks, LineChart } from "lucide-react";
import { useEffect } from "react";

export function Stats() {
  useEffect(() => {
    const startCounting = (element: HTMLElement) => {
      const target = parseInt(element.getAttribute("data-target") || "0");
      const duration = 2000; // Increased duration for smoother animation
      const steps = 100;
      const stepValue = target / steps;
      let current = 0;

      // Clear any existing interval for this element
      const existingInterval = element.getAttribute("data-interval");
      if (existingInterval) {
        clearInterval(parseInt(existingInterval));
      }

      const counter = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          element.textContent = target.toString();
          clearInterval(counter);
          element.removeAttribute("data-interval");
        } else {
          element.textContent = Math.floor(current).toString();
        }
      }, duration / steps);

      // Store the interval ID on the element
      element.setAttribute("data-interval", counter.toString());
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll("[data-target]");
          counters.forEach(counter => startCounting(counter as HTMLElement));
          observer.unobserve(entry.target);
        }
      });
    });

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="stats-section py-32 bg-gradient-to-b from-white to-brand-50"
      id="stats"
    >
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users2,
              value: 80,
              suffix: "M+",
              label: "People who stutter worldwide",
            },
            {
              icon: Wallet2,
              prefix: "$",
              value: 2000,
              label: "Average therapy cost saved",
            },
            {
              icon: ListChecks,
              value: 1000,
              suffix: "+",
              label: "Custom Exercises Available",
            },
            {
              icon: LineChart,
              value: 92,
              suffix: "%",
              label: "Success rate",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-soft border border-brand-100">
                <stat.icon className="w-7 h-7 text-brand-300" />
              </div>
              <div className="mt-0 p-8 pb-4 w-full text-center relative">
                <span className="text-5xl font-bold text-brand-500 flex items-center justify-center gap-1 tabular-nums">
                  {stat.prefix}
                  <span data-target={stat.value}>0</span>
                  {stat.suffix}
                </span>
                <p className="mt-4 text-lg text-brand-800 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
