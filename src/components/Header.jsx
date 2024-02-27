import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/findSign">Find Sign</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;