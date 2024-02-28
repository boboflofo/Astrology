import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <h1>Crystal Cosmos</h1>
          <h2>Let Our Ball Unveil Your Sun Sign</h2>
          <li><Link to="/">Crystal Quiz</Link></li>
          <br />
          <li><Link to="/findSign">Find Your Sign</Link></li>
          <br />
          <li><Link to="/education">Zodiac School</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;