export function Testimonials() {
  const testimonials = [
    {
      content:
        "This AI platform has transformed my life. I've made more progress in months than I did in years of traditional therapy.",
      author: "Sarah M.",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      content:
        "As a speech therapist, I recommend this platform to all my patients. It's like having a personal coach available 24/7.",
      author: "Dr. James Wilson",
      role: "Speech Pathologist",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by People Worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.author}
              className="bg-brand-50 p-8 rounded-xl shadow-sm"
            >
              <p className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-brand-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
