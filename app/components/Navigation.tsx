import { Link} from "react-router"

import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navigation-item">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="navigation-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}
