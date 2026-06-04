export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          About Us
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
          We build tools that help developers move faster without sacrificing
          quality. This project is a showcase of clean routing, thoughtful
          component architecture, and modern styling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Our Mission",
            body: "To make web development approachable, scalable, and enjoyable by sharing open-source patterns that actually work in production.",
          },
          {
            title: "Our Stack",
            body: "React Router v7, TypeScript, Vite, and Tailwind CSS — a battle-tested combination for building modern web applications.",
          },
          {
            title: "Open Source",
            body: "Everything we build is open by default. We believe in sharing knowledge and building on each other's work.",
          },
          {
            title: "Community",
            body: "Join thousands of developers who are learning, building, and shipping together using the same tools we use every day.",
          },
        ].map(({ title, body }) => (
          <div
            key={title}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900 mb-2">{title}</h2>
            <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 text-center">
        <p className="text-indigo-700 font-medium text-sm uppercase tracking-widest mb-2">
          Built with care
        </p>
        <p className="text-slate-700 text-base leading-relaxed max-w-xl mx-auto">
          Every line of this project was written to demonstrate best practices
          in routing, layout composition, and design system thinking.
        </p>
      </div>
    </main>
  );
}
