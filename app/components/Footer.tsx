import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold text-white tracking-tight">
            MyApp
          </span>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              to="/contact"
              className="hover:text-white transition-colors duration-150"
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="hover:text-white transition-colors duration-150"
            >
              FAQ
            </Link>
            <Link
              to="/about"
              className="hover:text-white transition-colors duration-150"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
