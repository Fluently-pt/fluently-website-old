import { Brain, Target, Globe, Clock } from "lucide-react";

export function Features() {
  return (
    <section className="py-32 mt-10">
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Main Content */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-semibold text-brand-500">
            AI-Powered Speech Therapy
          </h2>
          <p className="mt-6 text-lg text-brand-800 max-w-2xl">
            Experience professional-grade speech therapy powered by artificial
            intelligence. Practice at your own pace with real-time feedback and
            personalized exercises.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center px-6 py-3 bg-brand-300 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-brand-400 hover:shadow-lg"
          >
            <span>Try for Free</span>
          </a>
        </div>

        {/* Cards */}
        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {[
            {
              icon: Brain,
              title: "AI Speech Analysis",
              description:
                "Real-time detection of speech patterns and instant feedback",
            },
            {
              icon: Target,
              title: "Personalized Coaching",
              description:
                "Professional-grade therapy accessible from anywhere",
            },
            {
              icon: Globe,
              title: "Global Access",
              description:
                "Professional-grade therapy accessible from anywhere",
            },
            {
              icon: Clock,
              title: "24/7 Practice",
              description:
                "Practice at your own pace with continuous AI support",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 bg-brand-100 text-brand-500 transition-all duration-300 group-hover:bg-brand-400 group-hover:text-white">
                <feature.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-[22px] font-bold text-brand-500 mb-2.5 transition-colors duration-300 group-hover:text-brand-600">
                {feature.title}
              </h3>
              <p className="text-brand-800 transition-colors duration-300 group-hover:text-brand-900">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
