import { Brain, Target, Globe2, Clock } from "lucide-react";

export function Features() {
  return (
    <section className="py-32 mt-10" id="features">
      <div className="container mx-auto px-4" data-aos="fade-up">
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
            className="mt-8 inline-flex items-center px-6 py-3.5 bg-brand-300 text-white font-semibold rounded-lg transition duration-300 hover:bg-brand-400 hover:shadow-lg"
          >
            Try for Free
          </a>
        </div>

        {/* Cards */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
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
              icon: Globe2,
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
              className="group bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 bg-brand-50 text-brand-300 transition-all duration-300 group-hover:bg-brand-300 group-hover:text-white">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-500 mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
