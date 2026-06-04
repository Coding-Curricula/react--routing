const contactItems = [
  {
    icon: "✉️",
    label: "Email",
    value: "chrisboydstun@gmail.com",
    href: "mailto:chrisboydstun@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "(123) 456-7890",
    href: "tel:+11234567890",
  },
  {
    icon: "📍",
    label: "Address",
    value: "123 Main Street, Anytown, USA",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          Contact Us
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed">
          Have a question or want to work together? Reach out — we'd love to
          hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
        {contactItems.map(({ icon, label, value, href }) => (
          <div
            key={label}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col gap-2"
          >
            <span className="text-2xl">{icon}</span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              {label}
            </span>
            {href ? (
              <a
                href={href}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-150 break-all"
              >
                {value}
              </a>
            ) : (
              <span className="text-sm text-slate-700">{value}</span>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          Send a Message
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="How can we help?"
              className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-150 shadow-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
