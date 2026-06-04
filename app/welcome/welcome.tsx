import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="min-h-[calc(100vh-128px)] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-50 rounded-full">
          React Router v7
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Build fast,{" "}
          <span className="text-indigo-600">ship confidently.</span>
        </h1>
        <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
          A modern React Router starter with clean routing, reusable components,
          and a design system ready to grow with your project.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/about"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors duration-150 shadow-sm"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg bg-white text-slate-700 font-semibold text-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors duration-150 shadow-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[
          {
            icon: "⚡",
            title: "Lightning Fast",
            desc: "Vite-powered dev server with hot module replacement for instant feedback.",
          },
          {
            icon: "🗂",
            title: "File-Based Routing",
            desc: "Intuitive route structure that scales from simple pages to complex apps.",
          },
          {
            icon: "🎨",
            title: "Tailwind CSS",
            desc: "Utility-first CSS with a consistent design language baked right in.",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-2xl mb-3">{icon}</div>
            <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
