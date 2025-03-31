import { Logo } from "./Logo";
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  DownloadCloud,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-50">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* About Column */}
          <div className="lg:col-span-4">
            <Logo className="h-8 w-auto mb-4" color="text-brand-500" />
            <p className="text-brand-800 mb-6">
              Transform your speech with
              <br />
              AI-powered therapy anytime, anywhere.
            </p>
            <div className="flex space-x-4">
              {[
                [Twitter, "https://twitter.com"],
                [Facebook, "https://facebook.com"],
                [Instagram, "https://instagram.com"],
                [Youtube, "https://youtube.com"],
              ].map(([Icon, url]) => (
                <a
                  key={url}
                  href={url}
                  className="w-10 h-10 rounded-full border border-brand-300/50 flex items-center justify-center text-brand-300/70 hover:border-brand-300 hover:text-brand-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-brand-300 mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {[
                ["About us", "#about"],
                ["Features", "#features"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-brand-800 hover:text-brand-300 transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Links */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-brand-300 mb-4">Policy</h4>
            <ul className="space-y-2">
              {[
                ["Terms of service", "#"],
                ["Accessibility Policy", "#"],
                ["Privacy policy", "#"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-brand-800 hover:text-brand-300 transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Section */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-bold text-brand-300 mb-4 flex items-center gap-2">
              <DownloadCloud className="w-5 h-5" />
              Download Our App
            </h4>
            <p className="text-brand-800 mb-6">
              Install our app now for Android and iOS and enjoy seamless
              AI-powered speech therapy on the go.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-32">
                <img
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  className="w-full h-auto"
                />
              </a>
              <a href="#" className="w-32">
                <img
                  src="/images/app-store.png"
                  alt="Download on App Store"
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 py-6 border-t border-brand-200/50 text-center">
          <p className="text-brand-800">
            ©2025 <span>Copyright</span>{" "}
            <strong className="text-brand-500">Fluently</strong>{" "}
            <span>All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
