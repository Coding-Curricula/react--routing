const faqs = [
  {
    q: "What is React Router?",
    a: "React Router is a client-side routing library for React applications. It lets you build single-page apps with multiple views and keeps the URL in sync with your UI.",
  },
  {
    q: "What version of React Router does this project use?",
    a: "This project uses React Router v7, which introduced file-based routing, improved TypeScript support, and tighter Vite integration.",
  },
  {
    q: "Do I need to know Tailwind CSS to use this?",
    a: "No. The Tailwind classes are straightforward and the project is structured so you can swap in any CSS approach you prefer.",
  },
  {
    q: "Can I add more pages?",
    a: "Yes. Add a new file under app/routes/ and it will be picked up automatically by the file-based router.",
  },
  {
    q: "Is this production-ready?",
    a: "The architecture and patterns are solid for production use. You'll want to add your own content, authentication, and backend as needed.",
  },
];

export default function Faq() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-500 text-lg">
          Quick answers to the questions we hear most often.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map(({ q, a }, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-base font-semibold text-slate-900 mb-2">{q}</h2>
            <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
