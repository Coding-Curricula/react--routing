import { NavLink } from "react-router";

import {useTheme} from "../context/ThemeContext";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <span>Current Theme: {theme}</span>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-indigo-600 tracking-tight">
          MyApp
        </span>
        <ul className="flex items-center gap-1">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/faq", label: "FAQ" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
