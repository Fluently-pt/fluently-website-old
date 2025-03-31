import { Users2, Wallet2, ListChecks, LineChart } from "lucide-react";
import { useEffect } from "react";

export function Stats() {
  useEffect(() => {
    const startCounting = (element: HTMLElement) => {
      const target = parseInt(element.getAttribute("data-target") || "0");
      const duration = 1000;
      const steps = 50;
      const stepValue = target / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += stepValue;
        if (current > target) {
          element.textContent = target.toString();
          clearInterval(counter);
        } else {
          element.textContent = Math.floor(current).toString();
        }
      }, duration / steps);
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
    <section className="py-24 bg-brand-50">
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
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg border-2 border-brand-50">
                <stat.icon className="w-6 h-6 text-brand-300" />
              </div>
              <div className="mt-0 p-8 pb-4 w-full text-center relative">
                <span className="text-4xl font-bold text-brand-300 flex items-center justify-center gap-1">
                  {stat.prefix}
                  <span data-target={stat.value}>0</span>
                  {stat.suffix}
                </span>
                <p className="mt-2 text-brand-800 font-medium font-heading">
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
