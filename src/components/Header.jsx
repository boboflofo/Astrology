import { Link } from "react-router-dom";
import '../App.css'


function Header() {
  return (
    <header>
      <nav>
        <div className="header">
        <div className="title">
          <Link to="/">
          <h1>Crystal Cosmos</h1>
          <h2>Let Our Ball Unveil Your Sun Sign</h2>
          </Link>
          </div>
          <div className="nav">
          <div>
          <p><Link to="/">Crystal Quiz</Link></p>
          </div>
          <div>
          <p><Link to="/findSign">Find Your Sign</Link></p>
          </div>
          <div>
          <p><Link to="/education">Zodiac School</Link></p>
          </div>
          </div>
          </div>
      </nav>
    </header>
  );
}
export default Header;