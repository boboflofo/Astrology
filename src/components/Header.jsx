import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <h1>Crystal Cosmos</h1>
          <h2>Let Our Ball Unveil Your Sun Sign</h2>
          <p><Link to="/">Crystal Quiz</Link></p>
          <br />
          <p><Link to="/findSign">Find Your Sign</Link></p>
          <br />
          <p><Link to="/education">Zodiac School</Link></p>
        </ul>
      </nav>
    </header>
  );
}
export default Header;