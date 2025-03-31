import { useState } from "react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-semibold text-brand-500">
              Ready to transform your speech with{" "}
              <span className="text-brand-300">AI technology</span>?
            </h2>
            <p className="mt-4 text-lg text-brand-800">
              Join our waitlist to be among the first to experience AI-powered
              speech therapy that adapts to your needs.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full flex-1 px-5 py-3 rounded-lg border-2 border-brand-200 focus:border-brand-300 outline-none text-brand-800 placeholder:text-brand-800/50"
              />
              <button className="w-1/2 md:w-auto px-4 py-3 rounded-lg bg-brand-300 text-white font-semibold whitespace-nowrap transition-all duration-300 hover:bg-brand-400">
                Join Beta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
