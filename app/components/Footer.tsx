import {Link} from "react-router"

import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <p>&copy; 2024 My Company. All rights reserved.</p>
      <p>
        <Link to="/contact">Contact Us</Link> | <Link to="/faq">FAQ</Link>
      </p>
    </div>
  )
}
